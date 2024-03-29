import React from "react";
const DuckGif = require("../Images/Duck.gif");

const centerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Adjust this to fit your Pages
};

const duckStyle: React.CSSProperties = {
  width: "15%",
  height: "auto",
};

function Loading() {
  return (
    <div style={centerStyle}>
      <img src={DuckGif} alt="Duck GIF" style={duckStyle} />
      <img src={DuckGif} alt="Duck GIF" style={duckStyle} />
      <img src={DuckGif} alt="Duck GIF" style={duckStyle} />
      <img src={DuckGif} alt="Duck GIF" style={duckStyle} />
      <img src={DuckGif} alt="Duck GIF" style={duckStyle} />
    </div>
  );
}

export default Loading;


