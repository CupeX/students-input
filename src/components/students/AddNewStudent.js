import React from 'react';
import db from '../firebase';
import StudentForm from './StudentForm';

const AddNewStudent = () => {
  const addStudentHandler = student => {
    db.collection('students')
      .add(student)
      .then(docRef => {});
  };

  return <StudentForm onAddStudent={addStudentHandler} />;
};

export default AddNewStudent;
