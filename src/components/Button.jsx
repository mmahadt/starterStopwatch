import React, { Component } from "react";

function Button(props) {
  const { className, disabled, buttonName, handler } = props;
  return (
    <button className={className} onClick={() => handler()} disabled={disabled}>
      {buttonName}
    </button>
  );
}

export default Button;
