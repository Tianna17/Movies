import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const NavLink = ({ label, url }) => {
    return (
      <li className="nav-item">
        <Link to={url} className="nav-link">
          {label}
        </Link>
      </li>
    );
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Blooms Movies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <NavLink label="Home" url="/" />
              <NavLink label="Movies" url="/movies" />
              <NavLink label="TV Shows" url="/tv-shows" />
              <NavLink label="People" url="/person" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
