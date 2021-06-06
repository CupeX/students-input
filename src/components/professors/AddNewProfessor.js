import ProfessorForm from './ProfessorForm';

const AddNewProfessor = () => {
  const addProfessorHandler = professorData => {
    fetch(
      'https://students-input-default-rtdb.europe-west1.firebasedatabase.app/professors.json',
      {
        method: 'POST',
        body: JSON.stringify(professorData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return <ProfessorForm onAddProfessor={addProfessorHandler} />;
};

export default AddNewProfessor;
