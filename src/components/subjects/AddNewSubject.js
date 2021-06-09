import React from 'react';
import db from '../firebase';
import SubjectForm from './SubjectForm';

const AddNewSubject = () => {
  const addSubjectHandler = subjectData => {
    db.collection('subjects')
      .add(subjectData)
      .then(docRef => {});
  };

  return <SubjectForm onAddSubject={addSubjectHandler} />;
};

export default AddNewSubject;
