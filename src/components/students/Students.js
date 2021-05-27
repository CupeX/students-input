import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';

import StudentForm from './StudentForm';
import StudentsList from './StudentList';

const Students = props => {
  const [userStudents, setUserStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const addStudentHandler = student => {
    console.log(userStudents);
    fetch(
      'https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student.json',
      {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    setUserStudents(prevStudents => [...prevStudents, { ...student }]);
  };

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

  const sortHandler = e => {
    const sortProperty = e;
    userStudents.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

    const sorted = JSON.parse(JSON.stringify(userStudents));
    setUserStudents(sorted);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <StudentForm onAddStudent={addStudentHandler} />

      <section>
        <Card>
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

          <StudentsList
            students={userStudents}
            onRemoveStudent={checkPassHandler}
          />
        </Card>
      </section>
    </div>
  );
};

export default Students;
