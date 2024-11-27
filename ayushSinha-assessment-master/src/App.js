// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "20px" }}>
              <h1>Welcome to the React Assessment</h1>
              <FirstComponent />
              <SecondComponent />
              <ThirdComponent />
            </div>
          }
        />
        <Route path="/first" element={<FirstComponent />} />
        <Route path="/second" element={<SecondComponent />} />
        <Route path="/third" element={<ThirdComponent />} />
        <Route path="/random" element={<div style={{ padding: "20px" }}>This is a random page!</div>} />
      </Routes>
    </Router>
  );
};

export default App;
