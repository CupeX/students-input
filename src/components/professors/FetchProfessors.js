const fetchProfessors = () => {
  return fetch(
    'https://students-input-default-rtdb.europe-west1.firebasedatabase.app/professors.json'
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      const professors = [];

      for (const key in data) {
        const prof = { id: key, title: data[key] };

        professors.push(prof);
      }
      return professors;
    });
};

export default fetchProfessors;
