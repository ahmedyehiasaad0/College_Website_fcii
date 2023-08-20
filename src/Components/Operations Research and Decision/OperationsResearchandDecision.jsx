import React, { Component } from 'react'
import style from './OperatioResearch.module.css'
                 
import info from "../images/info.png"

export default class OperationsResearchandDecision extends Component {
    render() {
        return (
            <>
                <div className={`container px-2  ${style.operationres}`}>
                    <h2><span><img src={info} alt="" className="p-3" /></span><span>O</span>perations <span>R</span>esearch <span>A</span>nd <span>D</span>ecision </h2>
                    <p>The Operations Research and Decision Support Department is concerned with teaching the basics and concepts of systems science and operations research. <br />
                        It also teaches linear and non-linear programming, project planning, queuing systems, inventory and production control. The department is particularly <br />
                        interested in the sciences, tools and methods of decision support and their various applications in politics, economics and sociology, in addition to <br />
                        selected topics intended to give the department's faculty members a quick opportunity to keep pace with modern scientific development by teaching what <br />
                        is new in the specialization without waiting for the regulation amendment. The department is interested in conducting innovative research in the aforementioned <br />
                         fields, whether through the research of faculty members or through graduate studies in the field of operations research and decision support.</p>


                    <a href="http://mu.menofia.edu.eg/FCI/OR/DepSubjects/ar" className='p-3'>Program Course</a>
                    <br />
                    <br /><br />
                </div>


            </>
        )
    }
}
