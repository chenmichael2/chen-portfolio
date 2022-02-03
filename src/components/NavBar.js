import React, { Component } from 'react';
import '../components/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <nav class="navbar is-link is-fixed-top">
                    <div class="navbar-brand">
                        <div class="brand-name">
                            <div class="michael-chen">Michael Chen</div>
                        </div>
                        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item" href="#about">
                                <span class="icon">
                                    <i class="fas fa-info"></i>
                                </span>
                                <span>About</span>
                            </a>
                            <a class="navbar-item" href="#services">
                                <span class="icon">
                                    <i class="fas fa-bars"></i>
                                </span>
                                <span>Services</span>
                            </a>
                            <a class="navbar-item" href="#resume">
                                <span class="icon">
                                    <i class="fas fa-file-alt"></i>
                                </span>
                                <span>Resume</span>
                            </a>
                            <a class="navbar-item" href="#portfolio">
                                <span class="icon">
                                    <i class="fas fa-th-list"></i>
                                </span>
                                <span>Portfolio</span>
                            </a>
                            <a class="navbar-item" href="#contact">
                                <span class="icon">
                                    <i class="fas fa-envelope"></i>
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