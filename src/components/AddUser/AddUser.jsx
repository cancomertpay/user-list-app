import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import Card from "../UI/Card/Card";

function AddUser({ handleUserData }) {
  const initialStateValues = {
    username: "",
    age: "",
    id: "",
  };

  const [errorHandler, setErrorHandler] = useState(false);
  const [userInputs, setUserInputs] = useState(initialStateValues);

  const handleChange = (e) => {
    switch (e.target.id) {
      case "username":
        setUserInputs((prev) => {
          return { ...prev, username: e.target.value };
        });
        break;
      case "age":
        if (e.target.value < 0) {
          return;
        }
        setUserInputs((prev) => {
          return { ...prev, age: e.target.value };
        });
        break;

      default:
        initialStateValues;
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInputs.username === "" || userInputs.username === " ") {
      setErrorHandler(true);
      return;
    }
    const data = {
      username: userInputs.username,
      age: userInputs.age,
      id: Math.random()
    };
    handleUserData(data);
    setUserInputs(initialStateValues)
  };

  return (
    <>
      {errorHandler && (
        <ErrorModal setErrorHandler={setErrorHandler} />
      )}
      <Card className={classes.input} >
        <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={userInputs.username}
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="age">Age(Years)</label>
              <input
                type="number"
                id="age"
                value={userInputs.age}
                onChange={handleChange}
              />
            </p>
            <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
