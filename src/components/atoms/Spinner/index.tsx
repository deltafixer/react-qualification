import React from "react";
import { SpinnerStyleWrapper } from "./index.styles";

type SpinnerProps = {
  text: string;
};

const Spinner = ({ text }: SpinnerProps): JSX.Element => {
  return (
    <SpinnerStyleWrapper>
      <div className="loader"></div>
      <div className="loading">{text}</div>
    </SpinnerStyleWrapper>
  );
};

Spinner.defaultProps = {
  text: "",
};

export default Spinner;
