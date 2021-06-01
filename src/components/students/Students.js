import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import StudentDetails from './StudentDetails';

import StudentsList from './StudentList';

const Students = () => {
  const [userStudents, setUserStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isViewing, setIsViewing] = useState(false);
  const [uniqeId, setUniqeId] = useState('');

  // loading students from database
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student.json'
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const students = [];

        for (const key in data) {
          const student = { id: key, ...data[key] };

          students.push(student);
        }
        setIsLoading(false);
        setUserStudents(students);
      });
  }, []);

  // removing student
  const removeStudentHandler = studentId => {
    fetch(
      `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/${studentId}.json`,
      {
        method: 'DELETE',
      }
    );
    const newList = userStudents.filter(st => st.id !== studentId);
    setUserStudents(newList);
  };

  // check password to remove student
  const checkPassHandler = studentId => {
    const passInput = prompt('enter password');
    const getPass = userStudents
      .filter(st => st.id === studentId)
      .map(st => st.password);

    if (+passInput === +getPass) {
      removeStudentHandler(studentId);
    } else {
      alert('wrong password!');
    }
  };

  // change first and last name
  const changeInputHandler = studentId => {
    const newFName = prompt('enter new first name');
    const newLName = prompt('enter new last name');
    userStudents
      .filter(st => st.id === studentId)
      .map(st => {
        st.fName = newFName;
        st.lName = newLName;
      });

    // change UI list
    const changeUserInput = JSON.parse(JSON.stringify(userStudents));
    setUserStudents(changeUserInput);

    // update for database
    const changedStudent = userStudents.filter(st => st.id === studentId);

    fetch(
      `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/${studentId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(...changedStudent),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  // sorting
  const sortHandler = e => {
    const sortProperty = e;
    userStudents.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

    const sorted = JSON.parse(JSON.stringify(userStudents));
    setUserStudents(sorted);
  };

  // const viewStudentHandler = studentId => {
  //   const viewStudent = userStudents.filter(st => st.id === studentId);
  //   console.log(viewStudent);
  //   console.log('clicked');
  // };

  const viewStudentHandler = studentId => {
    const check = userStudents.filter(st => st.id === studentId);
    setUniqeId(check);
    setIsViewing(true);
  };

  const content = (
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

  if (isLoading) {
    return (
      <Card>
        <h2>Loading...</h2>
      </Card>
    );
  }

  return (
    <div>
      <section>
        <Card>
          {isViewing && <StudentDetails student={uniqeId} />}

          {!isViewing && content}
          {!isViewing && (
            <StudentsList
              students={userStudents}
              onRemoveStudent={checkPassHandler}
              onChangeInput={changeInputHandler}
              onViewStudent={viewStudentHandler}
            />
          )}
        </Card>
      </section>
    </div>
  );
};

export default Students;
