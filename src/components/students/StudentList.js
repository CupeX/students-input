import React from 'react';

import './students.css';

const StudentsList = props => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>birth</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.students.map(st => (
            <tr key={st.id} id={st.id}>
              <td>{st.fName} </td>
              <td>{st.lName} </td>
              <td>{st.year}</td>
              <td className="btn-td">
                <button
                  className="delete-btn"
                  onClick={() => props.onRemoveStudent(st.id)}
                >
                  delete student
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsList;
