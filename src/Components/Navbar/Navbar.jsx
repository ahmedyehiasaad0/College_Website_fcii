import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style from "./Navbar.module.css";

export default class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className={`navbar navbar-expand-lg text-center    ${style.main}`}>
                    <a className="navbar-brand ps-5" href="/home">Menofia</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${style.nav}`} to="/home" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Home
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item blackk text-primary" href="/home">Home</a></li>
                                    <li><a className="dropdown-item blackk text-primary" href="#activites">Activites</a></li>
                                    <li><a className="dropdown-item blackk text-primary" href="#desc">Desc</a></li>
                                    <li><a className="dropdown-item blackk text-primary" href="#footer">Footer</a></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${style.nav}`} to="/home" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item blackk text-primary" href="/Abouttheestablishmentoftheprogram">About the establishment of the program</a></li>
                                    <li><a className="dropdown-item blackk text-primary" href="/vision">Vision</a></li>
                                    <li><a className="dropdown-item blackk text-primary" href="/themessage">the message</a></li>
                                    <li><a className="dropdown-item blackk text-primary" href="/objectives">Objectives</a></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${style.nav}`} to="/home" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Departments
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><a className={`dropdown-item blackk text-primary ${style.nav}`} href="/informationTechnology">Information Technology</a></li>
                                    <li><a className="dropdown-item blackk text-primary" href="/operationsResearchandDecision">Operations Research and Decision</a></li>
                                    <li><a className="dropdown-item blackk text-primary" href="/computerScience">Computer Science</a></li>
                                    <li><a className="dropdown-item blackk text-primary" href="/informationSystems">Information Systems</a></li>
                                    <li><a className="dropdown-item blackk text-primary" href="/softwareEngineering">Software Engineering</a></li>


                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${style.nav}`} to="/communityservices">Communityservices</Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link className={`nav-link ${style.nav}`} to="/facultyMembers">FacultyMembers</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className={`nav-link ${style.nav}`} to="/healthcare">Healthcare</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${style.nav}`} to="/location">Contact Us</Link>
                            </li>
                            

                            

                            <li className="nav-item">
                                <Link className={`nav-link ${style.nav}`} to="/login">Login</Link>
                            </li>

                        </ul>

                    </div>
                </nav>

            </div>



        )
    }
}
