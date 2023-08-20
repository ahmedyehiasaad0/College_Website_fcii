import React, { Component } from 'react'
import style from "./Location.module.css";
export default class Location extends Component {
    render() {
        return (
            <>
                <div className={`${style.location}`}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className={`${style.formm}`}>
                                <h1 className='mt-3 mb-5'><span>C</span>ontact Us</h1>
                                <input placeholder='Name' type="text"  className='form-control mb-3' />
                                <input placeholder='E-mail' type="email" name='email' className='form-control mb-3' />


                                <input placeholder='Your Phone' type="text" name=' ' className='form-control mt-4 mb-5' />
                                <h2 className='mb-3'>Your Message</h2>
                                <textarea name="text-area" id="" cols="80" rows="10"></textarea>
                                <br />

                                <button type='submit' className='btn btn-outline-danger  mt-5 mb-5 '> Send</button>

                           </div>

                        </div>
                        <div className="col-md-6">
                            <h2 className='mt-4 ms-5'> Fci Map</h2>
                            <hr />
                            <div className="mapp ">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13740.266239963694!2d31.0085187!3d30.5756664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7d6bf14e416e9%3A0xc49ca19e02abe2d2!2z2YPZhNmK2Kkg2KfZhNit2KfYs9io2KfYqiDZiCDYp9mE2YXYudmE2YjZhdin2Kog2KzYp9mF2LnYqSDYp9mE2YXZhtmI2YHZitip!5e0!3m2!1sar!2seg!4v1687604592082!5m2!1sar!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}
