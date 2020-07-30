import React from "react";
import styles from "../../styles/Home.module.css";
import imageStyles from "../../styles/image-grid.module.css";
import manifest from "../../image-manifest.json";
import ImageItem from "../../components/imageItem";
import filterImagesBetween from "./helpers";

export default function() {
  return (
    <main className={styles.main}>
      <h1>???????</h1>
      <div className={imageStyles.grid}>
        {manifest.images
          .filter(e => filterImagesBetween(481, 493, e))
          .map(url => (
            <ImageItem key={url} url={url} />
          ))}{" "}
      </div>
    </main>
  );
}
