import React, { useState } from "react";
import UserForm from "./components/Users/UserForm";
import UserList from "./components/Users/UserList";

const App = () => {
  const [data, setData] = useState([]);

  const dataFromUserForm = (userName, userYear) => {
    setData((prevState) => {
      return [
        ...prevState,
        { name: userName, year: userYear, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <UserForm dataFromUserForm={dataFromUserForm} />
      <UserList data={data} />
    </div>
  );
};

export default App;
