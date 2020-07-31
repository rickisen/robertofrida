import React from "react";
import Chapter from "../../components/chapter";

export default function Two() {
  const title = "Förberedelser";
  const imagesStart = 34;
  const imagesEnd = 50;

  return (
    <Chapter title={title} imagesStart={imagesStart} imagesEnd={imagesEnd} />
  );
}
