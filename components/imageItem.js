import React from "react";
import imageStyles from "../styles/image-grid.module.css";

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

export default function({ url, index, openInModal }) {
  let open = () => {};
  if (typeof openInModal === "function") {
    open = () => openInModal(index);
  }

  return (
    <div onPress={open} className={mapToClassName(url)}>
      <img src={url} />
    </div>
  );
}
