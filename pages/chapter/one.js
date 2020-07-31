import React from "react";
import Chapter from "../../components/chapter";

export default function One() {
  const title = "Förberedelser";
  const imagesStart = 1;
  const imagesEnd = 33;

  return (
    <Chapter title={title} imagesStart={imagesStart} imagesEnd={imagesEnd} />
  );
}
