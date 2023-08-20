import React, { Component } from 'react'
import style from './Activites.module.css'
import logo1 from "../images/sld1.png"
import logo from "../images/sld.png"
import logo2 from "../images/sld2.png"
import logo3 from "../images/sld3.png"
import logo4 from "../images/sld4.png"
import logo5 from "../images/sld5.png"
import logo6 from "../images/sld6.png"
import logo7 from "../images/sld7.png"
export default class Activites extends Component {
    render() {
        return (
            <>
                <section id='activites'>
                    <div className={`container ${style.activites}`}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className={`${style.actvComp}`}>
                                    <div className={`${style.actvImg}`}>
                                        <img src={logo} alt="" className='w-100' />
                                    </div>
                                    <div className={`${style.actvText}`}>
                                        <p>Announcing the study schedules for the second semester of the academic year 2022/2023</p>
                                        <h5>Published On : 11/02/2023</h5>
                                        <p>Announcing the study schedules for the second semester of the academic year 2022/2023</p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${style.actvComp}`}>
                                    <div className={`${style.actvImg}`}>
                                        <img src={logo1} alt="" className='w-100' />
                                    </div>
                                    <div className={`${style.actvText}`}>
                                        <p>The closing ceremony of the ISEF Science and Engineering Fair competition </p>
                                        <h5> Published On : 02/02/2023</h5>
                                        <p>The closing ceremony of the ISEF Science and Engineering Fair competition</p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${style.actvComp}`}>
                                    <div className={`${style.actvImg}`}>
                                        <img src={logo2} alt="" className='w-100' />
                                    </div>
                                    <div className={`${style.actvText}`}>
                                        <p>The inauguration of Mr. Prof. / President of Menoufia University ISEF Science and Engineering Exhibition

                                        </p>
                                        <h5>Published On : 01/02/2023</h5>
                                        <p>The inauguration of Mr. Prof. / President of Menoufia University ISEF Science and Engineering Exhibition</p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${style.actvComp}`}>
                                    <div className={`${style.actvImg}`}>
                                        <img src={logo3} alt="" className='w-100' />
                                    </div>
                                    <div className={`${style.actvText}`}>
                                        <p>Follow-up to the preparations for the second day of the Menoufia Science and Engineering Fair, Faculty of Computers and Information - Menoufia University

                                        </p>
                                        <h5>Published On : 29/01/2023</h5>
                                        <p>Follow-up to the preparations for the second day of the Menoufia Science and Engineering Fair, Faculty of Computers and</p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${style.actvComp}`}>
                                    <div className={`${style.actvImg}`}>
                                        <img src={logo4} alt="" className='w-100' />
                                    </div>
                                    <div className={`${style.actvText}`}>
                                        <p>ISEF Competition "International Science and Engineering Fair" in the Faculty of Computers and Information - Menoufia University

                                        </p>
                                        <h5>Published On : 28/01/2023</h5>
                                        <p>ISEF Competition "International Science and Engineering Fair" in the Faculty of Computers and Information - Menoufia Uni</p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${style.actvComp}`}>
                                    <div className={`${style.actvImg}`}>
                                        <img src={logo5} alt="" className='w-100' />
                                    </div>
                                    <div className={`${style.actvText}`}>
                                        <p>ISEF Competition "International Science and Engineering Fair" in the Faculty of Computers and Information - Menoufia University

                                        </p>
                                        <h5>Published On : 28/01/2023</h5>
                                        <p>ISEF Competition "International Science and Engineering Fair" in the Faculty of Computers and Information - Menoufia Uni</p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${style.actvComp}`}>
                                    <div className={`${style.actvImg}`}>
                                        <img src={logo6} alt="" className='w-100' />
                                    </div>
                                    <div className={`${style.actvText}`}>
                                        <p>ISEF Competition "International Science and Engineering Fair" in the Faculty of Computers and Information - Menoufia University

                                        </p>
                                        <h5>Published On : 28/01/2023</h5>
                                        <p>ISEF Competition "International Science and Engineering Fair" in the Faculty of Computers and Information - Menoufia Uni</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={`${style.actvComp}`}>
                                    <div className={`${style.actvImg}`}>
                                        <img src={logo7} alt="" className='w-100' />
                                    </div>
                                    <div className={`${style.actvText}`}>
                                        <p>ISEF Competition "International Science and Engineering Fair" in the Faculty of Computers and Information - Menoufia University

                                        </p>
                                        <h5>Published On : 28/01/2023</h5>
                                        <p>ISEF Competition "International Science and Engineering Fair" in the Faculty of Computers and Information - Menoufia Uni</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </>
        )
    }
}
