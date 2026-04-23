import React from 'react';
import './Footer.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>Muxtasar Otaxanova</p>

        <div className="footer-bottom">
          <a className="icon" href="https://t.me/otahanova15">
            <FaTelegramPlane />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/muxtasar-otaxanova-b02b69381/"
          >
            <FaLinkedinIn />
          </a>
          <a className="icon" href="https://github.com/MuxtasarOtaxanova">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
