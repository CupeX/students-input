import React, { useState } from 'react';
import db from '../firebase';

const LoadSubjects = () => {
  const [payload, setPayload] = useState([]);

  let subjectRef = db.collection('subjects');
  subjectRef.get().then(subjects =>
    subjects.forEach(subject => {
      let data = subject.data();
      let { id } = subject;

      let payload = {
        id,
        ...data,
      };
      setPayload(payload);
    })
  );
  console.log('payload from load', payload);
};

export default LoadSubjects;
