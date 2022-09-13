import styles from '../../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <>
    <h1 className={styles.title}>
     There are 3 artifacts
    </h1>

    <div className={styles.grid}>

      <Link href="/product-backlog">
        <div className={styles.card}>
          <h2>Product Backlog &rarr;</h2>
          <p>Introduction to Product Backlog</p>
        </div>
      </Link>
      <Link href="/sprint-backlog">
        <div className={styles.card}>
          <h2>Sprint Backlog &rarr;</h2>
          <p>Introduction to Sprint Backlog</p>
        </div>
      </Link>
      <Link href="/product-increment">
        <div className={styles.card}>
          <h2>Product Increment &rarr;</h2>
          <p>Introduction to Productn Increment</p>
        </div>
      </Link>
    </div>
  </>
  )
}
