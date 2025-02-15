import React from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";


const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header HeaderText={"Добро пожаловать в квиз от лучшего учебного центра"}/>
          <form className="welcome__form">
            <AppLable labelText={"Ваше имя"} labelType={"text"} labelId={"username"} labelPlaceholder={"Ваш ответ"} errorText={"Введите имя корректно"}/>
            <AppLable labelText={"Ваш номер"} labelType={"tel"} labelId={"phone"} labelPlaceholder={"+998 9- --- -- -- "} labelPattern={"^(?:\+998)?(?:\d{2})?(?:\d{7})$"} errorText={"Введите номер в правильном формате"}/>
            <AppButton btnText={"Далее"} isDisabled={true} btnType={"submit"}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
