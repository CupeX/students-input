import React from 'react';
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

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <HomePagePage />
        </Route>
        <Route path="/add" exact>
          <AddPage />
        </Route>
        <Route path="/all-students" exact>
          <AllStudentsPage />
        </Route>
        <Route path="/all-subjects" exact>
          <AllSubjectsPage />
        </Route>
        <Route path="/all-professors" exact>
          <AllProfessorsPage />
        </Route>
        <Route path="/all-students/details/:id" exact>
          <StudentDetailsTest />
        </Route>
        <Route path="/all-students/edit/:id" exact>
          <EditStudentsPage />
        </Route>
        <Route path="/all-subjects/details/:id" exact>
          <SubjectDetailsTest />
        </Route>
        <Route path="/all-subjects/edit/:id" exact>
          <EditSubjectsPage />
        </Route>
        <Route path="/all-professors/details/:id" exact>
          <ProfessorDetailsTest />
        </Route>
        <Route path="/all-professors/edit/:id" exact>
          <EditProfessorPage />
        </Route>
        <Route path="/add-new-student" exact>
          <AddStudentPage />
        </Route>
        <Route path="/add-new-subject" exact>
          <AddSubjectPage />
        </Route>
        <Route path="/add-new-professor" exact>
          <AddProfessorsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
