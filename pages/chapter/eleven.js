import React from "react";
import Chapter from "../../components/chapter";

export default function Eleven() {
  const title = "Bröllopsbilder på bron";
  const imagesStart = 342;
  const imagesEnd = 370;

  return (
    <Chapter
      title={title}
      imagesStart={imagesStart}
      imagesEnd={imagesEnd}
      nextChapter="/chapter/twelve"
      prevChapter="/chapter/ten"
    />
  );
}
