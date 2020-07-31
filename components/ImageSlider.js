import React, { useRef, useEffect } from "react";
import styles from "../styles/slider.module.css";

function scrollToImage(scrollContainer, index) {
  if (scrollContainer.current) {
    if (scrollContainer.current.scrollTo) {
      try {
        scrollContainer.current.scrollTo({
          top: 0,
          left: scrollContainer.current.clientWidth * index,
          behavior: "smooth"
        });
      } catch (e) {
        scrollContainer.current.scrollTo(
          scrollContainer.current.clientWidth * index
        );
      }
    } else {
      scrollContainer.current.scrollLeft =
        scrollContainer.current.clientWidth * index;
    }
  }
}

function recalculateCurrentImage(scrollContainer, images) {
  return Math.round(
    (scrollContainer.current.scrollLeft / scrollContainer.current.scrollWidth) *
      images.length
  );
}

export default function ImageSlider({ images, index = 0 }) {
  const scrollContainer = useRef(null);

  useEffect(() => {
    scrollContainer.current.scrollLeft = Math.ceil(
      scrollContainer.current.clientWidth * index
    );
  }, [index, scrollContainer]);

  const next = () => {
    const currentIndex = recalculateCurrentImage(scrollContainer, images);
    scrollToImage(scrollContainer, currentIndex + 1);
  };

  const previous = () => {
    const currentIndex = recalculateCurrentImage(scrollContainer, images);
    scrollToImage(scrollContainer, currentIndex - 1);
  };

  return (
    <div className={styles.slider}>
      <button className={styles.previous} onClick={previous}>
        Föregående
      </button>
      <div>
        <ul className={styles.scrollContainer} ref={scrollContainer}>
          {images.map(url => (
            <li key={url}>
              <img src={url} />
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.next} onClick={next}>
        Nästa
      </button>
    </div>
  );
}
