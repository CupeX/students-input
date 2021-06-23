import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../../services/firebase';
import ProfessorForm from './ProfessorForm';

const EditProfessor = () => {
  const params = useParams();
  const [professor, setProfessor] = useState({});
  let postRef = db.collection('professors').doc(params.id);

  useEffect(() => {
    postRef.get().then(doc => {
      const professor = doc.data();
      setProfessor(professor);
    });
  }, []);

  const changeHandler = editedprofessor => {
    postRef.update(editedprofessor).then(() => {
      console.log('Document edited');
    });
  };

  return <ProfessorForm onAddProfessor={changeHandler} professor={professor} />;
};

export default EditProfessor;
