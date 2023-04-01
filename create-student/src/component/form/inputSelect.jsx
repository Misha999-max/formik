import React from "react";

const InputSelect = ({
  type,
  value,
  onChange,
  palceholder,
  id,
  label,
  name,
}) => {
  return (
    <>
      <label htmlFor={id}>{label} </label>
      <input
        name={name}
        id={id}
        placeholder={palceholder}
        className="input"
        type={type}
        value={value}
        onChange={(event) => onChange(event.target)}
      />
    </>
  );
};

export default InputSelect;
