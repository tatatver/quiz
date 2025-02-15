import React from 'react';

export const AppLable = ({labelText,labelType, labelPlaceholder,errorText,labelId,labelPattern})=>{
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
        />
        <span id="error-message">{errorText}</span>
      </label>
);
};