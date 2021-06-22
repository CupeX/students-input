import { useState, useContext, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import db from '../firebase';
import Card from '../UI/Card';
import ModalProfList from './ModalProfList';
import ModalStudentsList from './ModalStudentsList';
import DataContext from '../../store/data-context.js';

const SubjectsList = () => {
  const { userSubjects, isLoaded } = useContext(DataContext);
  const [subjectId, setSubjectId] = useState('');
  const [studentsModal, setStudentsModal] = useState(false);
  const [professorsModal, setProfessorsModal] = useState(false);
  const match = useRouteMatch();

  const removeSubjectHandler = subjectId => {
    let subjectRef = db.collection('subjects');
    subjectRef
      .doc(subjectId)
      .delete()
      .then(() => {
        console.log('Subject successfully deleted!');
      });
  };

  const onAddStudentToSubject = subjectId => {
    setSubjectId(subjectId);
    setStudentsModal(true);
  };

  const closeStudentsModal = () => {
    setStudentsModal(false);
  };

  const onAddProfToSubject = subjectId => {
    setSubjectId(subjectId);
    setProfessorsModal(true);
  };

  const closeProfessorsModal = () => {
    setProfessorsModal(false);
  };

  // sorting
  const sortHandler = e => {
    const sortProperty = e;
    userSubjects.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

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
      {studentsModal && (
        <ModalStudentsList
          onCloseModal={closeStudentsModal}
          subjectId={subjectId}
          userSubjects={userSubjects}
        />
      )}

      {professorsModal && (
        <ModalProfList
          onCloseModal={closeProfessorsModal}
          subjectId={subjectId}
          userSubjects={userSubjects}
        />
      )}

      <ListGroup className="mt-5">
        {userSubjects.map(st => (
          <ListGroupItem
            className="my-3 py-4 d-flex justify-content-between align-items-center"
            key={st.id}
            id={st.id}
          >
            <div className="text-start">
              <span>
                subject: <strong> {st.subject}</strong>
              </span>
            </div>
            <div className="text-end">
              <Link to={`${match.url}/details/${st.id}`}>
                <Button className="btn mx-1" color="info">
                  info
                </Button>
              </Link>
              <Link to={`${match.url}/edit/${st.id}`}>
                <Button className="btn mx-1" color="secondary">
                  edit
                </Button>
              </Link>
              <Button
                className="btn mx-1"
                color="success"
                onClick={() => onAddStudentToSubject(st.id)}
              >
                add student
              </Button>
              <Button
                className="btn mx-1"
                color="success"
                onClick={() => onAddProfToSubject(st.id)}
              >
                add professor
              </Button>

              <Button
                className="btn mx-1"
                color="danger"
                onClick={() => removeSubjectHandler(st.id)}
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

export default SubjectsList;
