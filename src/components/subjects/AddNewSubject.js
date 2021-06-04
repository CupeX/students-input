import SubjectForm from './SubjectForm';

const AddNewSubject = () => {
  const addSubjectHandler = subjectData => {
    console.log(subjectData);
    fetch(
      'https://students-input-default-rtdb.europe-west1.firebasedatabase.app/subjects.json',
      {
        method: 'POST',
        body: JSON.stringify(subjectData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return <SubjectForm onAddSubject={addSubjectHandler} />;
};

export default AddNewSubject;
