import React, { Component } from "react";

function Button(props) {
  return (
    <button
      className={props.className}
      onClick={() => props.handler()}
      disabled={props.disabled}
    >
      {props.buttonName}
    </button>
  );
}

export default Button;
