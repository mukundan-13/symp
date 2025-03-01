import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-header sticky-top">
      <div className="nav-content">
        <img className="website-logo" src="logo.svg" alt="website logo" onClick={() =>{navigate("/")
         }
        } />

        {/* Hamburger Menu */}
        <div className="menu-toggle me-3" onClick={toggleMenu}>
          {(isOpen)?"X":"☰"}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-link" onClick={() =>{ toggleMenu(); navigate("/")}}>
            Home
          </li>
          <li className="nav-link" onClick={() => { toggleMenu();navigate("/events")}}>
            Events
          </li>
          <li className="nav-link" onClick={() => { toggleMenu();navigate("/contact")}}>
            Contact Us
          </li>
          <li className="nav-link" onClick={() => { toggleMenu();navigate("/about")}}>
            About Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
