import React, { Component } from 'react'
import info from '../images/info.png'
import style from "./InformationSystems.module.css"
export default class InformationSystems extends Component {
    render() {
        return (
            <>
                <div className={`container px-2  ${style.infosy}`}>
                    <h2 className='infoTech2'><span><img src={info} alt="" className="p-3" /></span> <span>I</span>nformation <span>S</span>ystems</h2>
                    <p>The Department of Information Systems is interested in teaching the fundamentals of information systems, <br />
                         its analysis, design and applications, both current and advanced, and the department is also interested in teaching <br />
                          office automation, database systems of all kinds, data mining, knowledge discovery, and information center management. <br />
                           This is also in addition to selected topics intended to give the department faculty members a quick opportunity to keep <br />
                           pace with modern scientific development by teaching what is new in information systems without waiting for the regulation <br />
                           to be amended. The department is interested in conducting innovative research in the aforementioned fields, whether through <br />
                           the research of faculty members or through postgraduate studies in the specialty of information systems.</p>


                    <a href="http://mu.menofia.edu.eg/FCI/IS/DepSubjects/en" className='p-3'>Program Course</a>
                    <br />
                    <br /><br />
                </div>


            </>
        )
    }
}
