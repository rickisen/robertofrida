import React from "react";
import styles from "../../styles/Home.module.css";
import imageStyles from "../../styles/image-grid.module.css";
import manifest from "../../image-manifest.json";
import ImageItem from "../../components/imageItem";

/**
 * @param {number} min
 * @param {number} max
 * @param {string} url
 * @return {boolean} result of filter
 */
function filterImagesBetween(min, max, url) {
  const current = parseInt(url.substring(url.lastIndexOf("_") + 1), 10);
  return current <= max && current >= min;
}

export default function() {
  console.log("manifest", manifest);
  return (
    <main className={styles.main}>
      <h1>Förberedelser</h1>
      <div className={imageStyles.grid}>
        {manifest.images
          .filter(e => filterImagesBetween(1, 10, e))
          .map(url => (
            <ImageItem key={url} url={url} />
          ))}{" "}
      </div>
      <div className={imageStyles.grid}>
        {manifest.images
          .filter(e => filterImagesBetween(11, 21, e))
          .map(url => (
            <ImageItem key={url} url={url} />
          ))}{" "}
      </div>
      <div className={imageStyles.grid}>
        {manifest.images
          .filter(e => filterImagesBetween(22, 33, e))
          .map(url => (
            <ImageItem key={url} url={url} />
          ))}{" "}
      </div>
    </main>
  );
}
