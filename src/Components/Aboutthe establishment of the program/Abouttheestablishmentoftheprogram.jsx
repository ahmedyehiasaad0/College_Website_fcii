import React, { Component } from 'react'
import info from '../images/info.png'
import style from "./Abouttheestablishmentoftheprogram.module.css"
export default class Abouttheestablishmentoftheprogram extends Component {
  render() {
    return (
      <>

            <div className={`container px-2  ${style.aboutestab}`}>
                <h2 className='infoTech2'><span><img src={info} alt="" className="p-3" /></span><span>A</span>bout <span>T</span>he <span>E</span>stablishment <span>O</span>f <span>T</span>he <span>P</span>rogram</h2>
                <p>In its session No. (4), held on December 16, 2017, <br /> <br />

                    the College Board approved the launch of the software engineering program with the credit hour system to be added to the Bachelor’s list in the academic year 2017/2018,<br /> <br />

                    and the implementation of the regulations for the software engineering program at the College of Computers and Information - Menoufia University, in the College Board On the <br /> <br /> approval of the Menoufia University Council in its session on 27/2/2017. <br /> <br />

                    And the approval of the Committee of the Computer Science and Informatics Sector on the program at its meeting on 9/8/2017 And the approval of the Supreme Council of <br /> <br /> Universities to approve the program at its session on 19/8/2017. <br /> <br />

                    Then Ministerial Resolution No. (5218) was issued on 10/19/2017 approving the amendment of the internal regulations for the undergraduate stage to add the software <br /> <br /> engineering program and the application of the program's regulations The program was opened in the second semester of the 2017-2018 academic year</p>


                <br />
                <br /><br />
            </div>



      </>
    )
  }
}
