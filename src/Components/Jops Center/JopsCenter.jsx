import React, { Component } from 'react'
import style from './JopsCenter.module.css';
import logo from '../images/fci2.jpg'
export default class JopsCenter extends Component {
    render() {
        return (
            <>
                <div className={` ${style.item}`}>
                    <div className="row">
                        <div className="col-md-6 my-5 px-3">
                            <div className="crad">
                                <div className={` w-25 ${style.photo}`}>
                                    <img src={logo} alt="" srcset="" className='w-100' />
                                </div>
                                <h4>Date</h4>
                                <p>10 يناير 2021</p>
                                <hr />
                                <h4>Tags</h4>
                                <p>تدريبى و خدمى</p>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <h2 className='mt-5 pe-5 text-primary'> مركز التطوير الوظيفى وريادة الأعمال CDCE</h2>
                            <p className='mt-2 pe-5'>الكلية التابعة لها : الإدارة العامة لجامعةالمنوفية</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
