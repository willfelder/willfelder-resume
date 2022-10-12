import React from "react";

const SkillsCard = (props) => {

    return(
        <div className="flex justify-center flex-col px-10 py-6 rounded-[20px]  max-w-[270px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">

            <div className="flex items-center justify-center flex-col">
                <img src={props.img} className="w-12 h-auto" />
                <p className="font-poppins font-normal text-[18px] leading-[25px] text-white my-5">
                    {props.title}
                </p>
            </div>
        </div>
    )
};

export default SkillsCard;