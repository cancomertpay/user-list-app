import React, { useState } from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card/Card";

function UserList({ users }) {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((item, index) => (
          <li
            style={{ cursor: "pointer" }}
            key={index}
          >{`${
            item.username[0].toUpperCase() +
            item.username.slice(1).toLowerCase()
          } (${item.age} ${item.age > 1 ? "years old" : "year old"})`}</li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
