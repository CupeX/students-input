import db from './firebase';

const FetchProfessors = () => {
  return new Promise((res, rej) => {
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
        res(profArray);
      });
  });
};

export default FetchProfessors;
