import { Route, Switch } from 'react-router-dom';

import './App.css';
import MainNavigation from './components/layout/MainNavigation';
import HomePagePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import AllStudentsPage from './pages/studentsPage/AllStudentsPage';
import AddStudentPage from './pages/studentsPage/AddStudentPage';
import EditStudentsPage from './pages/studentsPage/EditStudentPage';
// import StudentDetailsPage from './pages/studentsPage/StudentDetailsPage';
import AllProfessorsPage from './pages/professorsPage/AllProfessorsPage';
import AddProfessorsPage from './pages/professorsPage/AddProfessorsPage';
import EditProfessorPage from './pages/professorsPage/EditProfessorPage';
// import ProfessorDetailsPage from './pages/professorsPage/ProffesorDetailsPage';
import AllSubjectsPage from './pages/subjectsPage/AllSubjectsPage';
import AddSubjectPage from './pages/subjectsPage/AddSubjectPage';
import EditSubjectsPage from './pages/subjectsPage/EditSubjectPage';
// import SubjectDetailsPage from './pages/subjectsPage/SubjectDetailsPage';
// import SubjectDetailsTest from './components/subjects/SubjectDetailsTest';
import LoadingData from './components/comon/LoadingData';

function App() {
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
          <LoadingData />
        </Route>
        <Route path="/students-input/all-students/edit/:id" exact>
          <EditStudentsPage />
        </Route>
        <Route path="/students-input/all-subjects/details/:id" exact>
          <LoadingData />
        </Route>
        <Route path="/students-input/all-subjects/edit/:id" exact>
          <EditSubjectsPage />
        </Route>
        <Route path="/students-input/all-professors/details/:id" exact>
          <LoadingData />
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
