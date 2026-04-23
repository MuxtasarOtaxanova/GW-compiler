import React from 'react';
import './Navbar.css';
import { FaMoon, FaSun } from 'react-icons/fa';
import { VscRunAll } from 'react-icons/vsc';
import { MdOutlineClear } from 'react-icons/md';

const Navbar = ({ runCode, clearCode }) => {
  return (
    <div className="navbar">
      <nav className="navbar-container">
        <h1 className="logo">
          GW <span>Compiler</span>
        </h1>

        <div className="nav-buttons">
          <button className="run-btn" onClick={runCode}>
            Run <VscRunAll />
          </button>

          <button className="clear-btn" onClick={clearCode}>
            Clear <MdOutlineClear />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
