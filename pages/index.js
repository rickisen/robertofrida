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

      <ol className={styles.imageList}>
        <li>
          <Link href="/chapter/one">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/2/20200616_0001.jpg)" }}
            >
              Förberedelser
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/two">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/4/20200616_0045.jpg)" }}
            >
              Väntan på taxi
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/three">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/4/20200616_0068.jpg)" }}
            >
              Väntan på deltagare
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/four">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/4/20200616_0089.jpg)" }}
            >
              Tina Anländer
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/five">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/5/20200616_0118.jpg)" }}
            >
              Vigsel dags
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/six">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/5/20200616_0166.jpg)" }}
            >
              Första bröllopsbilderna
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/seven">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/4/20200616_0196.jpg)" }}
            >
              Tina och Porträtt
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/eight">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/5/20200616_0236.jpg)" }}
            >
              Lämnar Stockholms Sjukhem
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/nine">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/4/20200616_0294.jpg)" }}
            >
              Caliente och andra bror Fredrik
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/ten">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/4/20200616_0337.jpg)" }}
            >
              Mot Blekholmsterassen
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/eleven">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/5/20200616_0368.jpg)" }}
            >
              Bröllopsbilder på bron
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/twelve">
            <a
              className={styles.puff}
              style={{
                backgroundImage: "url(/images/4/20200616_0389-portrait.jpg)"
              }}
            >
              Bröllopsbilder vid vattnet
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/thirteen">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/4/20200616_0400.jpg)" }}
            >
              Förfika innan middag
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/fourteen">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/5/20200616_0425.jpg)" }}
            >
              Middag på balkongen
            </a>
          </Link>
        </li>
        <li>
          <Link href="/chapter/fifteen">
            <a
              className={styles.puff}
              style={{ backgroundImage: "url(/images/3/20200616_0484.jpg)" }}
            >
              Natt och hej då
            </a>
          </Link>
        </li>
      </ol>

      <footer className={styles.footer} />
    </div>
  );
}
