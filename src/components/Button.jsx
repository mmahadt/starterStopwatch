import React, { Component } from "react";

function Button(props) {
  const { className, handler, disabled, buttonName } = props;
  return (
    <button className={className} onClick={() => handler()} disabled={disabled}>
      {buttonName}
    </button>
  );
}

export default Button;
