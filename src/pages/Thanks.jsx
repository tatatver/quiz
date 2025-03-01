import React from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";

const Thanks = () => {
  const { name, phone, points, SelectCours, answer, selectEmoji } = JSON.parse(
    localStorage.getItem("user")
  );
  console.log(name, phone);

  const value = [
    {
      text: "Имя",
      userResponse: name,
    },
    {
      text: "Телефон",
      userResponse: phone,
    },
    {
      text: "Откуда о нас узнали?",
      userResponse: answer,
    },
    {
      text: "Какой Вы выбрали rehc",
      userResponse: SelectCours,
    },
    {
      text: "Какой Вы человек",
      userResponse: selectEmoji,
    },
    {
      text: "Какой шанс что Вы запишетесь?",
      userResponse: points,
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header HeaderText="Спасибо за прохождение опроса!" />
          <div className="infoWrapper">
            {value.map((elem) => (
              <div className="info">
                <span>{elem.text}</span>
                <span>{elem.userResponse}</span>
              </div>
            ))}
          </div>

          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <AppButton btnText="Получить ссылку" id="get-link" />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
