import React, { Component } from 'react'
import style from './Footer.module.css'
import logo from "../images/footer.png"

import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


export default class Footer extends Component {
  render() {
    return (
      <>
        <section id='footer'>
          <div className={`text-center ${style.footer}`}>
            <div className="row">
              <div className="col-md-4">
                <div className="icons">
                  <Container>
                    <a href="https://www.facebook.com/profile.php?id=100063596096736">
                      <FontAwesomeIcon icon={faFacebook} />

                    </a>

                    <a href="https://twitter.com/AhmedSa78645689?t=ednAGMOczdQ12X4QDSMk8w&amp;s=09">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>


                    <a href="https://www.instagram.com/fci_scu/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.youtube.com/watch?v=1Z6o6oUXnR8">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </Container>
                </div>
              </div>
              <div className="col-md-4">
                <img src={logo} alt="" />
              </div>
              <div className="col-md-4">
                <h3 className=''>Menofia University © 2023 | All rights reserved</h3>
              </div>
            </div>

          </div>

        </section>



      </>
    )
  }
}
