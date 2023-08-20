import React, { Component } from 'react'
import style from "./Serviceprojects.module.css"
export default class Serviceprojects extends Component {
    render() {
        return (
            <>
                <div className={`  ${style.serviceprojects}`}>
                    <h3>Service projects of Menofia University</h3>
                    <br />
                    <p>The Department of Sculpture in the Faculty of fine Arts participated with the following projects for community service and environment development:</p>
                    <br />
                    <ul>
                        <li>
                            <h5>Borg El Arab road with sculpture arts of students' graduation projects through the last five years.</h5>
                        </li>
                        <li>
                            <h5>Enhancement of El Mahmoudia canal.</h5>
                        </li>
                        <li>
                            <h5>Enhancement Red Sea governorate with graduation projects.</h5>
                        </li>
                        <li>
                            <h5>Design and implement sculpture model in Ahmed Zwiel square.</h5>
                        </li> 
                    </ul>
                    <p>There are some production units in the university</p>
                    <br />
                    <h4>The general administration of environmental projects</h4>
                    <br />
                    <h4>Research and environment projects</h4>
                </div>
            </>
        )
    }
}
