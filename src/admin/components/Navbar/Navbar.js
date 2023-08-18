import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="admin_nav">
            <div className="container">
                <div className="Navbar">
                    <span className="nav-logo">
                        <img src={require("../../../Assets/img/logo Footer.png")}></img>
                    </span>
                    <div className={`nav-items ${isOpen && "open"}`}>
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/service">Service</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div
                        className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
