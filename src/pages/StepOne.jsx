import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  // const [errorAnswer, setErrorAnswer] = useState(true);
  
    const navigate = useNavigate();

    const handleClick = () => {
      const storedAnswers = JSON.parse(localStorage.getItem("answer")) || {}; 
      localStorage.setItem(
        "answer",
        JSON.stringify({ ...storedAnswers, answer: userAnswer }) // Используем userAnswer из state
      );
      navigate("/step-two");
    };
      

  useEffect(() => {
    if (userAnswer) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userAnswer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={0} />
          <div className="question">
            <Header HeaderType="h2" HeaderText={"1.Откуда Вы о нас узнали"} />
            <AppLable
              labelId={"answer"}
              labelPlaceholder={"Ваш ответ"}
              errorText={" Введите номер в правильном формате например"}
              lableValue={userAnswer}
              lableChange={setUserAnswer}
            />
            <AppButton
              btnText={"Далее"}
              isDisabled={isDisabled}
              btnType={"button"}
              btnClick={() => handleClick()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
