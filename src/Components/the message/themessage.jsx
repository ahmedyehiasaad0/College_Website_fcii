import React, { Component } from 'react'
import info from '../images/info.png'
import style from "./themessage.module.css"
export default class Themessage extends Component {
    render() {
        return (
            <>


                <div className={`container px-2  ${style.themessage}`}>
                    <h2 className='infoTech2'><span><img src={info} alt="" className="p-3" /></span><span>T</span>he <span>M</span>essage</h2>
                    <p>Preparing a distinguished graduate who is able to compete in the labor market with his high capabilities and skills in various fields Software engineering and information technology for the development of society scientifically, socially and economically</p>


                    <br />
                    <br /><br />
                </div>

            </>
        )
    }
}
