import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className='container'>
            <Logo />
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/a-propos">A propos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
