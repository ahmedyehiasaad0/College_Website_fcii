import React, { Component } from 'react'
import info from '../images/info.png'
import style from "./Vision.module.css"
export default class Vision extends Component {
  render() {
    return (
      <>

   <div className={`container px-2  ${style.Vision}`}>
   <h2 className='infoTech2'><span><img src={info} alt="" className="p-3" /></span><span>V</span>ision</h2>
   <p>Developing the educational and research process at Menoufia University and providing a distinct and specialized program that will be the nucleus for developing other academic programs to achieve leadership locally and regionally.</p>


     <br />
                <br /><br />
            </div>


      </>
    )
  }
}
