import React from "react";
import Chapter from "../../components/chapter";

export default function Three() {
  const title = "Väntan På Deltagare";
  const imagesStart = 51;
  const imagesEnd = 86;

  return (
    <Chapter title={title} imagesStart={imagesStart} imagesEnd={imagesEnd} />
  );
}
