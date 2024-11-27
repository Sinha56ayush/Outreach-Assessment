// src/components/TileComponent.js
import React from "react";

const TileComponent = ({ title }) => {
  return (
    <div style={styles.tile}>
      <h3>{title}</h3>
    </div>
  );
};

const styles = {
  tile: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default TileComponent;
