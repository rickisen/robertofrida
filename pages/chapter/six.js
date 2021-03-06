import React from "react";
import Chapter from "../../components/chapter";

export default function Six() {
  const title = "Första bröllopsbilderna";
  const imagesStart = 162;
  const imagesEnd = 190;

  return (
    <Chapter
      title={title}
      imagesStart={imagesStart}
      imagesEnd={imagesEnd}
      prevChapter="/chapter/five"
      nextChapter="/chapter/seven"
    />
  );
}
