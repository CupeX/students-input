import React, { useState } from "react";

import StudentForm from "./StudentForm";
import StudentsList from "./StudentList";

const Students = () => {
  const [userStudents, setUserStudents] = useState([]);

  const addStudentHandler = (student) => {
    setUserStudents((prevStudents) => [
      ...prevStudents,
      { id: Math.random().toString(), ...student },
    ]);
  };

  const removeStudentHandler = (studentId) => {
    const newList = userStudents.filter((st) => st.id !== studentId);
    setUserStudents(newList);
  };

  const checkPassHandler = (studentId) => {
    const passInput = prompt("enter password");
    const passGet = userStudents.map((st) => st.password);

    if (+passInput === +passGet) {
      removeStudentHandler(studentId);
    } else {
      alert("wrong password!");
    }
  };

  const sortByFNameHandler = () => {
    userStudents.sort((a, b) => {
      const nameA = a.fName.toUpperCase();
      const nameB = b.fName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const sorted = JSON.parse(JSON.stringify(userStudents));
    setUserStudents(sorted);
  };

  return (
    <div>
      <StudentForm onAddStudent={addStudentHandler} />

      <section>
        <StudentsList
          students={userStudents}
          onRemoveStudent={checkPassHandler}
          onSortByFName={sortByFNameHandler}
        />
      </section>
    </div>
  );
};

export default Students;
