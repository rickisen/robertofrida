import React from "react";
import Chapter from "../../components/chapter";

export default function Ten() {
  const title = "Mot Blekholmsterassen";
  const imagesStart = 322;
  const imagesEnd = 341;

  return (
    <Chapter
      title={title}
      imagesStart={imagesStart}
      imagesEnd={imagesEnd}
      prevChapter="/chapter/nine"
      nextChapter="/chapter/eleven"
    />
  );
}
