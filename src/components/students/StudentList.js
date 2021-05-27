import React from "react";

import Card from "../UI/Card";
import "./students.css";

const StudentsList = (props) => {

  const selectSortingHandler = (e) => {
    console.log(e);
  }

  return (

    <section>
      <Card>
        <h2>All students</h2>
        <select  className="sort-btn sort-select" onChange={(e) => { selectSortingHandler(e.target.value)}
          } >
        <option className='sort-option' value="fName">First Name</option>
        <option className='sort-option' value="lName">Last name</option>
        <option className='sort-option' value="year">Date of Birth</option>
      </select>
        <div>
          {/* <button className="sort-btn" onClick={props.onSort}>
            sort
          </button> */}
        </div>
        <ul>
          {props.students.map((st) => (
            <li key={st.id}>
              <div>
                <span>{st.fName} </span>
                <span>{st.lName} </span>
                <span>{st.year}</span>
              </div>
              <button
                className="delete-btn"
                onClick={() => props.onRemoveStudent(st.id)}
              >
                delete student
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default StudentsList;
