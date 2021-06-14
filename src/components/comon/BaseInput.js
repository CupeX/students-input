import React from 'react';

const BaseInput = props => {
  return (
    <div className="form-control">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        placeholder={props.placeholder}
        type={props.type}
        id={props.fName}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default BaseInput;
