import { useState, useEffect } from 'react';
import Card from '../UI/Card';
import fetchProfessors from './FetchProfessors';
import ProfessorsList from './ProfessorsList';

const Profesors = () => {
  const [userProfessors, setUserProfessors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProfessors = async () => {
    const professors = await fetchProfessors();
    setIsLoading(false);
    setUserProfessors(professors);
  };

  // loading professors from database
  useEffect(() => {
    setIsLoading(false);
    fetchProfessors();
    getProfessors();
  }, []);

  // removing prof
  const removeProfessorHandler = profId => {
    fetch(
      `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/professors/${profId}.json`,
      {
        method: 'DELETE',
      }
    );
    const newList = userProfessors.filter(st => st.id !== profId);
    setUserProfessors(newList);
  };

  // sorting
  const sortHandler = e => {
    const sortProperty = e;
    userProfessors.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

    const sorted = JSON.parse(JSON.stringify(userProfessors));
    setUserProfessors(sorted);
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

      <ProfessorsList
        professors={userProfessors}
        onRemoveSubject={removeProfessorHandler}
      />
    </Card>
  );
};

export default Profesors;
