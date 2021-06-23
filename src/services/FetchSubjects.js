import { useState } from 'react';
import db from '../components/firebase';

const FetchSubjects = () => {
  const [subjects, setSubjects] = useState([]);

  db.collection('subjects')
    .get()
    .then(subjects => {
      const subArray = [];
      subjects.forEach(subject => {
        let data = subject.data();
        let { id } = subject;

        let payload = {
          id,
          ...data,
        };
        subArray.push(payload);
      });
      setSubjects(subArray);
    });

  return subjects;
};

export default FetchSubjects;
