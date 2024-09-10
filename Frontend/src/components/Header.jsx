import React, {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {

    return (
        <>
            <nav className='navbar'>
                <img src={logo} alt='logo'/>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/education">Education</NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience">Experience</NavLink>
                    </li>
                    <li>
                        <NavLink to="/industry">Industry</NavLink>
                    </li>
                    <li>
                        <NavLink to="/certificate">Certificate</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Header;