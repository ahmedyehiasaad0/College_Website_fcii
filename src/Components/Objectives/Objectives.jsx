import React, { Component } from 'react'
import info from '../images/info.png'
import style from "./Objectives.module.css"
export default class Objectives extends Component {
  render() {
    return (
      <>
            <div className={`container px-2  ${style.Objectives}`}>
                <h2 className='infoTech2'><span><img src={info} alt="" className="p-3" /></span><span>O</span>bjectives</h2>
                <p>The program aims to graduate a specialist in software engineering who has the necessary skills in modern software and adapting it to various uses and applications in various fields as
                     the study system and the contents of the offered courses and keeping pace with their counterparts in leading universities around the world ensures that students are provided with this
                      program with innovation and expression skills, planning and follow-up capabilities, and an environmental and societal sense. With the possibility of exploiting and developing new technology 
                      in the fields of advanced software engineering, the proposed system is similar to the advanced programs in famous international institutes and universities, which could lead to the graduation
                       of specialists in software engineering with different capabilities and with a strong academic and professional background.
<br /><br />
                    Program Goals
                    <br /> <br />
                    1- Preparing specialized and highly qualified human cadres in software and its various fields, which include software engineering - managing information systems projects - developing and integrating software - in order to prepare graduates with a high ability to compete in the local, regional and global markets in these new specializations.
<br /><br />
                    2- Providing a high-quality program that includes self-learning and creative thinking with the application of performance appraisal and quality assurance systems
<br /><br />
                    3- Providing more space for students for practical exercises that keep pace with the requirements of the labor market
<br /><br />
                    4- Providing the opportunity to distinguish between the different capabilities of students and enabling the distinguished among them to achieve their scientific aspirations
</p>
                <br />
                <br /><br />
            </div>
      </>
    )
  }
}
