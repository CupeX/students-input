import { useContext, useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import DataContext from '../../store/data-context.js';
import Card from '../UI/Card';

const ProfessorsList = () => {
  const match = useRouteMatch();
  const [filteredList, setFilteredList] = useState([]);

  const { userProfessors, isLoaded, removeHandler, content } =
    useContext(DataContext);

  useEffect(() => {
    setFilteredList(userProfessors);
  }, [isLoaded, userProfessors]);

  return (
    <Card>
      <h2> All Students</h2>

      {content(userProfessors, 'userProfessors', 'fName', 'lName')}

      {!isLoaded && <h2>Loading...</h2>}
      <ListGroup className="mt-5">
        {filteredList.map(st => (
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
                onClick={() => removeHandler(st.id, 'professors')}
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
