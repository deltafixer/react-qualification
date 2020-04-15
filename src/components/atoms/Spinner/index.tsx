import React from "react";

type SpinnerProps = {
  text: string;
};

const Spinner = ({ text }: SpinnerProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className="loader"></div>
      <div className="loading">{text}</div>
    </React.Fragment>
  );
};

Spinner.defaultProps = {
  text: "",
};

export default Spinner;
