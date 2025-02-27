import React, { useEffect, useState, useRef } from "react";
import { Header } from "../components/Header";
import { AnswerItem } from "../components/AnswerItem";
import { ProgressBar } from "../components/ProgressBar";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {
  const selectCourseRef = useRef("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const handleClick=(event)=>{
    selectCourseRef.current = event.target.value;
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    localStorage.setItem(
      "user",
      JSON.stringify({ ...userData, SelectCours: selectCourseRef.current })
    );
    setIsDisabled(!selectCourseRef.current);
  };


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
          <ProgressBar currentStep={1} />
          <div className="question">
            <Header HeaderText="Выберете курс" HeaderType="h2" />
            <ul className="variants">
              {course.map((elem) => (
                <AnswerItem
                  AnswerText={elem.value}
                  AnswerValue={elem.value}
                  AnswerChange={handleClick}
                  id={elem.id}
                  key={elem.id}
                />
              ))}
            </ul>
           <AppButton btnClick={()=> navigate("/step-three")} isDisabled={isDisabled}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
