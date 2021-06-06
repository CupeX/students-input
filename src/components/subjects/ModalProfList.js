import { useState, useEffect } from 'react';
import fetchProfessors from '../professors/FetchProfessors';
import AddProfToSubjectList from './AddProfToSubjectList';

import './Modal.css';

const ModalProfList = props => {
  const [professorsData, setProfessorsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const subjectId = props.subjectId;
  const subjectObj = props.subjects.find(x => x.id === subjectId);

  fetchProfessors();

  const getProfessors = async () => {
    const professors = await fetchProfessors();
    setIsLoading(false);
    setProfessorsData(professors);
  };
  // loading professors
  useEffect(() => {
    setIsLoading(true);
    getProfessors();
  }, []);

  const addProfessorToSubjectHandler = profId => {
    // filter picked student
    const prof = professorsData.find(x => x.id === profId);

    if (!prof.hasOwnProperty('subject')) {
      prof.subject = '';
    }
    const title = subjectObj.title.title;
    // const subjects = {
    //   ...prof.subjects,
    //   [subjectId]: title,
    // };
    // console.log('title', title);
    // console.log('subjects', subjects);

    if (prof.subject.hasOwnProperty(subjectId)) {
      console.log('allready have this subject');
    } else {
      console.log('not attending this subject, i will add!');
      fetch(
        `https://students-input-default-rtdb.europe-west1.firebasedatabase.app/professors/${profId}/subject.json`,
        {
          method: 'PUT',
          body: JSON.stringify(title),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then(() => {
        getProfessors();
      });
    }
  };

  return (
    <div className="Modal">
      <button onClick={() => props.onCloseModal()}>close modal</button>
      <AddProfToSubjectList
        loading={isLoading}
        professors={professorsData}
        onAddProfessorToSubject={addProfessorToSubjectHandler}
      />
    </div>
  );
};

export default ModalProfList;
