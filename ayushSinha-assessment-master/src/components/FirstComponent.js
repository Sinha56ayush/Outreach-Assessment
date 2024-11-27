// src/components/FirstComponent.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleClicked } from "../redux/buttonSlice";

const FirstComponent = () => {
  const isClicked = useSelector((state) => state.button.clicked);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => dispatch(toggleClicked())}>
        Get Started
      </button>
      {isClicked && <p style={styles.message}>Button Clicked!</p>}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  button: { padding: "10px 20px", fontSize: "16px", cursor: "pointer" },
  message: { color: "green", fontWeight: "bold", marginTop: "10px" },
};

export default FirstComponent;
