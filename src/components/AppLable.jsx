import React from "react";

export const AppLable = ({
  labelText,
  labelType,
  labelPlaceholder,
  errorText,
  labelId,
  labelPattern,
  lableValue,
  lableChange,
  isError,
}) => {
  return (
    <label className={`input-wrapper ${isError && "_error"}`} htmlFor={labelId}>
      {labelText}
      <input
        required
        type={labelType}
        name={labelId}
        id={labelId}
        placeholder={labelPlaceholder}
        pattern={labelPattern}
        value={lableValue}
        onChange={(e) => lableChange(e.target.value)}
      />
      {isError && <span id="error-message">{errorText}</span>}
    </label>
  );
};
