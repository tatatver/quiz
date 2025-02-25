import React from "react";
import { Header } from "../components/Header";
import { AnswerItem } from "../components/AnswerItem";
import { ProgressBar } from "../components/ProgressBar";

const StepTwo = () => {
  const course = [
    {
      id: "variant-1",
      value: "React",
    },
    {
      id: "variant-2",
      value: "Python",
    },
    {
      id: "variant-3",
      value: "Data Analytics",
    },
    {
      id: "variant-4",
      value: "UX/IX",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={1}/>
          <div className="question">
            <Header HeaderText="Выберете курс" HeaderType="h2" />
            <ul className="variants">
              {course.map((elem) => (
                <AnswerItem
                  AnswerText={elem.value}
                  AnswerValue={elem.value}
                  id={elem.id}
                  key={elem.id}
                />
              ))}
            </ul>
            <button type="button" disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
