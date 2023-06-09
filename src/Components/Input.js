import React from "react";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  onFocus,
  condition,
  classname,
  inp,
  chk
}) => {
  return (
    <div className={classname}>
        <label>{label}</label>
        <input
          className={inp}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
      {condition}
    </div>
  );
};

export default Input;
