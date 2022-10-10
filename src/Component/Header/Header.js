import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=' '>
            <nav className="navbar navbar-expand-lg nav-bg">
                <div className="container-fluid ">
                    <Link to='/' className="navbar-brand fw-bold fs-4 " href="/">Quiz Sage</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link fw-bold" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/topics' className="nav-link fw-bold" href="#">Topics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/stastics' className="nav-link fw-bold" href="#">Stastics</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/blog' className="nav-link fw-bold" href="#">Blog</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;