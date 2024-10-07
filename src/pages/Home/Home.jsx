import React, { Component } from 'react';
import Appbar from '../../components/Appbar/Appbar';
import s1 from '../../Images/slider/s1.jpg'
import s2 from '../../Images/slider/s2.jpg'
import s3 from '../../Images/slider/s3.jpg'
import DigikalaCategories from './DigikalaCategories';
import Footer from '../../components/Footer'

class Home_page extends Component {

    render() {
        return (
            <>
                <Appbar />
                <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner w-100">
                        <div className="carousel-item w-100">
                            <img src={s2} className="d-block w-100" />
                        </div>
                        <div className="carousel-item active w-100">
                            <img src={s3} className="d-block w-100" />
                        </div>
                        <div className="carousel-item w-100">
                            <img src={s1} className="d-block w-100" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <DigikalaCategories/>
                <Footer/>
            </>
        );
    }
}


export default Home_page;
