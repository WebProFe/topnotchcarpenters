import React from 'react';
import { NavLink } from 'react-router-dom';

// fa-youtube

const Footer = () => (
    <div className="footer">
        <div className="copyright">
            <p>Copyright © 2018 Top Notch Carpentry LLC <span className="footer__list__pipe">||</span> Designed By <span>Sitio Center</span> </p>
        </div>

        <ul className="footer__list">
            <li className="footer__list__item"><NavLink to="skills" className="footer__list__item__link">skills</NavLink></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><NavLink to="projects" className="footer__list__item__link">projects</NavLink></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><NavLink to="contact" className="footer__list__item__link">contact</NavLink></li>        </ul>
    </div>
);

export default Footer;
