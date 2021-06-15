import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import db from '../firebase';
import Card from '../UI/Card';

// import './students.css';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';

const StudentsList = () => {
  const match = useRouteMatch();
  const [userStudents, setUserStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let postRef = db.collection('students');

  useEffect(() => {
    postRef.get().then(students =>
      students.forEach(student => {
        let data = student.data();
        let { id } = student;

        let payload = {
          id,
          ...data,
        };

        // check if there is allready students in list
        if (!userStudents.find(x => (x.id = id))) {
          setUserStudents(students => [...students, payload]);
          setIsLoading(false);
        }
      })
    );
  }, []);

  const removeStudentHandler = studentId => {
    postRef
      .doc(studentId)
      .delete()
      .then(() => {
        console.log('Student successfully deleted!');
      });
  };

  const checkPassHandler = studentId => {
    const passInput = prompt('enter password');
    const getPass = userStudents
      .filter(st => st.id === studentId)
      .map(st => st.password);

    if (+passInput === +getPass) {
      removeStudentHandler(studentId);
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
    setUserStudents(sorted);
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
      {isLoading && <h2>Loading...</h2>}
      <ListGroup className="mt-5">
        {userStudents.map(st => (
          <ListGroupItem className="my-3" key={st.id} id={st.id}>
            <div className="text-start">
              <span>student: </span>
              <span>{st.fName} </span>
              <span>{st.lName}, </span>
              <span>born: {st.year}</span>
            </div>

            <div className="text-end">
              <Link to={`${match.url}/details/${st.id}`}>
                <Button color="info">info</Button>
              </Link>
              <Link to={`${match.url}/edit/${st.id}`}>
                <Button color="success">edit</Button>
              </Link>
              <Button color="danger" onClick={() => checkPassHandler(st.id)}>
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
