import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useTheme } from "../../hooks/useTheme";

export default function Navbar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>All the things</h1>
        </Link>
        <SearchBar />
        <Link to="/create">
          <h3>Create</h3>
        </Link>
      </nav>
    </div>
  );
}
