import React from "react";
import Chapter from "../../components/chapter";

export default function Twelve() {
  const title = "Bröllopsbilder vid vattnet";
  const imagesStart = 371;
  const imagesEnd = 390;

  return (
    <Chapter title={title} imagesStart={imagesStart} imagesEnd={imagesEnd} />
  );
}
