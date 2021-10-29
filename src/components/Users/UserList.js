import React from "react";
import Card from "../UI/Card";
import styles from "../UI/Card.module.css";
import stylesUserList from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={props.data.length === 0 ? styles.noDisplay : ""}>
      <ul style={{ listStyle: "none" }}>
        {props.data.map((data) => (
          <li key={data.id}>
            <p>
              {data.name.toUpperCase()} ({data.year} years)
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
