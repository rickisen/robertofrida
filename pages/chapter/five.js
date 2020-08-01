import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Home.module.css";
import imageStyles from "../../styles/image-grid.module.css";
import manifest from "../../image-manifest.json";
import filterImagesBetween, { sortImages } from "../../components/helpers";
import ImageItem from "../../components/imageItem";
import Modal from "../../components/Modal";
import ImageSlider from "../../components/ImageSlider";

export default function Five() {
  const title = "Efter Vigseln";
  const imagesStart = 114;
  const imagesEnd = 161;
  const prevChapter = "/chapter/four";
  const nextChapter = "/chapter/six";

  const [openModal, setOpenModal] = useState(false);
  const [target, setTarget] = useState(0);
  const images = [
    ...[
      "/images/4/frid_09.jpg",
      "/images/4/kiss_016.jpg",
      "/images/4/out_013.jpg",
      "/images/4/ring_0166.jpg"
    ],
    ...manifest.images
      .filter(e => filterImagesBetween(imagesStart, imagesEnd, e))
      .sort(sortImages)
  ];

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
          <a>Föregående</a>
        </Link>
        <Link href={nextChapter}>
          <a>Nästa</a>
        </Link>
      </footer>
    </main>
  );
}
