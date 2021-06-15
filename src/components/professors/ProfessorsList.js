import { Link, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import db from '../firebase';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const ProfessorsList = props => {
  const match = useRouteMatch();

  const [userProfessors, setUserProfessors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let postRef = db.collection('professors');

  useEffect(() => {
    postRef.get().then(professors =>
      professors.forEach(professor => {
        let data = professor.data();
        let { id } = professor;

        let payload = {
          id,
          ...data,
        };

        // check if there is allready students in list
        if (!userProfessors.find(x => (x.id = id))) {
          setUserProfessors(professors => [...professors, payload]);
          setIsLoading(false);
        }
      })
    );
  }, []);

  const removeProfessorHandler = professorId => {
    postRef
      .doc(professorId)
      .delete()
      .then(() => {
        console.log('professor successfully deleted!');
      });
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
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
  );
};

export default ProfessorsList;
