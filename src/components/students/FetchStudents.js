const fetchStudents = () => {
  return fetch(
    'https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student.json'
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      const students = [];

      for (const key in data) {
        const student = { id: key, ...data[key] };

        students.push(student);
      }
      return students;
    });
};

export default fetchStudents;
