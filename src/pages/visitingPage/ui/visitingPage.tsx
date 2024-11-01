import styles from "./visitingPage.module.scss";
import { Header } from "../../../widgets/header";
import { MainStart } from "../../../widgets/mainStart";
import { About } from "../../../widgets/about";
import { Community } from "../../../widgets/community";
import { TonBlock } from "../../../widgets/tonBlock/ui/tonBlock";
import { Partners } from "../../../widgets/partners";
import { RoadMap } from "../../../widgets/roadMap";
import { Footer } from "../../../widgets/footer";
import { Learn } from "../../../widgets/learn";

export const VisitingPage = () => {
  return (
    <>
      <div className={styles.visitingPageWhiteContainer}>
        <Header />
        
        <MainStart />

         <About />

         <Community />
      </div>

      <span className={styles.dottedBlue}></span>

      <TonBlock />
       
      <div className={styles.visitingPageBlackContainer}>
        <span className={styles.dottedWhite}></span>
        <div className={styles.visitingPageBlack}>
          <Learn />
          <RoadMap />
        </div>

        <span className={styles.dottedWhite}></span>
       
        <div className={styles.visitingPageBlack}>
          <Partners />
          <Footer />
        </div> 
       </div> 
    </>
  );
};
