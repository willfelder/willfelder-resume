import React from "react";
import styles from "../../style";
import Button from "../button/Button";

const CTA = () => {
    return(
        <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <h2 className={`${styles.heading2} ${styles.flexCenter}`}>Contact me</h2>
            <p className={`${styles.paragraph} ${styles.flexCenter} max-w-[470px] mt-5 mb-10`}>
                Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        
            <div className={`${styles.flexCenter}  sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button title={"Contact me"} />
            </div>
        </section>
    )
};

export default CTA;