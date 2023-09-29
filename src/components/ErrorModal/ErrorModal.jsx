import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

function ErrorModal({setErrorHandler}) {
  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Invalid Input</h2>
      </header>
      <div className={classes.content}>
        <p>Please enter a valid name and age (non-empty values).</p>
      </div>
      <footer className={classes.actions}>
        <Button type="submit" onClick={() => setErrorHandler(false)}>Okay</Button>
      </footer>
    </Card>
    </div>
  );
}

export default ErrorModal;
