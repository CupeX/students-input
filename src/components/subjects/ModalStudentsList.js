import { useState, useEffect } from 'react';
import fetchStudents from '../students/FetchStudents';

import AddStudentToSubjectList from './AddStudentToSubjectList';
import './Modal.css';

const ModalStudentsList = props => {
  const [studentsData, setStudentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const subjectId = props.subjectId;
  const subjectObj = props.subjects.find(x => x.id === subjectId);

  fetchStudents();

  const getStudents = async () => {
    const students = await fetchStudents();
    setIsLoading(false);
    setStudentsData(students);
  };
  // loading students
  useEffect(() => {
    setIsLoading(true);
    getStudents();
  }, []);

  const addStudentToSubjectHandler = studentId => {
    // filter picked student
    const student = studentsData.find(x => x.id === studentId);

    if (!student.hasOwnProperty('subjects')) {
      student.subjects = {};
    }
    const title = subjectObj.title;
    console.log(student);
    const subjects = {
      ...student.subjects,
      [subjectId]: title,
    };
    console.log('subjects', subjects);

    if (student.subjects.hasOwnProperty(subjectId)) {
      console.log('allready have this subject');
    } else {
      console.log('not attending this subject, i will add!');
      fetch(
        `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/${studentId}/subjects.json`,
        {
          method: 'PUT',
          body: JSON.stringify(subjects),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then(() => {
        getStudents();
      });
    }
  };

  return (
    <div className="Modal">
      <button onClick={() => props.onCloseModal()}>close modal</button>
      <AddStudentToSubjectList
        loading={isLoading}
        students={studentsData}
        onAddStudentToSubject={addStudentToSubjectHandler}
      />
    </div>
  );
};

export default ModalStudentsList;
