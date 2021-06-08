import React, { useState } from 'react';
import Card from '../UI/Card';

import SubjectsList from './SubjectsList';

const Subjects = () => {
  const [userSubjects, setUserSubjects] = useState([]);

  // acing kod
  // const updatedSubjectInAllStudents = userStudents.map(x => {
  //   if (x.subjects && Object.keys(x.subjects).includes(subjectId)) {
  //     x.subjects[subjectId].title = newSubject;
  //   }
  //   return x;
  // });
  // setUserStudents(updatedSubjectInAllStudents);

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
      </select>
    </div>
  );

  return (
    <Card>
      {content}

      <SubjectsList />
    </Card>
  );
};

export default Subjects;
