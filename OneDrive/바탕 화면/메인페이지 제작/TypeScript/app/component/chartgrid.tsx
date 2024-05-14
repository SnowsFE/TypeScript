import React, { useState } from "react";
import album from "../Logo/Album/album.png";
import Image from "next/image";

const ChartGrid = () => {
  const totalItems = 21; // 아이템의 총 개수입니다.
  const itemsPerPage = 7; // 페이지당 아이템의 개수입니다.
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 총 페이지 수를 계산합니다.
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태를 관리합니다.

  // 현재 페이지에 맞게 아이템 리스트를 생성합니다.
  const currentItems = [];
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems); // endIndex를 totalItems를 넘지 않도록 설정
  for (let i = startIndex; i < endIndex; i++) {
    currentItems.push(
      <div className="box" key={i}>
        <Image src={album} alt="앨범"></Image>
      </div>
    );
  }

  // 이전 페이지로 이동하는 함수입니다.
  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // 다음 페이지로 이동하는 함수입니다.
  const nextPage = () => {
    setCurrentPage((prev) =>
      prev < totalPages - 1 ? prev + 1 : totalPages - 1
    );
  };

  // 슬라이드를 위한 계산입니다. 각 아이템의 너비(230px)와 gap(1em = 16px)을 고려합니다.
  const slideWidth = itemsPerPage * (230 + 16); // 여기서 16px는 각 box 사이의 gap이라고 가정합니다.

  return (
    <div className="container">
      <button onClick={prevPage} className="button">
        ◀
      </button>
      <div className="sliderContainer">
        <div
          className="grid"
          style={{ transform: `translateX(-${currentPage * slideWidth}px)` }}
        >
          {currentItems}
        </div>
      </div>
      <button onClick={nextPage} className="button">
        ▶
      </button>
    </div>
  );
};

export default ChartGrid;
