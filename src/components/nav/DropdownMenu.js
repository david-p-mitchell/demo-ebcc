import React from 'react';
import { NavLink } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = ({ title, links, isOpen, onClick, handleLinkClick }) => {
  return (
    <li className="navbar-item dropdown">
      <div className="dropdown-title navbar-link" onClick={onClick}>
        {title}
      </div>
      <ul className={`dropdown-menu ${isOpen ? 'active' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.to} className="navbar-link" onClick={handleLinkClick}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropdownMenu;
