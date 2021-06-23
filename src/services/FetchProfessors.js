import { useState } from 'react';
import db from '../components/firebase';

const FetchProfessors = () => {
  const [professors, setProfessors] = useState([]);

  db.collection('professors')
    .get()
    .then(professors => {
      const profArray = [];
      professors.forEach(professor => {
        let data = professor.data();
        let { id } = professor;

        let payload = {
          id,
          ...data,
        };
        profArray.push(payload);
      });
      setProfessors(profArray);
    });

  return professors;
};

export default FetchProfessors;
