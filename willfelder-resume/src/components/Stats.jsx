import React from "react";
import styles from "../style";
import { socialMedia } from "../constants";
import { stats } from "../constants";

const Stats = () => {

    return(
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>

            {stats.map((stat) => (
                <div key={stat.id} className={`${styles.flexCenter} flex-1 flex-row m-3`}>
                    <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
                        {stat.value}
                    </h4>
                    
                    <p className="text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3">
                        {stat.title}
                    </p>
                </div>
            ))}

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                        index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                        }`}
                        onClick={() => window.open(social.link)}
                    />
                ))}
            </div>          
        </section>
    )
};

export default Stats;