import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import db from '../firebase';

import './students.css';

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

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      {userStudents.map(st => (
        <div className="item-wrapper" key={st.id} id={st.id}>
          <div className="info-wrapper">
            <span>student: </span>
            <span>{st.fName}</span>
            <span>{st.lName}</span>
          </div>
          <div className="btn-wrapper">
            <Link to={`${match.url}/details/${st.id}`}>
              <button className="info-btn">&#8505;</button>
            </Link>
            <Link to={`${match.url}/edit/${st.id}`}>
              <button className="change-btn">edit</button>
            </Link>
            <button
              className="delete-btn"
              onClick={() => checkPassHandler(st.id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StudentsList;
