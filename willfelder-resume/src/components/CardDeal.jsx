import React from "react";
import { card } from "../assets"
import styles, { layout } from "../style";
import Button from "../components/Button";

const CardDeal = () => {

    return(
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Check out my <br className="sm:block hidden" /> Projects.
                </h2>
                <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                    I have many projects developed with JavaScript, React, HTML5, CSS3, and Velo (Wix). Feel free to check out my GitHub page to see my codes. Also, I work as a freelancer at Be Emotion Marketing Agency, developing websites, landing pages, and e-commerce.
                </p>

                <Button styles={`mt-10`} />
            </div>

            <div className={layout.sectionImg}>
                <img src={card} alt="billing" className="w-[100%] h-[100%]" />
            </div>
        </section>
    )
};

export default CardDeal;