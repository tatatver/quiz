import React from "react";
import {Header} from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Header HeaderText={"1. Занимательный вопрос"}/>
            <AppLable labelId={"answer"} labelPlaceholder={"Ваш ответ"} errorText={" Введите номер в правильном формате например"}/>
            <AppButton btnText={"Далее"} isDisabled={true} btnType={"button"}/>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
