import db from '../firebase';

const LoadStudents = () => {
  let subjectRef = db.collection('subjects');
  subjectRef.get().then(subjects =>
    subjects.forEach(subject => {
      let data = subject.data();
      let { id } = subject;

      let payload = {
        id,
        ...data,
      };
      return { payload, id };
    })
  );
};

export default LoadStudents;
