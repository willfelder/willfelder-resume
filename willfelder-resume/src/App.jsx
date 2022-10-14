import React from "react";
import styles from "./style";
import { College, Languages, Projects, Contact, Footer, Home, Navbar, Stats, Skills} from "./components";

const App = () => {

  return (
    <div className="bg-primary w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>

        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>

        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Skills />
          <Languages />
          <College />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
};

export default App
