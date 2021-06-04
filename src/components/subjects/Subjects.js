import React, { useEffect, useState } from 'react';
import fetchStudents from '../students/FetchStudents';
import Card from '../UI/Card';
import ModalStudentsList from './ModalStudentsList';

import SubjectsList from './SubjectsList';

const Subjects = () => {
  const [userSubjects, setUserSubjects] = useState([]);
  const [userStudents, setUserStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
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
    const changedSubject = (userSubjects.find(
      st => st.id === subjectId
    ).subject = newSubject);
    console.log(changedSubject);

    // update UI
    const changeUserInput = JSON.parse(JSON.stringify(userSubjects));
    setUserSubjects(changeUserInput);

    // update subject on database
    fetch(
      `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/subjects/${subjectId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(changedSubject),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    // console.log(userStudents);
    // const findingSubjectsInStudents = userStudents.filter(x => x.subjects);
    // console.log('subjectId', subjectId);
    // console.log('findingSubjectsInStudents', findingSubjectsInStudents);
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
    setModalOpen(true);
    setSubjectId(subjectId);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (isLoading) {
    return (
      <Card>
        <h2>Loading...</h2>
      </Card>
    );
  }

  return (
    <div>
      <section>
        <Card>
          {content}
          {modalOpen && (
            <ModalStudentsList
              onCloseModal={closeModal}
              subjects={userSubjects}
              subjectId={subjectId}
            />
          )}

          <SubjectsList
            subjects={userSubjects}
            onRemoveSubject={removeSubjectHandler}
            onChangeInput={changeInputHandler}
            onAddStudentToSubject={addStudentToSubjectHandler}
          />
        </Card>
      </section>
    </div>
  );
};

export default Subjects;
