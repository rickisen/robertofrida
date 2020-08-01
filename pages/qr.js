import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Robert och Frida | qr scan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kolla in bilder från bröllops dagen!</h1>
        <p>Gå in på fridbert.rickisen.com</p>
        <p>Eller skanna denna QR kod på din telefon:</p>
        <img src="/qr.png" alt="qr code" />
        <p>På iOS gör du det enklast genom att peka vanliga kameran på detta</p>
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
