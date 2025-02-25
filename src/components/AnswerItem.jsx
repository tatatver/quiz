import React from "react";

export const AnswerItem = ({id, AnswerText, AnswerValue, AnswerChange}) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant-1"
        id={id}
        value={AnswerValue}
        onChange={AnswerChange}
      />
      <label htmlFor={id}>{AnswerText}</label>
    </li>
  );
};
