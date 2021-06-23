import React, { useContext } from 'react';
import db from '../../services/firebase';
import StudentForm from './StudentForm';
import DataContext from '../../store/data-context.js';

const AddNewStudent = () => {
  const { fetchAll } = useContext(DataContext);

  const addStudentHandler = student => {
    db.collection('students')
      .add(student)
      .then(docRef => {})
      .then(() => {
        fetchAll();
      });
  };

  return <StudentForm onAddStudent={addStudentHandler} />;
};

export default AddNewStudent;
