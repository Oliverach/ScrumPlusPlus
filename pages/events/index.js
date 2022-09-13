import styles from '../../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function index() {
    
    const pages = [path[0],path[1], path[4]]
    return (
      <>
        <Breadcrumb pages={pages}/>
            <h1 className={styles.title}>
                There are 5 events
            </h1>

            <div className={styles.grid}>

                <Link href="/events/sprint-review">
                    <div className={styles.card}>
                        <h2>Sprint Review &rarr;</h2>
                        <p>Introduction to Sprint Review</p>
                    </div>
                </Link>
                <Link href="/events/sprint-planning">
                    <div className={styles.card}>
                        <h2>Sprint Planning &rarr;</h2>
                        <p>Introduction to Sprint Planning</p>
                    </div>
                </Link>
                <Link href="/events/daily-scrum">
                    <div className={styles.card}>
                        <h2>Daily Scrum &rarr;</h2>
                        <p>Introduction to Daily Scrum</p>
                    </div>
                </Link>
                <Link href="/events/sprint">
                    <div className={styles.card}>
                        <h2>Sprint &rarr;</h2>
                        <p>Introduction to Sprint</p>
                    </div>
                </Link>
                <Link href="/events/sprint-retrospective">
                    <div className={styles.card}>
                        <h2>Sprint Retrospective &rarr;</h2>
                        <p>Introduction to Sprint Retrospective</p>
                    </div>
                </Link>
            </div>
        </>
    )
}
