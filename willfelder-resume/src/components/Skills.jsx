import React from "react";
import { skills } from "../constants/index";
import styles from "../style";
import SkillsCard from "./SkillsCard";

const Skills = () => {

    return(
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={styles.heading2}>
                    Technical skills
                </h2>
            </div>

            <div className="flex flex-wrap justify-start sm:justify-start w-full feedback-container relative z-[1]">
                {skills.map((card) => <SkillsCard key={card.id} {...card} />)}
            </div>
        </section>
    )
};

export default Skills;