import { Route, Switch } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import HomePagePage from './pages/HomePage';
import StudentDetailsPage from './pages/studentsPage/StudentDetailsPage';
import AllStudentsPage from './pages/studentsPage/AllStudentsPage';
import AddStudentPage from './pages/studentsPage/AddStudentPage';
import AllSubjectsPage from './pages/subjectsPage/AllSubjectsPage';
import AddSubjectPage from './pages/subjectsPage/AddSubjectPage';
import AllProfessorsPage from './pages/professorsPage/AllProfessorsPage';
import './App.css';
import AddProfessorsPage from './pages/professorsPage/AddProfessorsPage';
import AddPage from './pages/professorsPage/AddPage';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/students-input" exact>
          <HomePagePage />
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
        <Route path="/students-input/all-students/:id" exact>
          <StudentDetailsPage />
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
        <Route path="/students-input/add" exact>
          <AddPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
