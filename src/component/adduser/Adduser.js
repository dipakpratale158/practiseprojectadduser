import React, { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Errormodulr from "../ui/Errormodulr";
import classes from "./Adduser.module.css";

const Adduser = (props) => {
  const [username, setusername] = useState("");
  const [userage, setuserage] = useState("");
  const [error, seterror] = useState();
  const handlesubmit = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userage.trim().length === 0) {
      seterror({
        title: "invalid input",
        message: "please enter the valid name and age"
      });
      return;
    }
    if (+userage < 1) {
      seterror({
        title: "invalid age",
        message: "please enter the valid  age(>0)"
      });
      return;
    }
    setusername("");
    setuserage("");

    props.handlesubnmit(username, userage);
  };
  const handlechangeusername = (event) => {
    setusername(event.target.value);
  };

  const handlechangeage = (event) => {
    setuserage(event.target.value);
  };
  const errorhandler = () => {
    seterror(null);
  };

  return (
    <div>
      {error && (
        <Errormodulr
          title={error.title}
          message={error.message}
          onconfirm={errorhandler}
        />
      )}
      <Card cssclasses={classes.input}>
        <form onSubmit={handlesubmit} action="">
          <label htmlFor="">username</label>
          <input
            type="text"
            name="username"
            onChange={handlechangeusername}
            value={username}
          />

          <label htmlFor="">Age</label>
          <input
            type="number"
            name="age"
            onChange={handlechangeage}
            value={userage}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
export default Adduser;
