import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import imageStyles from "../styles/image-grid.module.css";
import manifest from "../image-manifest.json";
import filterImagesBetween, { sortImages } from "./helpers";
import ImageItem from "./imageItem";
import Modal from "./Modal";
import ImageSlider from "./ImageSlider";

export default function Chapter({
  title,
  imagesStart,
  imagesEnd,
  nextChapter = "/",
  prevChapter = "/"
}) {
  const [openModal, setOpenModal] = useState(false);
  const [target, setTarget] = useState(0);
  const images = manifest.images
    .filter(e => filterImagesBetween(imagesStart, imagesEnd, e))
    .sort(sortImages);

  return (
    <main className={styles.main}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{"Robert och Frida | bröllopsbilder | " + title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href={"/"}>
          <a>Start</a>
        </Link>
      </header>

      <h1>{title}</h1>
      <Modal open={openModal} setOpen={setOpenModal}>
        <ImageSlider images={images} index={target} />
      </Modal>
      <div className={imageStyles.grid}>
        {images.map((url, index) => (
          <ImageItem
            openInModal={() => {
              setTarget(index);
              setOpenModal(true);
            }}
            key={url}
            url={url}
          />
        ))}
      </div>
      <footer className={styles.footer}>
        <Link href={prevChapter}>
          <a>{prevChapter === "/" ? "Start" : "Föregående"}</a>
        </Link>
        <Link href={nextChapter}>
          <a>{nextChapter === "/" ? "Start" : "Nästa"}</a>
        </Link>
      </footer>
    </main>
  );
}
