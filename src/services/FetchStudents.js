import db from './firebase';

const FetchStudents = () => {
  return new Promise((res, rej) => {
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
        res(studArray);
      });
  });
};

export default FetchStudents;
