import StudentForm from './StudentForm';

const AddNewStudent = () => {
  const addStudentHandler = student => {
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

    //   this code is not needed anymore in separate file
    // setUserStudents(prevStudents => [
    //   { id: nanoid(), ...student },
    //   ...prevStudents,
    // ]);
  };

  return <StudentForm onAddStudent={addStudentHandler} />;
};

export default AddNewStudent;
