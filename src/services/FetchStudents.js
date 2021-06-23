import { useState } from 'react';
import db from '../components/firebase';

const FetchStudents = () => {
  const [students, setStudents] = useState([]);

  db.collection('students')
    .get()
    .then(students => {
      const studArray = [];
      students.forEach(student => {
        let data = student.data();
        let { id } = student;

        let payload = {
          id,
          ...data,
        };
        studArray.push(payload);
      });
      setStudents(studArray);
    });

  return students;
};

export default FetchStudents;
