import React from "react";
import Chapter from "../../components/chapter";

export default function Fifteen() {
  const title = "Natt och hej då";
  const imagesStart = 481;
  const imagesEnd = 493;

  return (
    <Chapter
      title={title}
      imagesStart={imagesStart}
      imagesEnd={imagesEnd}
      prevChapter="/chapter/fourteen"
      nextChapter="/"
    />
  );
}
