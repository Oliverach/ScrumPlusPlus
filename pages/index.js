import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to Scrum Plus Plus
      </h1>

      <div className={styles.grid}>

        <Link href="/quiz">
          <div className={styles.card}>
            <h2>Quiz &rarr;</h2>
            <p>Have you learned everything? Test your knowledge here!</p>
          </div>
        </Link>
        <Link href="/overview">
          <div className={styles.card}>
            <h2>Scrum explained &rarr;</h2>
            <p>Get started with Scrum.</p>
          </div>
        </Link>
      </div>
    </>
  )
}
