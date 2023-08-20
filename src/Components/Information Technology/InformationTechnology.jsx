import React, { Component } from 'react'
import style from './InformationTechnology.module.css'
import info from "../images/info.png"
export default class InformationTechnology extends Component {
    render() {
        return (
            <>
                <div className={`container px-2  ${style.infoTec}`}>
                    <h2 className='infoTech2'><span><img src={info} alt="" className="p-3" /></span><span>I</span>nformation <span>T</span>echnology</h2>
                    <p>The Department of Information Technology is interested in teaching fundamentals of information technology,<br />
                         recognition of patterns, letters and software, digital signal processing, computer vision, multimedia,<br />
                          information engineering and information networks. This is also in addition to selected topics intended <br /> 
                          to give the department faculty members a quick opportunity to keep pace with modern scientific development by <br />
                          teaching what is new in information technology systems without waiting for the regulation to be amended.</p>


                    <a href="http://mu.menofia.edu.eg/fci/IT/DepSubjects/en" className='p-3'>Program Course</a>
                    <br />
                    <br /><br />
                </div>



            </>
        )
    }
}
