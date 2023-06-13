import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchaBar from "../SearchBar/SearchBar";
export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>All the things</h1>
        </Link>
        <SearchaBar />
        <Link to="/create">
          <h3>Create</h3>
        </Link>
      </nav>
    </div>
  );
}
