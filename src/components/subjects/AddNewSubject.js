import SubjectForm from './SubjectForm';

const AddNewSubject = () => {
  const addSubjectHandler = subjectData => {
    const subject = { title: subjectData.subject, professor: '' };

    fetch(
      'https://students-input-default-rtdb.europe-west1.firebasedatabase.app/subjects.json',
      {
        method: 'POST',
        body: JSON.stringify(subject),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return <SubjectForm onAddSubject={addSubjectHandler} />;
};

export default AddNewSubject;
