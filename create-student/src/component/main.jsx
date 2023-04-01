import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage) {
      const user = localStorage.getItem("user");
      setUser(JSON.parse(user));
    }
  }, []);
  console.log(user);
  return (
    <>
      <h1>Карточка клиента</h1>
      <div className="cart_user">
        {user ? (
          <>
            <p> Имя: {user.name}</p>
            <p>Фамилия: {user.seName}</p>
            <p>год рождения: {user.date}</p>
            <a href={user.portfolio}>{user.portfolio}</a>
            <p>
              <Link to={`/upGreateUser/${user.userId}`}> Редактировать </Link>
            </p>
          </>
        ) : (
          <p>Нет Ни Кто</p>
        )}
      </div>
      <Link to="/createUser/2432">Добавить студента</Link>
    </>
  );
};

export default Main;
