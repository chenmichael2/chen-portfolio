import React, { Component } from 'react';
import '../components/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <nav className="navbar is-link is-fixed-top">
                    <div className="navbar-brand">
                        <div className="brand-name">
                                <a className="navbar-item" href="#main">
                                    <img className="nav-icon" src="frame-1.ico" /><span className="brand-name">Michael Chen</span>
                                </a>
                        </div>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item" href="#about">
                                <span className="icon">
                                    <i className="fas fa-info"></i>
                                </span>
                                <span>About</span>
                            </a>
                            <a className="navbar-item" href="#projects">
                                <span className="icon">
                                    <i className="fas fa-bars"></i>
                                </span>
                                <span>Projects</span>
                            </a>
                            <a className="navbar-item" href="#resume">
                                <span className="icon">
                                    <i className="fas fa-file-alt"></i>
                                </span>
                                <span>Resume</span>
                            </a>
                            <a className="navbar-item" href="#contact">
                                <span className="icon">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <span>Contact</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;