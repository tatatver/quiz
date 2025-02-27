import React, { useRef, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerItem } from "../components/AnswerItem";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";


const StepThree = () => {

const selectEmojiRef = useRef("");
const[isDisabled, setIsDisabled] = useState(true);
const navigate = useNavigate();
const handleClick=(event)=>{
  selectEmojiRef.current = event.target.value;
  const userDate = JSON.parse(localStorage.getItem("user")) || {};
  localStorage.setItem(
    "user",
    JSON.stringify({...userDate, selectEmoji: selectEmojiRef.current})
  );
  setIsDisabled(!selectEmojiRef.current)
}
  

  const emoji = [
    {
      id: "variant-1",
      value: "С юморком",
      img: "/img/laugh.png",
    },
    {
      id: "variant-2",
      value: "Красатуля",
      img: "/img/hearts.png",
    },
    {
      id: "variant-3",
      value: "Деловой",
      img: "/img/smirk.png",
    },
    {
      id: "variant-4",
      value: "Всегда в шоке",
      img: "/img/fright.png",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Header
              HeaderType="h2"
              HeaderText="Какой эможи лучше всего Вас описывает?"
            />
            <ul className="emoji-variants">
              {emoji.map((elem) => (
                <AnswerItem
                  AnswerText={elem.value}
                  AnswerValue={elem.value}
                   AnswerChange={handleClick}
                  img={elem.img}
                  id={elem.id}
                  key={elem.id}
                />
              ))}
            </ul>
            <AppButton btnClick={()=>navigate("/step-four")} isDisabled={isDisabled}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
