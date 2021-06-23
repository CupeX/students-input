import { useContext, useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Card from '../UI/Card';
import { Button, ListGroup, ListGroupItem, Table } from 'reactstrap';
import DataContext from '../../store/data-context.js';

const StudentsList = () => {
  const { userStudents, isLoaded, removeStudentHandler } =
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
      removeStudentHandler(studentId, y);
      console.log('student deleted');
    } else {
      alert('wrong password!');
    }
  };

  // sorting
  const sortHandler = e => {
    const sortProperty = e;
    userStudents.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

    const sorted = JSON.parse(JSON.stringify(userStudents));
    setFilteredList(sorted);
  };

  let content = (
    <div>
      <h2> All Students</h2>

      <select
        className="sort-btn"
        onChange={e => {
          sortHandler(e.target.value);
        }}
      >
        <option value="order">sort by:</option>
        <option value="fName">First Name</option>
        <option value="lName">Last name</option>
        <option value="year">Date of Birth</option>
      </select>
    </div>
  );

  return (
    <Card>
      {content}
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
