import React from "react";
import "./Navbar.css";

// Instead of using anker tag we are using Link from dom
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <h1 className="logo">Simulation</h1>
        <ul className="main-nav">
          <Link to="/coin">
            <li>Coin </li>
          </Link>
          <Link to="/dice">
            <li>Die</li>
          </Link>
          <Link to="/normalDice">
            <li>Sum of Dice</li>
          </Link>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
