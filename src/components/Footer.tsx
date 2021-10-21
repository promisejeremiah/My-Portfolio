import React from 'react';
import './Footer.css';

const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (
        <footer className="container-fluid mt-5">
            <div className="footer text-center pt-4">
                <span className="text-muted">made with ❤️ by JEREMIAH PROMISE ANIEDI &copy; 2021-{yearNow} </span>
            </div>
        </footer>
    );
};

export default Footer;
