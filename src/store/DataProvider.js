import React, { useEffect, useState } from 'react';
import DataContext from './data-context';
import db from '../components/firebase';
import FetchStudents from '../services/FetchStudents';
import FetchSubjects from '../services/FetchSubjects';
import FetchProfessors from '../services/FetchProfessors';

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

  FetchSubjects();
  console.log(FetchSubjects());
  // FetchStudents();
  // FetchProfessors();

  // const fetchAll = () => {
  //   fetchStudents();
  //   fetchSubjects();
  //   fetchProfessors();
  // };

  // useEffect(() => {
  //   fetchAll();
  // }, []);

  // const removeStudentHandler = (x, y) => {
  //   let postRef = db.collection(y);
  //   postRef.doc(x).delete();
  //   fetchAll();
  // };

  // const fetchStudents = () => {
  //   let studentRef = db.collection('students');
  //   studentRef
  //     .get()
  //     .then(students => {
  //       const studArray = [];
  //       students.forEach(student => {
  //         let data = student.data();
  //         let { id } = student;

  //         let payload = {
  //           id,
  //           ...data,
  //         };
  //         studArray.push(payload);
  //       });
  //       setUserStudents(studArray);
  //     })
  //     .finally(setIsLoadedStudents(true));
  // };

  // const fetchSubjects = () => {
  //   let subjectRef = db.collection('subjects');
  //   subjectRef
  //     .get()
  //     .then(subjects => {
  //       const subArray = [];
  //       subjects.forEach(subject => {
  //         let data = subject.data();
  //         let { id } = subject;

  //         let payload = {
  //           id,
  //           ...data,
  //         };
  //         subArray.push(payload);
  //       });
  //       setUserSubjects(subArray);
  //     })
  //     .finally(setIsLoadedSubjects(true));
  // };

  // const fetchProfessors = () => {
  //   let profRef = db.collection('professors');
  //   profRef
  //     .get()
  //     .then(professors => {
  //       const profArray = [];
  //       professors.forEach(professor => {
  //         let data = professor.data();
  //         let { id } = professor;

  //         let payload = {
  //           id,
  //           ...data,
  //         };
  //         profArray.push(payload);
  //       });
  //       setUserProfessors(profArray);
  //     })
  //     .finally(setIsLoadedProfessors(true));
  // };

  return (
    <DataContext.Provider
      value={{
        userSubjects,
        userProfessors,
        userStudents,
        isLoaded,
        // removeStudentHandler,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
