import React, { Component } from 'react'

import style from './Desc.module.css'
import logo1 from "../images/bg1.jpeg"

export default class Desc extends Component {
    render() {
        return (
            <>
                <section id="desc">
                    <div className={`container   ${style.desc}`}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="descText w-100 p-3 ms-3">
                                    <h2><span>A</span>bout <span>M</span>enofia <span>F</span>CI <span>U</span>niversity</h2>
                                    <br />
                                    <p className='p-3'>The Faculty of Computers and Information at Menoufia University is considered one of the most important faculties of Menoufia University at the present time and one of the leading faculties in the study of computers and information in Egypt and the Arab region. A selection of the best computer professors in Egypt, in addition to the leadership of the college teams in competitions at the level of the Arab Republic of Egypt and the Middle East and North Africa region over the past years</p>
                                    <a href='https://ar.wikipedia.org/wiki/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%85%D9%86%D9%88%D9%81%D9%8A%D8%A9' target='_blank'>
                                        <button className='btn btn-outline-info'>Read More About Menofia University  </button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${style.descImg} w-75 mt-5 ms-5`}>
                                    <img src={logo1} alt="" className='w-100 ps-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
