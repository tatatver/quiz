import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLable } from "../components/AppLable";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {

const[userAnswer, setUserAnswer] = useState("");
const [isDisabled, setIsDisabled] = useState(true);

useEffect(()=>{
  if (userAnswer){
    setIsDisabled(false);
  }else{
    setIsDisabled(true);
  }
}, [userAnswer]);


  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
           <ProgressBar currentStep={0}/>
          <div className="question">
            <Header HeaderType="h2" HeaderText={"1. Занимательный вопрос"} />
            <AppLable
              labelId={"answer"}
              labelPlaceholder={"Ваш ответ"}
              errorText={" Введите номер в правильном формате например"}
              lableValue={userAnswer}
              lableChange={setUserAnswer}
            />
            <AppButton btnText={"Далее"} isDisabled={isDisabled} btnType={"button"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
