import React from "react";
import { college } from "../assets";
import styles, { layout } from "../style";

const College = () => {

    return(
        <section id="product" className={layout.sectionReverse}>

            <div className={layout.sectionImgReverse}>
                <img src={college} alt="Boy studing on some stack of books" className="w-[90%] h-[90%] reative z-[5]" />
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            </div>

            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Education <br className="sm:block hidden" /> 
                    <span className="text-gradient">Paulista University</span>
                </h2>
                <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
                    I studied Analysis and Software Development. My relevant coursework was Web Design, UX-UI, Web Architecture, Object-Oriented Programming, and Software Engineering.
                </p>
                <ul className={styles.paragraph}>
                    <br /> 
                    <li>Free Code Camp - JavaScript Certificate - Algorithm and Data Structures.</li>
                    <li>Free Code Camp - Responsive Web Design and Front-end Libraries.</li>
                    <li>MIT University - Introduction to Computer Science and Programming in Python.</li>
                </ul>
            </div>
        </section>
    )
};

export default College;