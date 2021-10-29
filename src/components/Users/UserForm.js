import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import UserInputModal from "../UI/UserInputModal";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userYear, setUserYear] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [modalText, setModalText] = useState("");

  const nameInputHandler = (event) => {
    setUserName(event.target.value);
    setInvalid(false);
  };
  const yearInputHandler = (event) => {
    setUserYear(event.target.value);
    setInvalid(false);
  };

  const saveInputData = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0) {
      setInvalid(true);
      setModalText("Enter username!");
      return;
    }
    if (userYear.trim().length === 0) {
      setInvalid(true);
      setModalText("Enter user year!");
      return;
    }
    if (+userYear < 0.1) {
      setInvalid(true);
      setModalText("User year mast be greater than 0.1!");
      return;
    }
    props.dataFromUserForm(userName, userYear);
    setUserName("");
    setUserYear("");
  };

  return (
    <div>
      {invalid ? <UserInputModal text={modalText} /> : ""}
      <Card>
        <form onSubmit={saveInputData} className={styles["user-form"]}>
          <label>User</label>
          <input type="text" value={userName} onChange={nameInputHandler} />
          <label>Age(Years)</label>
          <input type="number" value={userYear} onChange={yearInputHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
