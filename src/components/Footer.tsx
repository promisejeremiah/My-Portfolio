import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (
        <footer className="container-fluid mt-5">
            <div className="footer text-center pt-4">
                <span className="text-muted">made with ❤️ by JEREMIAH PROMISE ANIEDI &copy; 2021-{yearNow} </span>
                <Link to={''}><i className="fa fa-twitter m-3"></i></Link>
                <Link to={''}><i className="fa fa-linkedin m-3"></i></Link>
            </div>
        </footer>
    );
};

export default Footer;
