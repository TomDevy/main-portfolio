import Link from "next/link";
import styles from "../../styles/home.module.scss";
import { BtnSecondary } from "../../components/button";
import Review from "../reviews";
const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <BtnSecondary>Start a project</BtnSecondary>
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1>Why work with me?</h1>
          <div className={styles.workFlex}>
            <div className={styles.workCard}>
              <h3>Experience</h3>
              <p></p>
            </div>
            <div className={styles.workCard}>
              <h3>Professionalism</h3>
            </div>
            <div className={styles.workCard}>
              <h3>Friendliness</h3>
            </div>
            <div className={styles.workCard}>
              <h3>Reliabilily</h3>
            </div>
          </div>
        </div>
      </div>
      <Review />
      <div className={styles.footer}></div>
    </div>
  );
};

export default Landing;
