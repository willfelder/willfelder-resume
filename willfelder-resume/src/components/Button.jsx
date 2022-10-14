import React from "react";

const Button = (props) => {

    return(
        <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[50px] outline-none ${props.styles}`}>
            Contact me
        </button>
    )
};

export default Button;