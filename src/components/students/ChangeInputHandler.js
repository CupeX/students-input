import { useEffect, useState } from 'react';
import fetchStudents from './FetchStudents';

// change first and last name
const ChangeInputHandler = studentId => {
  const [isLoading, setIsLoading] = useState(true);
  const [userStudents, setUserStudents] = useState([]);

  const getStudents = async () => {
    const students = await fetchStudents();
    setIsLoading(false);
    setUserStudents(students);
  };

  // loading students from database
  useEffect(() => {
    setIsLoading(true);
    fetchStudents();
    getStudents();
  }, []);

  const newFName = prompt('enter new first name');
  const newLName = prompt('enter new last name');
  userStudents
    .filter(st => st.id === studentId)
    .map(st => {
      st.fName = newFName;
      st.lName = newLName;
    });

  // change UI list
  const changeUserInput = JSON.parse(JSON.stringify(userStudents));
  setUserStudents(changeUserInput);

  // update for database
  const changedStudent = userStudents.filter(st => st.id === studentId);

  fetch(
    `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/${studentId}.json`,
    {
      method: 'PUT',
      body: JSON.stringify(...changedStudent),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export default ChangeInputHandler;
