import { useEffect, useState } from 'react';
import db from '../firebase';
import AddStudentToSubjectList from './AddStudentToSubjectList';
import './Modal.css';

const ModalStudentsList = props => {
  const subjectId = props.subjectId;
  const subjectObj = props.userSubjects.find(x => x.id === subjectId);
  let { subject, professor } = subjectObj;

  const [userStudents, setUserStudents] = useState([]);
  let postRef = db.collection('students');

  useEffect(() => {
    postRef.get().then(students =>
      students.forEach(student => {
        let data = student.data();
        let { id } = student;

        let payload = {
          id,
          ...data,
        };

        // check if there is allready students in list
        if (!userStudents.find(x => (x.id = id))) {
          setUserStudents(students => [...students, payload]);
        }
      })
    );
  }, []);

  const addStudentToSubjectHandler = studentId => {
    if (professor === undefined) {
      professor = '';
    } else {
      postRef
        .doc(studentId)
        .set(
          { subjects: { [subjectId]: { subject, professor } } },
          { merge: true }
        );
    }
  };

  return (
    <div className="Modal">
      <button onClick={() => props.onCloseModal()}>close modal</button>

      <AddStudentToSubjectList
        students={userStudents}
        onAddStudentToSubject={addStudentToSubjectHandler}
      />
    </div>
  );
};

export default ModalStudentsList;
