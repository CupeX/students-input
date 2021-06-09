import { useState, useEffect } from 'react';
import db from '../firebase';
import AddProfToSubjectList from './AddProfToSubjectList';

import './Modal.css';

const ModalProfList = props => {
  const subjectId = props.subjectId;
  const subjectObj = props.userSubjects.find(x => x.id === subjectId);
  const { subject } = subjectObj;

  const [userProfessors, setUserProfessors] = useState([]);
  let profRef = db.collection('professors');
  let subjRef = db.collection('subjects');
  // let studentRef = db.collection('students');

  useEffect(() => {
    profRef.get().then(professors =>
      professors.forEach(student => {
        let data = student.data();
        let { id } = student;

        let payload = {
          id,
          ...data,
        };

        // check if there is allready professors in list
        if (!userProfessors.find(x => (x.id = id))) {
          setUserProfessors(professors => [...professors, payload]);
        }
      })
    );
  }, []);
  console.log(userProfessors);

  const addProfessorToSubjectHandler = professorId => {
    profRef.doc(professorId).update({ subject: { subjectId, title: subject } });

    const profObj = userProfessors.find(x => x.id === professorId);
    const { fName, lName } = profObj;

    subjRef.doc(subjectId).update({ professor: { fName, lName } });

    // studentRef.get().then(x => {
    //   x.forEach(doc => {
    //     doc.ref.set(
    //       { subjects: { [subjectId]: { fName, lName }, subject: subject } },
    //       { merge: true }
    //     );
    //   });
    // });

    // [subjectId]: { professor: { fName, lName } },

    // const updatedSubjectInAllStudents = userStudents.map(x => {
    //   if (x.subjects && Object.keys(x.subjects).includes(subjectId)) {
    //     x.subjects[subjectId].title = newSubject;
    //   }
    //   return x;
    // });
    // setUserStudents(updatedSubjectInAllStudents);
  };

  return (
    <div className="Modal">
      <button onClick={() => props.onCloseModal()}>close modal</button>

      <AddProfToSubjectList
        professors={userProfessors}
        onAddProfessorToSubject={addProfessorToSubjectHandler}
      />
    </div>
  );
};

export default ModalProfList;
