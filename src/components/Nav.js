import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

function Nav() {
    return (
        <nav>
            <ul>
                <img src={Logo} alt="Little Lemon Logo"/>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;