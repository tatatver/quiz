import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

export const AppButton = ({btnText="Далее", id="next-btn", isDisabled, btnType, btnClick}) =>{
    return(
        <button disabled={isDisabled} type={btnType} id={id} onClick={btnClick}>
        {btnText}
      </button>
    );
}