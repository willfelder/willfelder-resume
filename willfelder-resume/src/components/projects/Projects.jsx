import React from "react";
import { project } from "../../assets"
import styles, { layout } from "../../style";
import Button from "../button/Button";

const CardDeal = () => {

    return(
        <section id="projects" className={layout.section}>

            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Check out my <span className="text-gradient">projects</span>.
                </h2>
                <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                    I create apps with JavaScript, React, HTML5, CSS3, and Velo (Wix). Feel free to check out my GitHub page to see my codes. Also, I work as a freelancer at Be Emotion Marketing Agency, developing websites, landing pages, and e-commerce.
                </p>

                <Button styles={`mt-10`} title={"View my projects"} />
            </div>

            <div className={layout.sectionImg}>
                <img src={project} alt="billing" className="w-[100%] h-[100%]" />
            </div>
        </section>
    )
};

export default CardDeal;