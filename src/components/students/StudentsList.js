import { useContext, useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Card from '../UI/Card';
import { Button, ListGroup, ListGroupItem, Table } from 'reactstrap';
import DataContext from '../../store/data-context.js';

const StudentsList = () => {
  const { userStudents, isLoaded, removeHandler, content } =
    useContext(DataContext);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(userStudents);
  }, [isLoaded, userStudents]);

  const match = useRouteMatch();

  const checkPassHandler = (studentId, y) => {
    const passInput = prompt('enter password');
    const [password] = userStudents
      .filter(st => st.id === studentId)
      .map(st => st.password);

    if (passInput === password) {
      removeHandler(studentId, y);
      console.log('student deleted');
    } else {
      alert('wrong password!');
    }
  };

  return (
    <Card>
      <h2> All Students</h2>

      {content(userStudents, 'userStudents', 'fName', 'lName', 'year')}

      {!isLoaded && <h2>Loading...</h2>}
      <ListGroup className="mt-5">
        {filteredList.map(st => (
          <ListGroupItem
            className="my-3 d-flex justify-content-between align-items-center "
            key={st.id}
            id={st.id}
          >
            <Table className="text-start w-50 ">
              <tbody>
                <tr>
                  <td>
                    student:
                    <strong>
                      {st.fName} {st.lName}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>born: {st.year}</td>
                </tr>
              </tbody>
            </Table>

            <div className="text-end">
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
                onClick={() => checkPassHandler(st.id, 'students')}
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

export default StudentsList;
