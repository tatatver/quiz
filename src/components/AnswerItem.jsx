import React from "react";

export const AnswerItem = ({AnswerId, AnswerText, AnswerValue, AnswerChange}) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant-1"
        id={AnswerId}
        value={AnswerValue}
        onChange={AnswerChange}
      />
      <label htmlFor="variant-1">{AnswerText}</label>
    </li>
  );
};
