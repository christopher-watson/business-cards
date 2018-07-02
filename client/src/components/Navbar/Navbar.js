import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
    Social Swap
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
        <li
        className={
          window.location.pathname === "/user"
            ? "nav-item active"
            : "nav-item"
        }
      >
        <Link to="/user" className="nav-link">
          User
        </Link>
      </li>
      <li
      className={
        window.location.pathname === "/events"
          ? "nav-item active"
          : "nav-item"
      }
    >
      <Link to="/events" className="nav-link">
        Events
      </Link>
    </li>
      </ul>
    </div>

  </nav>
);

export default Navbar;
