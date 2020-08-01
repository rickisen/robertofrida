import React from "react";
import Chapter from "../../components/chapter";

export default function Seven() {
  const title = "Tina och porträtt";
  const imagesStart = 191;
  const imagesEnd = 216;

  return (
    <Chapter
      title={title}
      imagesStart={imagesStart}
      imagesEnd={imagesEnd}
      prevChapter="/chapter/six"
      nextChapter="/chapter/eight"
    />
  );
}
