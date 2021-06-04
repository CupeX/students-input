import React, { useState } from 'react';

import Card from '../UI/Card';

const SubjectForm = React.memo(props => {
  const [enteredSubject, setEnteredSubject] = useState('');
  const [formValid, setFormValid] = useState(false);

  const submitHandler = e => {
    e.preventDefault();

    if (enteredSubject === '') {
      setFormValid(false);
      alert('pls enter subject name');
      return;
    }
    setFormValid(true);

    const subjectData = {
      subject: enteredSubject,
    };

    props.onAddSubject(subjectData);

    setEnteredSubject('');
  };

  const subjectChangeHandler = e => {
    setEnteredSubject(e.target.value);
  };

  return (
    <section>
      <Card>
        <h2>Students input form</h2>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="subject">subject name</label>
            <input
              type="text"
              id="subject"
              value={enteredSubject}
              onChange={subjectChangeHandler}
            />
          </div>
          <div>
            <button type="submit" className="add-btn">
              Add subject
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default SubjectForm;
