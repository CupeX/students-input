import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../firebase';
import ProfessorDetailsTest from '../professors/ProfessorDetailsTest';
import StudentDetailsTest from '../students/StudentDetailsTest';
import SubjectDetailsTest from '../subjects/SubjectDetailsTest';
import Card from '../UI/Card';

const LoadingData = () => {
  const [userSubjects, setUserSubjects] = useState({});
  const [userStudents, setUserStudents] = useState([]);
  const [userProfessors, setUserProfessors] = useState([]);
  const [isLoadedStudents, setIsLoadedStudents] = useState(false);
  const [isLoadedSubjects, setIsLoadedSubjects] = useState(false);
  const [isLoadedProfessors, setIsLoadedProfessors] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const params = useParams();

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

  if (!isLoaded) {
    return (
      <Card>
        <h2>Loading...</h2>
      </Card>
    );
  } else {
    if (userSubjects.find(x => x.id === params.id)) {
      return (
        <SubjectDetailsTest
          userSubjects={userSubjects}
          userStudents={userStudents}
          userProfessors={userProfessors}
        />
      );
    } else if (userStudents.find(x => x.id === params.id)) {
      return (
        <StudentDetailsTest
          userSubjects={userSubjects}
          userStudents={userStudents}
          userProfessors={userProfessors}
        />
      );
    } else if (userProfessors.find(x => x.id === params.id)) {
      return (
        <ProfessorDetailsTest
          userSubjects={userSubjects}
          userStudents={userStudents}
          userProfessors={userProfessors}
        />
      );
    }
  }

  //   return;
};

export { SubjectDetailsTest };
export default LoadingData;
