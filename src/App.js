import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import MainNavigation from './components/layout/MainNavigation';
import HomePagePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import AllStudentsPage from './pages/studentsPage/AllStudentsPage';
import AddStudentPage from './pages/studentsPage/AddStudentPage';
import EditStudentsPage from './pages/studentsPage/EditStudentPage';
import AllProfessorsPage from './pages/professorsPage/AllProfessorsPage';
import AddProfessorsPage from './pages/professorsPage/AddProfessorsPage';
import EditProfessorPage from './pages/professorsPage/EditProfessorPage';
import AllSubjectsPage from './pages/subjectsPage/AllSubjectsPage';
import AddSubjectPage from './pages/subjectsPage/AddSubjectPage';
import EditSubjectsPage from './pages/subjectsPage/EditSubjectPage';
import StudentDetailsTest from './components/students/StudentDetailsTest';
import SubjectDetailsTest from './components/subjects/SubjectDetailsTest';
import ProfessorDetailsTest from './components/professors/ProfessorDetailsTest';
import db from './components/firebase';

function App() {
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
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/students-input" exact>
          <HomePagePage />
        </Route>
        <Route path="/students-input/add" exact>
          <AddPage />
        </Route>
        <Route path="/students-input/all-students" exact>
          <AllStudentsPage />
        </Route>
        <Route path="/students-input/all-subjects" exact>
          <AllSubjectsPage />
        </Route>
        <Route path="/students-input/all-professors" exact>
          <AllProfessorsPage />
        </Route>
        <Route path="/students-input/all-students/details/:id" exact>
          <StudentDetailsTest
            userSubjects={userSubjects}
            userStudents={userStudents}
            userProfessors={userProfessors}
          />
        </Route>
        <Route path="/students-input/all-students/edit/:id" exact>
          <EditStudentsPage />
        </Route>
        <Route path="/students-input/all-subjects/details/:id" exact>
          <SubjectDetailsTest
            userSubjects={userSubjects}
            userStudents={userStudents}
            userProfessors={userProfessors}
          />
        </Route>
        <Route path="/students-input/all-subjects/edit/:id" exact>
          <EditSubjectsPage />
        </Route>
        <Route path="/students-input/all-professors/details/:id" exact>
          <ProfessorDetailsTest
            userSubjects={userSubjects}
            userStudents={userStudents}
            userProfessors={userProfessors}
          />
        </Route>
        <Route path="/students-input/all-professors/edit/:id" exact>
          <EditProfessorPage />
        </Route>
        <Route path="/students-input/add-new-student" exact>
          <AddStudentPage />
        </Route>
        <Route path="/students-input/add-new-subject" exact>
          <AddSubjectPage />
        </Route>
        <Route path="/students-input/add-new-professor" exact>
          <AddProfessorsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
