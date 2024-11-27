// src/components/ThirdComponent.js
import React from "react";
import TileComponent from "./TileComponent";

const ThirdComponent = () => {
  const tiles = ["Learn React", "Understand Redux", "Master Router"];

  return (
    <div style={styles.container}>
      {tiles.map((tile, index) => (
        <TileComponent key={index} title={tile} />
      ))}
    </div>
  );
};

const styles = {
  container: { display: "flex", justifyContent: "space-around", padding: "20px" },
};

export default ThirdComponent;
