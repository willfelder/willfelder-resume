import React from "react";
import styles, { layout } from "../style";
import { languages } from "../constants";

const LanguageCard = (props) => {

    return(
        <div className={`flex flex-row p-6 rounded-[20px] feature-card`}>

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
        <section id="features" className={` ${layout.section} pr-20 mr-20`}>

            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Languages
                </h2>
            </div>

            <div className={`${styles.sectionImg}`}>
                {languages.map((feature, index) => (
                    <LanguageCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
            
        </section>
    )
};

export default Languages;