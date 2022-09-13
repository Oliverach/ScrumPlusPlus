import styles from '../../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'

export default function index() {
    return (
        <>
            <h1 className={styles.title}>
                There are 5 events
            </h1>

            <div className={styles.grid}>

                <Link href="/sprint-review">
                    <div className={styles.card}>
                        <h2>Sprint Review &rarr;</h2>
                        <p>Introduction to Sprint Review</p>
                    </div>
                </Link>
                <Link href="/sprint-planning">
                    <div className={styles.card}>
                        <h2>Sprint Planning &rarr;</h2>
                        <p>Introduction to Sprint Planning</p>
                    </div>
                </Link>
                <Link href="/daily-scrum">
                    <div className={styles.card}>
                        <h2>Daily Scrum &rarr;</h2>
                        <p>Introduction to Daily Scrum</p>
                    </div>
                </Link>
                <Link href="/sprint">
                    <div className={styles.card}>
                        <h2>Sprint &rarr;</h2>
                        <p>Introduction to Sprint</p>
                    </div>
                </Link>
                <Link href="/sprint-retrospective">
                    <div className={styles.card}>
                        <h2>Sprint Retrospective &rarr;</h2>
                        <p>Introduction to Sprint Retrospective</p>
                    </div>
                </Link>
            </div>
        </>
    )
}
