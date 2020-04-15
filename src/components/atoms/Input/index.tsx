import React from "react";

type InputProps = {
  type: string;
  autoFocus: boolean;
  placeholder: string;
  onChange: Function;
};

const Input = ({
  type,
  autoFocus,
  placeholder,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <input
      type={type}
      autoFocus={autoFocus}
      placeholder={placeholder}
      onChange={(event) => onChange && onChange(event.target.value)}
    />
  );
};

Input.defaultProps = {
  type: "text",
  autoFocus: false,
  placeholder: "aaa",
  onChange: null,
};

export default Input;
