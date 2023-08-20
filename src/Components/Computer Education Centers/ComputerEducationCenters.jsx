import React, { Component } from 'react'
import style from "./ComputerEducationCenters.module.css"
export default class ComputerEducationCenters extends Component {
    render() {
        return (
            <>
                <div className="container compEduCen mt-4 mb-4 ps-5">
                  <h2 className={`${style.fontt}`}>Computer Education Centers</h2>
                    <br />
                    <h6 className={`${style.fonth6}`}>Faculty of Engineering</h6>
                    <h6 className={`${style.fonth6}`}>Faculty of Tourism and Hotels</h6>
                    <h6 className={`${style.fonth6}`}>Faculty of Arts</h6>
                </div>


                



            </>
        )
    }
}
