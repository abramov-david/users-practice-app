import React, { useState, useRef } from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import UserInputModal from "../UI/UserInputModal";

const UserForm = (props) => {
  const userName_ref = useRef();
  const userYear_ref = useRef();

  const [invalid, setInvalid] = useState(false);
  const [modalText, setModalText] = useState("");

  const saveInputData = (event) => {
    event.preventDefault();
    const userNameInput = userName_ref.current.value;
    const userYearInput = userYear_ref.current.value;
    if (userNameInput.trim().length === 0) {
      setInvalid(true);
      setModalText("Enter username!");
      return;
    }
    if (userYearInput.trim().length === 0) {
      setInvalid(true);
      setModalText("Enter user year!");
      return;
    }
    if (+userYearInput < 0.1) {
      setInvalid(true);
      setModalText("User year mast be greater than 0.1!");
      return;
    }
    props.dataFromUserForm(userNameInput, userYearInput);
    userYear_ref.current.value = "";
    userName_ref.current.value = "";
  };

  const userInputHandler = () => {
    setInvalid(false);
  };
  const yearInputHandler = () => {
    setInvalid(false);
  };
  return (
    <div>
      {invalid ? <UserInputModal text={modalText} /> : ""}
      <Card>
        <form onSubmit={saveInputData} className={styles["user-form"]}>
          <label>User</label>
          <input type="text" ref={userName_ref} onChange={userInputHandler} />
          <label>Age(Years)</label>
          <input type="number" ref={userYear_ref} onChange={yearInputHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
