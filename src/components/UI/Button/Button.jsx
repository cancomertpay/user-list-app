import React from "react";
import classes from "./Button.module.css";

function Button({ children, type, onClick }) {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
