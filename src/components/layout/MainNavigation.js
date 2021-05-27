import { Link } from 'react-router-dom';

import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <header>
      <div className="logo">CupeX first app</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All students</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
