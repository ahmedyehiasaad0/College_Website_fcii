import React, { Component } from 'react'
import style from './centerUnitsAtFci.module.css'
import logo from '../images/fci1.jpg'
import logo2 from '../images/fci2.jpg'
import logo3 from '../images/fci3.jpg'
import logo4 from '../images/fci4.jpg'
import logo5 from '../images/fci5.jpg'
import logo6 from '../images/fci6.jpg'
import { Link } from 'react-router-dom';

export default class CenterUnits extends Component {
    render() {
        return (
            <>
                <div className= {` container  ${style.CenterUnitsAtFci}`}>
                    <h2>المراكز والوحدات بالجامعة</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <div className={`${style.photo}`}>
                                <img src={logo} alt="" className='w-100' />
                                <div className={`${style.btnn}`}>
                                    <Link to='/trinng'>
                                        <button className='btn btn-outline-light'>VIEW
                                        </button>
                                    </Link>
                                   
                                    <a href="./images/fci1.jpg"> <button className='btn btn-outline-light'>
                                        ZOOM</button></a>
                                    
                                </div>
                            </div>
                            <h4>مركز التدريب المهنى</h4>

                        </div>
                        <div className="col-md-3">
                            <div className={`${style.photo}`}>
                                <img src={logo2} alt="" className='w-100' />
                                <div className={`${style.btnn}`}>

                                    <Link to='/jopsCenter'>
                                        <button className='btn btn-outline-light'>VIEW
                                        </button>
                                    </Link>
                                   
                                    <button className='btn btn-outline-light'> <a href="../images/fci1.jpg"></a>
                                        ZOOM</button>
                                </div>
                            </div>
                            <h4>مركز التطوير الوظيفى وريادة الأعمال CDCE</h4>

                        </div>

                        <div className="col-md-3">
                            <div className={`${style.photo}`}>
                                <img src={logo3} alt="" className='w-100' />
                                <div className={`${style.btnn}`}>

                                    <Link to='/communtyCenter'>
                                        <button className='btn btn-outline-light'>VIEW
                                        </button>
                                    </Link>
                                    
                                    <button className='btn btn-outline-light'> <a href="../images/fci1.jpg"></a>
                                        ZOOM</button>
                                </div>
                            </div>
                            <h4>مركز خدمة المجتمع</h4>

                        </div>

                        <div className="col-md-3">
                            <div className={`${style.photo}`}>
                                <img src={logo4} alt="" className='w-100' />
                                <div className={`${style.btnn}`}>
                                    <button className='btn btn-outline-light'> <a href="">VIEW</a>
                                    </button>
                                    <button className='btn btn-outline-light'> <a href="../images/fci1.jpg"></a>
                                        ZOOM</button>
                                </div>
                            </div>
                            <h4>مركز اللغة الانجليزية لأغراض الخاصة</h4>

                        </div>

                        <div className="col-md-3">
                            <div className={`${style.photo}`}>
                                <img src={logo5} alt="" className='w-100' />
                                <div className={`${style.btnn}`}>
                                    <button className='btn btn-outline-light'> <a href="">VIEW</a>
                                    </button>
                                    <button className='btn btn-outline-light'> <a href="../images/fci1.jpg"></a>
                                        ZOOM</button>
                                </div>
                            </div>
                            <h4>وحدة المكتبة الرقمية</h4>

                        </div>

                        <div className="col-md-3">
                            <div className={`${style.photo}`}>
                                <img src={logo6} alt="" className='w-100' />
                                <div className={`${style.btnn}`}>
                                    <button className='btn btn-outline-light btn2'> <a href="">VIEW</a>
                                    </button>
                                    <button className='btn btn-outline-light '> <a href="../images/fci1.jpg"></a>
                                        ZOOM</button>
                                </div>
                            
                            </div>
                            <h4>مكتب تطوير التعليم العالي و التعاون الدولي</h4>

                        </div>
                    </div>


                </div>


            </>
        )
    }
}
