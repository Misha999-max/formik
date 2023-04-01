import React from "react";
// import { useState } from "react";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { Formik } from "formik";

const CreateUser = () => {
  const history = useHistory();

  const validateScheme = yup.object().shape({
    name: yup
      .string()
      .typeError("Должно ыть строкой")
      .required("Поле обязательно для заполнения")
      .matches(/(?=.{3,})/, "имя  должен быть более 3 символов"),

    seName: yup
      .string()
      .required("обязательно для заполнения")
      .matches(/(?=.{3,})/, "фамилия должна быть более 3 символов"),

    date: yup
      .number()
      .typeError("Должно быть числом")
      .required("Обязательно для заполнения"),
    portfolio: yup
      .string()
      .required("Поле обязательно для заполнения")
      .matches(
        /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/,
        "некорректная ссылка"
      ),
  });

  const handleCreate = (values) => {
    values.userId = Date.now();
    console.log(values);
    localStorage.setItem("user", JSON.stringify(values));
    history.push("/main");
  };

  return (
    <Formik
      initialValues={{
        userId: "",
        name: "",
        seName: "",
        date: "",
        portfolio: "",
      }}
      validateOnBlur
      onSubmit={(values) => handleCreate(values)}
      validationSchema={validateScheme}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <div className="form-add">
          <label htmlFor="name">Введите имя </label>
          <input
            name={"name"}
            id="name"
            placeholder="введите имя"
            className={!isValid && !dirty ? "error input" : "input"}
            type={"text"}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <p className="error-massage">{errors.name}</p>
          )}

          <label htmlFor="seName">Введите фамилию </label>
          <input
            name={"seName"}
            id="seName"
            placeholder="введите фамилию"
            className={!isValid && !dirty ? "error input" : "input"}
            type={"text"}
            value={values.seName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.seName && errors.seName && (
            <p className="error-massage">{errors.seName}</p>
          )}

          <label htmlFor="date">Введите год рождения </label>
          <input
            name={"date"}
            id="date"
            placeholder="введите год рождения"
            className={!isValid && !dirty ? "error input" : "input"}
            type={"text"}
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.date && errors.date && (
            <p className="error-massage">{errors.date}</p>
          )}

          <label htmlFor="portfolio">Введите год рождения </label>
          <input
            name={"portfolio"}
            id="portfolio"
            placeholder="Ссылка на portfolio"
            className={!isValid && !dirty ? "error input" : "input"}
            type={"text"}
            value={values.portfolio}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.portfolio && errors.portfolio && (
            <p className="error-massage">{errors.portfolio}</p>
          )}

          <button
            className="btn-back"
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type="submit"
          >
            back
          </button>
        </div>
      )}
    </Formik>
  );
};

export default CreateUser;
