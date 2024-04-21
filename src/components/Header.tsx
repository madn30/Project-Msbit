import { useState } from "react";
import { NavLink } from "react-router-dom";

const getCurrentRouteTitle = () => {
  switch (location.pathname) {
    case "/":
      return "Home";
    case "/add-contact":
      return "Add Contact";
    case "/contact-list":
      return "Contact List";
    default:
      return "Page";
  }
};

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header full">
      <div className="header-title">{getCurrentRouteTitle()}</div>

      <button className="header-menu-button" onClick={() => setMenuOpen(!isMenuOpen)}>
        Menu
      </button>
      <nav className={`header-nav-links ${isMenuOpen ? "open" : ""}`}>
        <NavLink
          to={"/"}
          className="header-nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to={"/add-contact"}
          className="header-nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Add Contact
        </NavLink>
        <NavLink
          to={"/contact-list"}
          className="header-nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Contact List
        </NavLink>
      </nav>
    </header>
  );
}
