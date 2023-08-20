import React, { Component } from 'react'
import logo from '../images/h1.jpg'
import style from './Healthcare.module.css'
import { Link } from 'react-router-dom';
export default class Healthcare extends Component {
    render() {
        return (
            <>
                <div className={`container ${style.healthcare}`}>
                    <h1 className=''>الرعاية الصحيـة</h1>
                    <div className="bg mb-5">
                        <img src="https://www.asu.edu.eg/images/healthcare.jpg" alt="" srcset="" className='w-full' />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hospitalCaption">
                                <h2>مستشفيات جامعه المنوفيه</h2>
                                <p>تقدم مستشفيات جامعه المنوفيه أفضل رعاية طبية لتلبية الاحتياجات المختلفة لكل مريض على حدى، حيث يقوم نهجنا متعدد التخصصات للرعاية الصحية بالتنسيق بين الخبرة و التكنولوجيا الأكثر تقدمًا لتحقيق أفضل النتائج الممكنة.كما يتم توفير الرعاية الصحية للمجتمع المصري بصفة عامة و مجتمع جامعه المنوفيه بصفة خاصة (و يشمل أعضاء هيئة التدريس بالجامعة – و الطلبة و موظفي الجامعة)على أن تكون الرعاية متكاملة و على أعلى مستوى من الجودةو بأحدث الوسائل.
                                </p>
                                <Link to='/hospitals'>
                                    <button type="button" className='btn btn-outline-warning'> معرفه المزيد</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hosptal">
                                <img src={logo} alt="" srcset="" className='w-100 p-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
