import React from "react";
import styles from "../style";
import { boyComputer } from "../assets";

const Hero = () => {

    return(
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[62px] text-[22px] ss:leading-[80px] leading-[75px]">
                        Hi, I am <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">William Lengenfelder</span>{" "}
                    </h1>
                </div>

                <p className={`${styles.paragraph} max-w-auto mt-5`}>I am a front-end developer passionate about technology with more than two years of experience creating websites and landing pages. Studied System Analysis and Development at Paulista University in Brazil.</p>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={boyComputer} alt="billing" className="w-[80%] relative z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>
        </section>
    )
};

export default Hero;