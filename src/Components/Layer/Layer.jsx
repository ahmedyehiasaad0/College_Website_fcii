import React, { Component } from 'react'
import style from './Layer.module.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default class Layer extends Component {
    render() {
        return (
            <>
                <div className={`${style.layer}`}>
                    <div className="icons-ico">
                        <div className="icoo ico-face">
                            <Container>
                                <a href="https://www.facebook.com/profile.php?id=100063596096736">
                                    <FontAwesomeIcon icon={faFacebook} className="faw" />

                                </a>
                            </Container>
                        </div>
                        <div className="icoo ico-yout">
                            <Container>
                                <a href="https://www.youtube.com/channel/UCcoPxoor5XEnac34BwEI_9w">
                                    <span>
                                        <FontAwesomeIcon icon={faYoutube} className="faw" />
                                    </span>
                                </a>
                            </Container>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
