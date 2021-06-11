import { useState } from 'react';

const BaseInput = props => {
  const [userInput, setUserInput] = useState('');

  const inputHandler = e => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="form-control">
      <label htmlFor="fName">test</label>
      <input
        // placeholder={}
        type={props.type}
        id={props.fName}
        // value={enteredFName}
        onChange={inputHandler}
      />
    </div>
  );
};

export default BaseInput;
