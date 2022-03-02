import React, { useRef, useEffect, useState } from "react";

export default function LazyImg({
  src,
  initialSrc = "/loading-light.svg",
  waitFor = 2,
}) {
  const imgElement = useRef(null);
  const observer = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      setTimeout(() => setInView(true), waitFor);
    });
  }, [observer]);

  useEffect(() => {
    if (observer.current && imgElement.current) {
      observer.current.observe(imgElement.current);
    }
  }, [observer.current, imgElement.current]);

  useEffect(() => {
    return () => observer.current.disconnect();
  }, []);

  return (
    <img
      loading="lazy"
      ref={imgElement}
      src={inView ? src : initialSrc}
      style={{
        backgroundImage: inView ? "url(" + initialSrc + ")" : "",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
}
