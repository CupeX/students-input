import { Route, Switch } from 'react-router-dom';

import AllStudents from './pages/AllStudents';
import './App.css';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllStudents />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
