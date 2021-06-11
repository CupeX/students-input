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

  const addProfessorToSubjectHandler = professorId => {
    // profRef.doc(professorId).update({ subject: { subjectId, title: subject } });
    profRef.doc(professorId).update({ subject: subjectId });
    subjRef.doc(subjectId).update({ professor: professorId });

    // const profObj = userProfessors.find(x => x.id === professorId);
    // const { fName, lName } = profObj;

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
      <button className="add-btn" onClick={() => props.onCloseModal()}>
        close list
      </button>

      <AddProfToSubjectList
        subjectId={subjectId}
        professors={userProfessors}
        onAddProfessorToSubject={addProfessorToSubjectHandler}
      />
    </div>
  );
};

export default ModalProfList;
