import React from "react";
import { AlertStyle } from "./AlertStyle";

const Alert = ({ showAlert, display }) => {
  return (
    showAlert && (
      <AlertStyle>
        <p>
          {showAlert.msg}
        </p>
      </AlertStyle>
    )
  );
};

export default Alert;
