import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const RegexUser = /^[a-zA-Zа-яА-ЯёЁ]+$/;
  const RegexPhone =
    /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const navigate = useNavigate();

  const hadleClick = () => {
    if (!RegexUser.test(userName)) {
      setErrorName(true);
    }
    if (!RegexPhone.test(userPhone)) {
      setErrorPhone(true);
    }
    if (RegexUser.test(userName) && RegexPhone.test(userPhone)) {
      setErrorName(false);
      setErrorPhone(false);

      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...userData, phone: userPhone, name: userName })
        );
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify({ phone: userPhone, name: userName })
        );
      }

      navigate("/step-one");
    }
  };

  useEffect(() => {
    if (userName && userPhone) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userName, userPhone]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
            HeaderType="h1"
            HeaderText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppLable
              labelText={"Ваше имя"}
              labelType={"text"}
              labelId={"username"}
              labelPlaceholder={"Ваш ответ"}
              errorText={"Введите имя корректно"}
              lableValue={userName}
              lableChange={setUserName}
              isError={errorName}
            />
            <AppLable
              labelText={"Ваш номер"}
              labelType={"tel"}
              labelId={"phone"}
              labelPlaceholder={"+998 9- --- -- -- "}
              labelPattern={"^(?:+998)?(?:d{2})?(?:d{7})$"}
              errorText={"Введите номер в правильном формате"}
              lableValue={userPhone}
              lableChange={setUserPhone}
              isError={errorPhone}
            />
            <AppButton
              btnText={"Далее"}
              isDisabled={isDisabled}
              btnType={"submit"}
              btnClick={() => hadleClick()}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
