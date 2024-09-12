import styles from "./visitingPage.module.scss";
import { Header } from "../../../widgets/header";
import { MainStart } from "../../../widgets/mainStart";
import { About } from "../../../widgets/about";
import { Community } from "../../../widgets/community";
import { TonBlock } from "../../../widgets/tonBlock/ui/tonBlock";
export const VisitingPage = () => {
  return (
    <div>
      <div className={styles.visitingPage}>
        <Header />
        <MainStart />
        <About />
        <Community />
      </div>
      <span className={styles.dotted}></span>
      <TonBlock />
    </div>
  );
};
