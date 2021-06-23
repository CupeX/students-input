import React, { useContext } from 'react';
import db from '../../services/firebase';
import SubjectForm from './SubjectForm';
import DataContext from '../../store/data-context.js';

const AddNewSubject = () => {
  const { fetchAll } = useContext(DataContext);

  const addSubjectHandler = subjectData => {
    db.collection('subjects')
      .add(subjectData)
      .then(docRef => {})
      .then(() => {
        fetchAll();
      });
  };

  return <SubjectForm onAddSubject={addSubjectHandler} />;
};

export default AddNewSubject;
