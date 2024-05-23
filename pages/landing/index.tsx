import Link from 'next/link';
import styles from '../../styles/home.module.scss';
import { BtnSecondary } from '../../components/button';
const Landing = () => {
    return (
        <div className={styles.container}>
          <div className={styles.nav}>
            <BtnSecondary>Start a project</BtnSecondary>
          </div>
    </div>
    )
}

export default Landing