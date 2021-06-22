import { Link, useRouteMatch } from 'react-router-dom';
import { useContext } from 'react';
import db from '../firebase';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import DataContext from '../../store/data-context.js';
import Card from '../UI/Card';

const ProfessorsList = () => {
  const match = useRouteMatch();

  const { userProfessors, isLoaded } = useContext(DataContext);

  const removeProfessorHandler = professorId => {
    let postRef = db.collection('professors');
    postRef
      .doc(professorId)
      .delete()
      .then(() => {
        console.log('professor successfully deleted!');
      });
  };

  // sorting
  const sortHandler = e => {
    const sortProperty = e;
    userProfessors.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

    // const sorted = JSON.parse(JSON.stringify(userSubjects));
  };

  let content = (
    <div>
      <h2> All Subjects</h2>

      <select
        className="sort-btn"
        onChange={e => {
          sortHandler(e.target.value);
        }}
      >
        <option value="order">sort by:</option>
        <option value="fName">First Name</option>
        <option value="lName">Last name</option>
      </select>
    </div>
  );

  return (
    <Card>
      {content}
      {!isLoaded && <h2>Loading...</h2>}
      <ListGroup className="mt-5">
        {userProfessors.map(st => (
          <ListGroupItem
            className="my-3 py-4 d-flex justify-content-between align-items-center "
            key={st.id}
            id={st.id}
          >
            <div>
              <span>
                professor:{' '}
                <strong>
                  {st.fName} {st.lName}
                </strong>
              </span>
            </div>
            <div className="btn-wrapper">
              <Link to={`${match.url}/details/${st.id}`}>
                <Button className="btn mx-1" color="info">
                  info
                </Button>
              </Link>
              <Link to={`${match.url}/edit/${st.id}`}>
                <Button className="btn mx-1" color="success">
                  edit
                </Button>
              </Link>
              <Button
                className="btn mx-1"
                color="danger"
                onClick={() => removeProfessorHandler(st.id)}
              >
                delete
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
};

export default ProfessorsList;
