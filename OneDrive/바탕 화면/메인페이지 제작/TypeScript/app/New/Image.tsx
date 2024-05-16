"use client";
import React, { useState } from "react";
import { Image } from "./types";

interface Props {
  images: Image[];
}

const ImageGallery: React.FC<Props> = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 7;

  const lastIndex = (currentPage + 1) * imagesPerPage;
  const firstIndex = lastIndex - imagesPerPage;
  const currentImages = images.slice(firstIndex, lastIndex);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {currentImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            style={{ width: "100%" }}
          />
        ))}
      </div>
      <button onClick={prevPage} disabled={currentPage === 0}>
        이전
      </button>
      <button onClick={nextPage} disabled={lastIndex >= images.length}>
        다음
      </button>
    </div>
  );
};

export default ImageGallery;
