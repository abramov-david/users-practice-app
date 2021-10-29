import React from "react";
import Card from "./Card";

const UserInputModal = (props) => {
  return (
    <Card>
      <h3 style={{ color: "red", marginLeft: "20px" }}>{props.text}</h3>
    </Card>
  );
};

export default UserInputModal;
