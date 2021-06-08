import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../firebase';
import SubjectForm from './SubjectForm';

const EditSubject = () => {
  const params = useParams();
  const [subject, setSubject] = useState({});
  let subjectRef = db.collection('subjects').doc(params.id);

  useEffect(() => {
    subjectRef.get().then(doc => {
      const subject = doc.data();
      setSubject(subject);
    });
  }, []);

  const changeHandler = editedSubject => {
    subjectRef.update({ subject: editedSubject.subject });
  };

  return <SubjectForm onAddSubject={changeHandler} subject={subject} />;
};

export default EditSubject;
