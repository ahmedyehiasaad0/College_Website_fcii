import React, { Component } from 'react'
import imge from "../images/univ-comm (1).webp"
import imge2 from "../images/centers-units.webp"

import style from "./Communityservices.module.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default class Communityservices extends Component {
  render() {
    return (
      <>


            <div className="container mt-5 mb-5 align-content-center">
                <h2 className={`p-4  ${style.commh2}`}><span>C</span>ommunity <span>S</span>ervices</h2>

                <div className="row">
                    <div className="col-md-3">
                        <div className={`   ${style.CommServices}`}>
                            <Link to="/universitySociety">
                                <img src={imge} alt="" className='w-50 h-50 pb-4' />

                            </Link>
                            <div className="caption align-item-center p-4">
                                <Link to="/universitySociety">
                                    <h4 className='p-3'>University & Society of menofia</h4>
                                </Link>

                            </div>
                            
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className={`   ${style.CommServices}`}>
                            <Link to="/centerUnits">
                                <img src={imge2} alt="" className='w-50 h-50 pb-4' />

                            </Link>
                            <div className="caption align-content-center p-4">
                                <Link to="/centerUnits">
                                    <h4 className='p-3'>Centers Units at fci</h4>
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>
            </div>



      </>
    )
  }
}
