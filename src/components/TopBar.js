import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <header>
      <div className="topbar-text">
        <Link
          to="/"
          style={{ color: "var(--primary)", textDecoration: "none" }}
        >
          Laurelwood-Erb
        </Link>
      </div>
    </header>
  );
};

export default TopBar;
