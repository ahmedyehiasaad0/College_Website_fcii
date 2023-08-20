import React, { Component } from 'react'
import style from "./UniversitySociety.module.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default class UniversitySociety extends Component {
  render() {
    return (
      <>
        <div className={`container ${style.UniversitySociety}`}>
          <h2><span>U</span>niversity <span>&</span> <span>S</span>ociety <span>O</span>f <span>M</span>enofia</h2>
          <div className="row">
            <div className={`col-md-4 ${style.item}`}>
                <div className="textt ">
                <Link to="/serviceprojects">
                  <h3>Service projects</h3>
                </Link>
                </div>
            </div>
            <div className={`col-md-4 ${style.item}`}>
              <div className="textt ">
                <Link to="/computerEducationCenters">
                  <h3>Computer Education Centers</h3>
                </Link>
              </div>
            </div>
            <div className={`col-md-4 ${style.item}`}>
              <div className="textt ">
                <Link to="/trainingAtFci">
                  <h3>Training At Fci</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
