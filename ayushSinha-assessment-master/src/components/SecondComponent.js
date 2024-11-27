// src/components/SecondComponent.js
import React from "react";

const SecondComponent = () => {
  return (
    <div style={styles.container}>
      <div style={styles.div}>Content of the first div</div>
      <div style={styles.div}>Content of the second div</div>
    </div>
  );
};

const styles = {
  container: { padding: "20px" },
  div: {
    backgroundColor: "#f0f0f0",
    margin: "10px 0",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
};

export default SecondComponent;
