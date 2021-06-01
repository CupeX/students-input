import { Link } from 'react-router-dom';

import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/homepage">CupeX first app</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/allstudents">All students</Link>
          </li>
          <li>
            <Link to="/newstudent">Add NEW student</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
