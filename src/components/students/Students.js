import React, { useState } from "react";

import StudentForm from "./StudentForm";
import StudentsList from "./StudentList";

const Students = () => {
  const [userStudents, setUserStudents] = useState([]);
  


  const addStudentHandler = (student) => {
    setUserStudents((prevStudents) => [
      ...prevStudents,
      {
        id: Math.random().toString(), ...student
      }])
  };

  const removeStudentHandler = (studentId) => {
    const newList = userStudents.filter((st) => st.id !== studentId);
    setUserStudents(newList);
  };

  const checkPassHandler = (studentId) => {
    const passInput = prompt("enter password");
    const getPass = userStudents
      .filter((st) => st.id === studentId)
      .map((st) => st.password);

    if (+passInput === +getPass) {
      removeStudentHandler(studentId);
    } else {
      alert("wrong password!");
    }
  };

  const sortHandler = (e) => {
    const sortProperty = e;
    userStudents.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

    const sorted = JSON.parse(JSON.stringify(userStudents));
    setUserStudents(sorted);
  }; 

  return (
    <div>
      <StudentForm onAddStudent={addStudentHandler} />

      <section>
        <select
          onChange={(e) => {
            sortHandler(e.target.value);
          }}
        >
        <option value='order'>sort by:</option>
        <option value="fName">First Name</option>
        <option value="lName">Last name</option>
        <option value="year">Date of Birth</option>
      </select>
        <StudentsList
          students={userStudents}
          onRemoveStudent={checkPassHandler}
          onSort={sortHandler}
        />
      </section>
    </div>
  );
};

export default Students;
