// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><Link  to="/" style={{color:"white"}}>Home</Link></li>
        <li><Link to="/explore"style={{color:"white"}}>Explore Divs</Link></li>
        <li><Link  to="/tiles"style={{color:"white"}}>Tiles</Link></li>
        <li><Link  to="/random"style={{color:"white"}}>Random Page</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px",
    color: "#fff",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
