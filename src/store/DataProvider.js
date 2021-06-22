import React, { useEffect, useState } from 'react';
import DataContext from './data-context';
import db from '../components/firebase';

const DataProvider = props => {
  const [userSubjects, setUserSubjects] = useState({});
  const [userStudents, setUserStudents] = useState([]);
  const [userProfessors, setUserProfessors] = useState([]);
  const [isLoadedStudents, setIsLoadedStudents] = useState(false);
  const [isLoadedSubjects, setIsLoadedSubjects] = useState(false);
  const [isLoadedProfessors, setIsLoadedProfessors] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoadedStudents && isLoadedSubjects) {
      setIsLoaded(true);
    }
  }, [isLoadedStudents, isLoadedSubjects, isLoadedProfessors, isLoaded]);

  useEffect(() => {
    let subjectRef = db.collection('subjects');
    subjectRef

      .get()
      .then(subjects => {
        const profArray = [];
        subjects.forEach(subject => {
          let data = subject.data();
          let { id } = subject;

          let payload = {
            id,
            ...data,
          };
          profArray.push(payload);
        });
        setUserSubjects(profArray);
      })
      .finally(() => {
        setIsLoadedSubjects(true);
      });
  }, []);

  useEffect(() => {
    let studentRef = db.collection('students');
    studentRef
      .get()
      .then(students => {
        const studArray = [];
        students.forEach(student => {
          let data = student.data();
          let { id } = student;

          let payload = {
            id,
            ...data,
          };
          studArray.push(payload);
        });
        setUserStudents(studArray);
      })
      .finally(() => {
        setIsLoadedStudents(true);
      });
  }, []);

  useEffect(() => {
    let profRef = db.collection('professors');
    profRef
      .get()
      .then(professors => {
        const profArray = [];
        professors.forEach(professor => {
          let data = professor.data();
          let { id } = professor;

          let payload = {
            id,
            ...data,
          };
          profArray.push(payload);
        });
        setUserProfessors(profArray);
      })
      .finally(() => {
        setIsLoadedProfessors(true);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{ userSubjects, userProfessors, userStudents, isLoaded }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
