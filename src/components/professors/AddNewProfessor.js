import React, { useContext } from 'react';
import db from '../../services/firebase';
import ProfessorForm from './ProfessorForm';
import DataContext from '../../store/data-context.js';

const AddNewProfessor = () => {
  const { fetchAll } = useContext(DataContext);

  const addProfessorHandler = professorData => {
    db.collection('professors')
      .add(professorData)
      .then(docRef => {})
      .then(() => {
        fetchAll();
      });
  };

  return <ProfessorForm onAddProfessor={addProfessorHandler} />;
};

export default AddNewProfessor;
