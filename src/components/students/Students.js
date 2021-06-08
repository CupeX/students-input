import React, { useState } from 'react';
import Card from '../UI/Card';
import StudentsList from './StudentsList';

const Students = () => {
  const [userStudents, setUserStudents] = useState([]);

  // sorting
  const sortHandler = e => {
    const sortProperty = e;
    userStudents.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

    const sorted = JSON.parse(JSON.stringify(userStudents));
    setUserStudents(sorted);
  };

  const content = (
    <div>
      <h2> All Students</h2>

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

  return (
    <Card>
      {content}
      <StudentsList />
    </Card>
  );
};

export default Students;
