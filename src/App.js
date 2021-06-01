import { Route, Switch, useParams } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import AllStudents from './pages/AllStudents';
import NewStudent from './pages/NewStudent';
import HomePage from './pages/HomePage';
import StudentDetails from './components/students/StudentDetails';
import './App.css';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/homepage" exact>
          <HomePage />
        </Route>
        <Route path="/allstudents" exact>
          <AllStudents />
        </Route>
        <Route path="/allstudents/:id" exact>
          <StudentDetails />
        </Route>
        <Route path="/newstudent" exact>
          <NewStudent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
