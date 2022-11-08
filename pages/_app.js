import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
   
     <div className={styles.container}>
      <Head>
        <title>Scrum Plus Plus</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Component {...pageProps} />
      </main>
      <footer className={styles.footer}>
        <p style={{display:"inherit"}}>
          © 2022 Scrum Plus Plus • GitHub • Contact
        </p>
      </footer>
    </div>
  )
}

export default MyApp
