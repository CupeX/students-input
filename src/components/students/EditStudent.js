import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../../services/firebase';
import StudentForm from './StudentForm';

const EditStudent = () => {
  const params = useParams();
  const [student, setStudent] = useState({});
  let postRef = db.collection('students').doc(params.id);

  useEffect(() => {
    postRef.get().then(doc => {
      const student = doc.data();
      setStudent(student);
    });
  }, []);

  const changeHandler = editedStudent => {
    postRef.update(editedStudent).then(() => {
      console.log('Document edited');
    });
  };

  return <StudentForm onAddStudent={changeHandler} student={student} />;
};

export default EditStudent;
