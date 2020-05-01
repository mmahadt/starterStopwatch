import React, { Component } from "react";

function Button(props) {
  const { className, disabled, buttonName } = props;
  return (
    <button
      className={className}
      onClick={() => props.handler()}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
}

export default Button;
