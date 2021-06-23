import db from './firebase';

const FetchSubjects = () => {
  return new Promise((res, rej) => {
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
        res(subArray);
      });
  });
};

export default FetchSubjects;
