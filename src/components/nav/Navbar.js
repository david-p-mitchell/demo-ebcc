import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for burger menu
  const [activeDropdown, setActiveDropdown] = useState(null); // State for active dropdown

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle burger menu
    setActiveDropdown(null); // Close any open dropdown when toggling the menu
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index); // Toggle the dropdown state
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the mobile menu
    setActiveDropdown(null); // Close any open dropdowns
  };

  const aboutLinks = [
    { to: "/what-we-believe", label: "What We Believe" },
    { to: "/church-history", label: "Church History" },
    { to: "/pastors-message", label: "Pastor's Message" },
  ];

  const eventLinks = [
    { to: "/sunday-services", label: "Sunday Services" },
    { to: "/bible-study", label: "Bible Study" },
    { to: "/womens-meetings", label: "Women's Meetings" },
    { to: "/event2", label: "Online Prayer Meeting" },
    { to: "/mens-meetings", label: "Men's Meetings" },
    { to: "/youth", label: "Discoverers" },
    { to: "/children", label: "Children" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <NavLink to="/" className="navbar-link-home" onClick={handleLinkClick}>
        <div className="navbar-logo">Enon Baptist Church</div>
        </NavLink>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
      

      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-list">
          <DropdownMenu 
            title="About Us" 
            links={aboutLinks} 
            isOpen={activeDropdown === 0} 
            onClick={() => toggleDropdown(0)} 
            handleLinkClick={handleLinkClick} 
          />

          <DropdownMenu 
            title="What's On" 
            links={eventLinks} 
            isOpen={activeDropdown === 1} 
            onClick={() => toggleDropdown(1)} 
            handleLinkClick={handleLinkClick} 
          />

          <li className="navbar-item">
            <NavLink to="/sermons" className="navbar-link" onClick={handleLinkClick}>Sermons</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className="navbar-link" onClick={handleLinkClick}>Contact</NavLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
