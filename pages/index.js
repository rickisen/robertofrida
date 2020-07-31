import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            <a>Förberedelser</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/two">
            <a>Väntan på taxi</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/three">
            <a>Väntan på deltagare</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/four">
            <a>Tina Anländer</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/five">
            <a>Vigsel dags</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/six">
            <a>Vigsel dags</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/seven">
            <a>Vigsel dags</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/eight">
            <a>Vigsel dags</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/nine">
            <a>Vigsel dags</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/ten">
            <a>Vigsel dags</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/eleven">
            <a>Vigsel dags</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/twelve">
            <a>Vigsel dags</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/thirteen">
            <a>Vigsel dags</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/fourteen">
            <a>Vigsel dags</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/fifteen">
            <a>Vigsel dags</a>
          </Link>
        </li>
      </ul>

      <footer className={styles.footer} />
    </div>
  );
}
