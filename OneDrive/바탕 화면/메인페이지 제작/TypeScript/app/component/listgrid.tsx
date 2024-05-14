import React from "react";
import album from "../Logo/Album/album.png";
import Image from "next/image";

const List = () => {
  // 4개의 박스를 생성하는 함수
  const createBoxes = () => {
    let boxes = [];
    for (let i = 0; i < 4; i++) {
      boxes.push(
        <div className="box2" key={i}>
          <Image src={album} alt="앨범"></Image>
        </div>
      );
    }
    return boxes;
  };

  // 3개의 그리드를 생성하는 함수
  const createGrids = () => {
    let grids = [];
    for (let i = 0; i < 3; i++) {
      grids.push(
        <div className="grid2" key={i}>
          {createBoxes()}
        </div>
      );
    }
    return grids;
  };

  return <div className="container2">{createGrids()}</div>;
};

export default List;
