import React from 'react';

export const AppLable = ({labelText,labelType, labelPlaceholder,errorText,labelId,labelPattern,lableValue,lableChange})=>{
    return(
        <label className="input-wrapper" htmlFor={labelId}>
        {labelText}
        <input
          required
          type={labelType}
          name={labelId}
          id={labelId}
          placeholder= {labelPlaceholder}
          pattern={labelPattern}
          value={lableValue}
          onChange={(e)=> lableChange(e.target.value)}
        />
        <span id="error-message">{errorText}</span>
      </label>
);
};