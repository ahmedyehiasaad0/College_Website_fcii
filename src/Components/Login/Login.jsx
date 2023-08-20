import React, { Component } from 'react'
import style from './Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default class Login extends Component {
  render() {
    return (
      <>
        <div className={`${style.continer}`}>
          <div className={`${style.login}`}>
            <h1>Login</h1>
            <a href="https://www.facebook.com/profile.php?id=100063596096736">
              <FontAwesomeIcon className='mb-5' icon={faFacebook} />
            </a>
            <a href="https://twitter.com/AhmedSa78645689?t=ednAGMOczdQ12X4QDSMk8w&amp;s=09">
              <FontAwesomeIcon className='mb-5' icon={faTwitter} />
            </a>
            <br />
            <input  placeholder='E-mail' type="email" name='email' className='form-control mb-3'  />
            <input placeholder='Password' type="password" name='password ' className='form-control mt-4' />
            <button type='submit' className='btn btn-outline-info  mt-5'> Login</button>
          </div>
        </div>
      </>
    )
  }
}
