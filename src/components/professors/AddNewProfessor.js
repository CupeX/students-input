import React from 'react';
import db from '../firebase';
import ProfessorForm from './ProfessorForm';

const AddNewProfessor = () => {
  const addProfessorHandler = professorData => {
    db.collection('professors')
      .add(professorData)
      .then(docRef => {});
  };

  return <ProfessorForm onAddProfessor={addProfessorHandler} />;
};

export default AddNewProfessor;
