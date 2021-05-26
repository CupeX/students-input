import React, { useState } from "react";

import Card from "../UI/Card";

const StudentForm = React.memo((props) => {
  const [enteredFName, setEnteredFName] = useState("");
  const [enteredLName, setEnteredLName] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [enteredPass, setEnteredPass] = useState("");

  const [formValid, setFormValid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      enteredFName == "" ||
      enteredLName == "" ||
      enteredYear == "" ||
      enteredPass == ""
    ) {
      setFormValid(false);
      alert("pls fill all fields");
      return;
    }
    setFormValid(true);

    props.onAddStudent({
      fName: enteredFName,
      lName: enteredLName,
      year: enteredYear,
      password: enteredPass,
    });

    setEnteredFName("");
    setEnteredLName("");
    setEnteredYear("");
    setEnteredPass("");
  };

  return (
    <section>
      <Card>
        <h2>Students input form</h2>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="fName">First Name:</label>
            <input
              type="text"
              id="fName"
              value={enteredFName}
              onChange={(e) => {
                setEnteredFName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lName">Last Name:</label>
            <input
              type="text"
              id="lName"
              value={enteredLName}
              onChange={(e) => {
                setEnteredLName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="year">Date of birth:</label>
            <input
              type="number"
              id="year"
              value={enteredYear}
              onChange={(e) => {
                setEnteredYear(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="pass">Password:</label>
            <input
              type="number"
              id="pass"
              value={enteredPass}
              onChange={(e) => {
                setEnteredPass(e.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit" className=" add-btn">
              Add Ingredient
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default StudentForm;
