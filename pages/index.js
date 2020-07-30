import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robert och Frida | bröllopsbilder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Välkommen till Roberts och Fridas Bröllopsbilder!
        </h1>
      </main>

      <ul>
        <li>
          <Link href="/chapter/one">
            <a>About Us</a>
          </Link>
        </li>
      </ul>

      <footer className={styles.footer} />
    </div>
  );
}
