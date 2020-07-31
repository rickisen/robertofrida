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
        <h1 className={styles.title}>Roberts och Fridas Bröllopsbilder!</h1>
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
            <a>Första bröllopsbilderna</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/seven">
            <a>Tina och Porträtt</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/eight">
            <a>Lämnar Stockholms Sjukhem</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/nine">
            <a>Caliente och andra bror Fredrik</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/ten">
            <a>Mot Blekholmsterassen</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/eleven">
            <a>Bröllopsbilder på bron</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/twelve">
            <a>Bröllopsbilder vid vattnet</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/thirteen">
            <a>Förfika innan middag</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/fourteen">
            <a>Middag på balkongen</a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/fifteen">
            <a>Natt och hej då</a>
          </Link>
        </li>
      </ul>

      <footer className={styles.footer} />
    </div>
  );
}
