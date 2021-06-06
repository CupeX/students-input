import { Link, useHistory } from 'react-router-dom';

import './MainNavigation.css';

const MainNavigation = () => {
  const history = useHistory();
  const testing = e => {
    history.push(`/students-input/${e}`);
  };
  return (
    <header>
      <div className="logo">
        <Link to="/students-input">CupeX first app</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/students-input/all-students">Students</Link>
          </li>
          <li>
            <Link to="/students-input/all-subjects">Subjects</Link>
          </li>
          <li>
            <Link to="/students-input/all-professors">Professors</Link>
          </li>
          <li>
            <select
              className="sort-btn"
              onChange={e => testing(e.target.value)}
            >
              <option value="add">Add new?</option>
              <option value="add-new-student">Add new student</option>
              <option value="add-new-professor">Add new profesor</option>
              <option value="add-new-subject">Add new subject</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
