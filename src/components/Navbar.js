import React from 'react'
import logo from '../images/logo.png'
import '../styles/navbar2.css';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar--container">
            <div className="navbar--menu"><Link to="/games" className="navbar--option">GRY</Link></div>
            <div className="navbar--menu"><Link to="/portfolio" className="navbar--option">PORTFOLIO</Link></div>
            <div className="navbar--logocontainer">
                <Link to="/home"><img src={logo} className="navbar--logo"></img></Link>
            </div>
            <div className="navbar--menu"> <Link to="/about" className="navbar--option">O MNIE</Link></div>
            <div className="navbar--menu"><Link to="/contact" className="navbar--option">KONTAKT</Link></div>
            <section className="hamburger">&#9776;</section>
        </div>
    )
}

/*
            <div className="navbar--menu"><a className="navbar--option" href="#">GRY</a></div>
            <Link to="/games" className="navbar--option">GRY</Link>
            <div className="navbar--menu"><a className="navbar--option" href="#">PORTFOLIO</a></div>
            <div className="navbar--logocontainer">
                <img src={logo} className="navbar--logo"></img>
            </div>
            <div className="navbar--menu"><a className="navbar--option" href="#">O MNIE</a></div>
            <div className="navbar--menu"><a className="navbar--option" href="#">KONTAKT</a></div>
 */