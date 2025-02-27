import React from "react";

export const AnswerItem = ({
  id,
  AnswerText,
  AnswerValue,
  AnswerChange,
  img,
}) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant-1"
        id={id}
        img={img}
        value={AnswerValue}
        onChange={AnswerChange}
      />
      <label htmlFor={id}>
      {img && <img src={img} alt={AnswerText} />} {/* Проверяем, есть ли изображение */}
         {AnswerText}</label>
    </li>
  );
};
