import React from "react";
import styles, { layout } from "../../style";
import { languages } from "../../constants";

const LanguageCard = (props) => {

    return(
        <div className={`${styles.flexCenter} flex-row p-6 rounded-[20px] feature-card w-11/12 mb-2`}>

            <div className={`w-[54px] h-[54px] rounded-full ${styles.flexCenter} bg-dimBlue`}> 
                <img src={props.icon} alt="flag" className="w-[50%] h-[50%] object-contain" />
            </div>
            <div className="flex-1 flex flex-col ml-6">
                <h4 className="font-poppins font-semibold text-white text-[16px] leading-[23.4px] mb-1">
                    {props.title}
                </h4>

                <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[24px]">
                    {props.content}
                </p>
            </div>
        </div>
    )
};

const Languages = () => {

    return(
        <section id="features" className={` ${layout.section} ${styles.flexCenter} relative bg-gray-gradient rounded-[20px] box-shadow`}>

            <div className="absolute z-[0] w-[60%] h-[60%] -left-[60%] rounded-full pink__gradient bottom-40" />
            <div className={`${layout.sectionInfo} max-w-xl`}>
                <h2 className={`${styles.heading2} mr-2 mb-3 pl-10`}>
                    Languages
                </h2>
            </div>

            <div className={`${styles.sectionImg} ${styles.flexCenter} flex-col sm:flex-row mr-2`}>
                {languages.map((feature, index) => (
                    <LanguageCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
            
        </section>
    )
};

export default Languages;