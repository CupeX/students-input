import React from "react";

import Card from "../UI/Card";
import "./students.css";

const StudentsList = (props) => {
  return (
    <section>
      <Card>
        <h2>All students</h2>
        <div>
          <button className="sort-btn" onClick={props.onSortByFName}>
            sort by first name
          </button>
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
