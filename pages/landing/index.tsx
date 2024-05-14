import Link from 'next/link';
import styles from '../../styles/home.module.scss';
const Landing = () => {
    return (
        <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Personal Webpage</h1>
      </header>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Home</h2>
          <p>Hello! I'm Agboola Emmanuel, a final year student of Information Technology and a frontend engineer. Welcome to my personal webpage where you can learn more about me, my projects, and how to get in touch.</p>
        </section>
      </div>
    </div>
    )
}

export default Landing