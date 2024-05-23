import Link from "next/link";
import styles from "../../styles/home.module.scss";
import { BtnSecondary } from "../../components/button";
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
            </div>
            <div className={styles.workCard}>
              <h3>Experience</h3>
            </div>
            <div className={styles.workCard}>
              <h3>Experience</h3>
            </div>
            <div className={styles.workCard}>
              <h3>Experience</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
