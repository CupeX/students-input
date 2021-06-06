import React, { useEffect, useState } from 'react';
import fetchProfessors from '../professors/FetchProfessors';
import fetchStudents from '../students/FetchStudents';
import Card from '../UI/Card';
import ModalProfList from './ModalProfList';
import ModalStudentsList from './ModalStudentsList';

import SubjectsList from './SubjectsList';

const Subjects = () => {
  const [userSubjects, setUserSubjects] = useState([]);
  const [userStudents, setUserStudents] = useState([]);
  const [userProfessors, setUserProfessors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [studentsModal, setStudentsModal] = useState(false);
  const [profModal, setProfModal] = useState(false);
  const [subjectId, setSubjectId] = useState('');

  // getting students for change of subject title
  const getStudents = async () => {
    const students = await fetchStudents();
    setUserStudents(students);
  };
  // loading students from database
  useEffect(() => {
    fetchStudents();
    getStudents();
  }, []);

  const getProfessors = async () => {
    const professors = await fetchProfessors();
    setUserProfessors(professors);
  };
  // loading professors
  useEffect(() => {
    fetchProfessors();
    getProfessors();
  }, []);

  // loading subjects from database
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://students-input-default-rtdb.europe-west1.firebasedatabase.app/subjects.json'
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const subjects = [];

        for (const key in data) {
          const subject = { id: key, title: data[key] };

          subjects.push(subject);
        }
        setIsLoading(false);
        setUserSubjects(subjects);
      });
  }, []);

  // removing subject
  const removeSubjectHandler = subjectId => {
    fetch(
      `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/${subjectId}.json`,
      {
        method: 'DELETE',
      }
    );
    const newList = userSubjects.filter(st => st.id !== subjectId);
    setUserSubjects(newList);
  };

  // change first and last name
  const changeInputHandler = subjectId => {
    const newSubject = prompt('enter new subjects title');
    userSubjects.find(st => st.id === subjectId).title.title = newSubject;

    // update UI
    const subject = userSubjects.find(x => x.id === subjectId);
    const updateSubjectsName = subject.title;
    const changeUISubjName = JSON.parse(JSON.stringify(userSubjects));
    setUserSubjects(changeUISubjName);

    // update subject on database
    fetch(
      `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/subjects/${subjectId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(updateSubjectsName),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const updatedSubjectInAllStudents = userStudents.map(x => {
      if (x.subjects && Object.keys(x.subjects).includes(subjectId)) {
        x.subjects[subjectId].title = newSubject;
      }
      return x;
    });
    setUserStudents(updatedSubjectInAllStudents);

    console.log('updatedSubjectInAllStudents', updatedSubjectInAllStudents);
    const test = updatedSubjectInAllStudents.forEach(x => console.log(x));
    console.log('test', test);
    // fetch(
    //   `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/.json`,
    //   {
    //     method: 'PUT',
    //     body: JSON.stringify(updatedSubjectInAllStudents),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
  };

  // sorting
  const sortHandler = e => {
    const sortProperty = e;
    userSubjects.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

    const sorted = JSON.parse(JSON.stringify(userSubjects));
    setUserSubjects(sorted);
  };

  const content = (
    <div>
      <h2> All Subjects</h2>

      <select
        className="sort-btn"
        onChange={e => {
          sortHandler(e.target.value);
        }}
      >
        <option value="order">sort by:</option>
        <option value="fName">First Name</option>
        <option value="lName">Last name</option>
        <option value="year">Date of Birth</option>
      </select>
    </div>
  );

  const addStudentToSubjectHandler = subjectId => {
    setStudentsModal(true);
    setSubjectId(subjectId);
  };

  const addProfToSubjectHandler = subjectId => {
    setProfModal(true);
    setSubjectId(subjectId);
  };

  const closeStudentsModal = () => {
    setStudentsModal(false);
  };

  const closeProfModal = () => {
    setProfModal(false);
  };

  if (isLoading) {
    return (
      <Card>
        <h2>Loading...</h2>
      </Card>
    );
  }

  return (
    <Card>
      {content}
      {studentsModal && (
        <ModalStudentsList
          onCloseModal={closeStudentsModal}
          subjects={userSubjects}
          subjectId={subjectId}
        />
      )}

      {profModal && (
        <ModalProfList
          onCloseModal={closeProfModal}
          subjects={userSubjects}
          subjectId={subjectId}
        />
      )}

      <SubjectsList
        subjects={userSubjects}
        onRemoveSubject={removeSubjectHandler}
        onChangeInput={changeInputHandler}
        onAddStudentToSubject={addStudentToSubjectHandler}
        onAddProfToSubject={addProfToSubjectHandler}
      />
    </Card>
  );
};

export default Subjects;
