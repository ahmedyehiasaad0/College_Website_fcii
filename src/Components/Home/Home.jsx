import React, { Component } from 'react'
import style from './Home.module.css'

import Layer from '../Layer/Layer'
import Desc from './../Desc/Desc';
import Activites from './../Activites/Activites';
import MyCarousel from './../Carousel/MyCarousel';

export default class Home extends Component {
  render() {
    return (

      <>

        <section className={`  ${style.home}`} id='home'>
          <div className="home">

          </div>

          <MyCarousel />
          <Layer />

        </section>
        <Activites />
        <Desc />


      </>
    )
  }
}
