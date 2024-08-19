import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <h2>Help Center</h2>
        <Link to="/add-card" className="btn-link">
          <button className="btn">Submit a Request</button>
        </Link>
      </header>
    </div>
  );
}

export default Header;
