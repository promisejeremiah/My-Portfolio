import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mb-5 p-3 fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand font-weight-bold" to={"/"}>Home</Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto mb-2 mb-md-0">
                    <li className="nav-item active">
                        <Link className="nav-link px-4 font-weight-bold" to={"/mycv"} >MyCV</Link>                    
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link px-4 font-weight-bold" to={"/project"} >Project</Link>                    
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link px-4 font-weight-bold" to={"/login"} >Login</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link px-4 font-weight-bold" to={"/contact"} >Contact</Link>                    
                    </li>
                    <li className="nav-item active">
                        <button className="btn btn-success px-4 font-weight-bold" type="submit"><a href="https://drive.google.com/uc?export=download&id=1vMi2V_zdSY0f2z7tA047dIrA3wAtxPHM">Download CV</a></button>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
