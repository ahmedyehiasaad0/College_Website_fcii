import React, { Component } from 'react'
import info from '../images/info.png'
import style from "./ComputerScience.module.css"

export default class ComputerScience extends Component {
  render() {
    return (
      <>
            <div className={`container px-2  ${style.comput}`}>
                <h2 className='infoTech2'><span><img src={info} alt="" className="p-3" /></span><span>C</span>omputer <span>S</span>cience</h2>
                <p>This department is concerned with teaching the basics of computer science and hardware, and what is required from the study of logic design and computer mathematics. <br />
                     The department is also concerned with teaching software of all kinds. Be it system software or application software, as well as computer networks and artificial intelligence. <br />
                      This is in addition to selected topics intended to give the department faculty members a quick opportunity to keep pace with modern scientific development by teaching what is <br />
                      new in computer science without waiting for the regulation to be amended. The department is interested in conducting innovative research in the aforementioned fields, whether <br />
                      through the research of faculty members or through postgraduate studies in the specialization of computer science.</p>


                <a href="http://mu.menofia.edu.eg/fci/CS/DepSubjects/en" className='p-3'>Program Course</a>
                <br />
                <br /><br />
            </div>

      </>
    )
  }
}
