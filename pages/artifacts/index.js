import styles from '../../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import path from "../../util/filepath.JSON"
import Breadcrumb from '../../util/Breadcrumb'

export default function index() {
  const pages = [path[0],path[1], path[5]]
  return (
    <>
      <Breadcrumb pages={pages}/>
      <h1 className={styles.title}>
        There are 3 artifacts
      </h1>

      <div className={styles.grid}>

        <Link href="/artifacts/product-backlog">
          <div className={styles.card}>
            <h2>Product Backlog &rarr;</h2>
            <p>Introduction to Product Backlog</p>
          </div>
        </Link>
        <Link href="/artifacts/sprint-backlog">
          <div className={styles.card}>
            <h2>Sprint Backlog &rarr;</h2>
            <p>Introduction to Sprint Backlog</p>
          </div>
        </Link>
        <Link href="/artifacts/product-increment">
          <div className={styles.card}>
            <h2>Product Increment &rarr;</h2>
            <p>Introduction to Productn Increment</p>
          </div>
        </Link>
      </div>
    </>
  )
}
