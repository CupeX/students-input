import { useState } from 'react';
import Card from '../UI/Card';
import ProfessorsList from './ProfessorsList';

const Profesors = () => {
  const [userProfessors, setUserProfessors] = useState([]);

  // sorting
  const sortHandler = e => {
    const sortProperty = e;
    userProfessors.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

    const sorted = JSON.parse(JSON.stringify(userProfessors));
    setUserProfessors(sorted);
  };

  const content = (
    <div>
      <h2> All Professors</h2>

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
      <ProfessorsList />
    </Card>
  );
};

export default Profesors;
