import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import InputSelect from "./inputSelect";

const UpgreateUserPage = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    seName: "",
    date: "",
    portfolio: "",
  });
  //   const [data, setdate] = useState({
  //     name: "",
  //     seName: "",
  //     date: "",
  //     portfolio: "",
  //   });
  const { userId } = useParams();
  console.log(userId);
  useEffect(() => {
    const item = localStorage.getItem("user");
    setUser(JSON.parse(item));
  }, []);
  const handleChange = (target) => {
    setUser((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleChangeUser = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/main");
  };
  return (
    <>
      {user && (
        <form className="form-add">
          <InputSelect
            type="text"
            value={user.name}
            onChange={handleChange}
            id="Изменить имя"
            label="Изменить имя"
            name="name"
          />
          <InputSelect
            type="text"
            value={user.seName}
            onChange={handleChange}
            id="Изменить фамилию"
            label="Изменить фамилию"
            name="seName"
          />
          <InputSelect
            type="text"
            value={user.date}
            onChange={handleChange}
            id="Изменить дату"
            label="Изменить дату"
            name="date"
          />
          <InputSelect
            type="text"
            value={user.portfolio}
            onChange={handleChange}
            id="Изменить ссылку"
            label="Изменить ссылку"
            name="portfolio"
          />
          <button onClick={handleChangeUser}>Изменить</button>
        </form>
      )}
    </>
  );
};

export default UpgreateUserPage;
