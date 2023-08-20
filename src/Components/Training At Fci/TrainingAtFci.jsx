import React, { Component } from 'react'
import style from "./TrainingAtFci.module.css"
export default class TrainingAtFci extends Component {
  render() {
    return (
      <>
            <div className={`container  ${style.TrainingAtFci}`}>
                <h2 className='mb-2'>Training At Fci</h2>
                <h4 mb-2>Training Centers at Menofia University</h4>
                <br />
                <a href="https://www.iti.gov.eg/iti/home">

                    <h5> Faculty Leadership Development Center </h5>

                </a>
                <br />
                <p>We conduct regular focus groups with industry leaders to better understand existing and future market demand, <br />
                    and provide training to meet this demand. In addition, our yearly job fair provides us with updated insights <br />
                    of what's needed today and what's missing and expected for tomorrow.</p>


            </div>



      </>
    )
  }
}
