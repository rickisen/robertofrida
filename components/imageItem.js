import React from "react";
import imageStyles from "../styles/image-grid.module.css";
import LazyImg from "./lazyImg";

/**
 * @param {string} url
 * @return {string} className
 */
function mapToClassName(url) {
  if (typeof url !== "string") {
    return imageStyles.wide;
  }

  let size = "";
  if (url.includes("/1/") || url.includes("/2/")) {
    size = "Tiny";
  } else if (url.includes("/3/")) {
    size = "Small";
  } else if (url.includes("/5/")) {
    size = "Large";
  }

  if (url.includes("-portrait")) {
    return imageStyles["portrait" + size];
  } else {
    return imageStyles["wide" + size];
  }
}

export default function ImageItem({ url, openInModal }) {
  let open = () => {};
  if (typeof openInModal === "function") {
    open = () => openInModal();
  }

  const className = mapToClassName(url);

  let sizedUrl = url;
  if (className.includes("Large")) {
    sizedUrl = url.replace("images/", "images-medium/");
  } else {
    sizedUrl = url.replace("images/", "images-mini/");
  }

  return (
    <div onClick={open} className={className}>
      <LazyImg src={sizedUrl} />
    </div>
  );
}
