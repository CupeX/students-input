import { Link } from 'react-router-dom';
import Card from '../UI/Card';

import './index.css';

const AddNew = () => {
  return (
    <Card>
      <h2>Add new:</h2>
      <ul className="addNewUl">
        <li>
          <Link to="/students-input/add-new-student">
            <button className="change-btn">student</button>
          </Link>
        </li>
        <li>
          <Link to="/students-input/add-new-subject">
            <button className="change-btn">subject</button>
          </Link>
        </li>
        <li>
          <Link to="/students-input/add-new-professor">
            <button className="change-btn">professor</button>
          </Link>
        </li>
      </ul>
    </Card>
  );
};

export default AddNew;
