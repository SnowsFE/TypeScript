"use client";
import React, { useState } from "react";
import ChartGrid from "./chartgrid";
import List from "./listgrid";

interface FontState {
  banner: string;
  search: string;
  chart: string;
  hot: string;
  new: string;
  list: string;
}

const Font: React.FC = () => {
  const [state, setState] = useState<FontState>({
    banner: "Banner & AD",
    search: "🔍 ( 노래🎙 , 아티스트💿 )",
    chart: "📈 Daily Chart 📈",
    hot: "현재 뜨는 아티스트",
    new: "신곡",
    list: "장르별 뜨는 음악",
  });

  return (
    <>
      <div className="banner">
        <p>{state.banner}</p>
      </div>
      <div className="SearchContainer">
        <div className="Search">
          <p>{state.search}</p>
        </div>
      </div>
      <div className="DailyChartContainer">
        <div className="DailyChart">
          <p>{state.chart}</p>
        </div>
        <ChartGrid />
      </div>
      <div className="Listcontainer">
        <div className="List">
          <div className="box3">{state.hot}</div>
          <div className="box4">{state.new}</div>
          <div className="box5">{state.list}</div>
        </div>
        <List />
      </div>
    </>
  );
};

export default Font;
