import React, { useEffect, useState } from 'react';
import DataContext from './data-context';
import db from '../services/firebase';
import FetchStudents from '../services/FetchStudents';
import FetchSubjects from '../services/FetchSubjects';
import FetchProfessors from '../services/FetchProfessors';

const DataProvider = props => {
  const [userStudents, setUserStudents] = useState([]);
  const [userSubjects, setUserSubjects] = useState({});
  const [userProfessors, setUserProfessors] = useState([]);
  const [isLoadedStudents, setIsLoadedStudents] = useState(false);
  const [isLoadedSubjects, setIsLoadedSubjects] = useState(false);
  const [isLoadedProfessors, setIsLoadedProfessors] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    if (isLoadedStudents && isLoadedSubjects) {
      setIsLoaded(true);
    }
  }, [isLoadedStudents, isLoadedSubjects, isLoadedProfessors, isLoaded]);

  const fetchAll = () => {
    FetchStudents().then(x => {
      setUserStudents(x);
      setIsLoadedStudents(true);
    });
    FetchSubjects().then(x => {
      setUserSubjects(x);
      setIsLoadedSubjects(true);
    });
    FetchProfessors().then(x => {
      setUserProfessors(x);
      setIsLoadedProfessors(true);
    });
  };

  const removeHandler = (x, y) => {
    let postRef = db.collection(y);
    postRef
      .doc(x)
      .delete()
      .then(() => {
        fetchAll();
      });
  };

  const content = (x, y, fName, lName, year) => {
    return (
      <div>
        <select
          className="sort-btn"
          onChange={e => {
            sortHandler(e.target.value, x, y);
          }}
        >
          <option value="order">sort by:</option>
          <option value={fName}>First Name</option>
          <option value={lName}>Last name</option>
          {year && <option value={year}>Date of Birth</option>}
        </select>
      </div>
    );
  };

  const sortHandler = (e, x, y) => {
    const sortProperty = e;
    x.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));

    const sorted = JSON.parse(JSON.stringify(x));
    if (y === 'userStudents') {
      setUserStudents(sorted);
    } else if (y === 'userSubjects') {
      setUserSubjects(sorted);
    } else if (y === 'userProfessors') {
      setUserProfessors(sorted);
    }
  };

  return (
    <DataContext.Provider
      value={{
        userSubjects,
        userProfessors,
        userStudents,
        isLoaded,
        removeHandler,
        content,
        fetchAll,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
