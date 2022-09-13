import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Breadcrumb from '../util/Breadcrumb'
import path from "../util/filepath.JSON"

export default function Overview() {

  const pages = [path[0],path[1]]

  return (
    <>
      <Breadcrumb pages={pages}/>

      <h1 className={styles.title}>
        Scrum easy explained
      </h1>

      <div className={styles.grid}>

        <Link href="/roles">
          <div className={styles.card}>
            <h2>Roles &rarr;</h2>
            <p>Learn everything you need to know about the 3 Roles.</p>
          </div>
        </Link>
        <Link href="/events">
          <div className={styles.card}>
            <h2>Events &rarr;</h2>
            <p>Learn everything you need to know about the 5 Events.</p>
          </div>
        </Link>
        <Link href="/artifacts">
          <div className={styles.card}>
            <h2>Artifacts &rarr;</h2>
            <p>Learn everything you need to know about the 3 Artifacts.</p>
          </div>
        </Link>
      </div>
    </>
  )
}
