import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import { AnswerItem } from "../components/AnswerItem";

const StepFour = () => {
  const [points, setPoints] = useState("");
  const navigate = useNavigate();
  const variant = [
    {
      id: "variant-1",
      value: 1,
    },
    {
      id: "variant-2",
      value: 2,
    },
    {
      id: "variant-3",
      value: 3,
    },
    {
      id: "variant-4",
      value: 4,
    },
    {
      id: "variant-5",
      value: 5,
    },
  ];
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    localStorage.setItem("user", JSON.stringify({ ...userData, points }));
  }, [points]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Header
              HeaderText="Какова вероятность что Вы запишетесь на курс?"
              HeaderType="h2"
            />
            <ul className="level-variants">
              {variant.map((elem) => (
                <AnswerItem
                  AnswerText={elem.value}
                  AnswerValue={elem.value}
                  id={elem.id}
                  key={elem.id}
                  AnswerChange={(e) => setPoints(e.target.value)}
                />
              ))}
            </ul>
            <AppButton
              isDisabled={points ? false : true}
              btnClick={() => navigate("/thanks")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
