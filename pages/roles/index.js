import styles from '../../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <>
      <h1 className={styles.title}>
        There are 3 Roles
      </h1>

      <div className={styles.grid}>

        <Link href="/roles/product-owner">
          <div className={styles.card}>
            <h2>Product Owner &rarr;</h2>
            <p>Introduction to Product Owner</p>
          </div>
        </Link>
        <Link href="/roles/scrum-master">
          <div className={styles.card}>
            <h2>Scrum Master &rarr;</h2>
            <p>Introduction to Scrum Master</p>
          </div>
        </Link>
        <Link href="/roles/dev-team">
          <div className={styles.card}>
            <h2>Dev Team &rarr;</h2>
            <p>Introduction to Dev Team</p>
          </div>
        </Link>
      </div>
    </>
  )
}
