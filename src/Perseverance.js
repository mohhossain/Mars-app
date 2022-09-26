import React from "react";

function Perseverance({ roverImage, rovers, onRoverChange }) {
  const handleClick = () => {
    onRoverChange("perseverance");
  };
  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      <img height="250px" className="rover" src={roverImage}></img>
    </div>
  );
}

export default Perseverance;
