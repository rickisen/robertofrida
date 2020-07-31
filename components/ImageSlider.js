import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
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

export default function ImageSlider({ images, index = 0 }) {
  const scrollContainer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    scrollContainer.current.scrollLeft = Math.ceil(
      scrollContainer.current.clientWidth * index
    );
  }, [index, scrollContainer]);

  const next = () => scrollToImage(scrollContainer, currentIndex + 1);
  const previous = () => scrollToImage(scrollContainer, currentIndex - 1);

  const onScroll = () => {
    setTimeout(
      () =>
        setCurrentIndex(
          Math.floor(
            (scrollContainer.current.scrollLeft /
              scrollContainer.current.scrollWidth) *
              images.length
          )
        ),
      0
    );
  };

  return (
    <div className={styles.slider}>
      <button className={styles.previous} onClick={previous}>
        {"<"}
      </button>
      <div>
        <ul
          onScroll={onScroll}
          className={styles.scrollContainer}
          ref={scrollContainer}
        >
          {images.map(url => (
            <li key={url}>
              <img src={url} />
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.next} onClick={next}>
        {">"}
      </button>
    </div>
  );
}
