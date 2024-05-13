"use client";
import React, { useState } from "react";

interface HomeState {
  banner: string;
  search: string;
  chart: string;
}

const Home: React.FC = () => {
  const [state, setState] = useState<HomeState>({
    banner: "Banner & AD",
    search: "🔍 ( 노래🎙 , 아티스트💿 )",
    chart: "📈 Daily Chart 📈",
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
      <div className="DailyChart">
        <p>{state.chart}</p>
      </div>
    </>
  );
};

export default Home;
