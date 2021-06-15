import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Card from '../UI/Card';

import './index.css';

const AddNew = () => {
  return (
    <Card>
      <h2>Add new:</h2>
      <div className="d-flex justify-content-around m-5 ">
        <Link to="/students-input/add-new-student">
          <Button className="btn text-uppercase" color="success">
            student
          </Button>
        </Link>

        <Link to="/students-input/add-new-subject">
          <Button className="btn text-uppercase" color="success">
            subject
          </Button>
        </Link>

        <Link to="/students-input/add-new-professor">
          <Button className="btn text-uppercase" color="success">
            professor
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default AddNew;
