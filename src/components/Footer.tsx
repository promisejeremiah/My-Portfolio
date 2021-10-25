import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (
        <footer className="container-fluid">
            <div className="footer text-center">
                <span className="text-muted">made with ❤️ by JEREMIAH PROMISE ANIEDI &copy; 2021-{yearNow} </span>
                <a href="https://twitter.com/aniedipromisej"><i className="fa fa-twitter m-3"></i></a>
                <a href="https://linkedin.com/in/promisejeremiah"><i className="fa fa-linkedin m-3"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
