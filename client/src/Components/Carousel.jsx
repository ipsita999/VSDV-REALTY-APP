import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/Carousel.css'

class Carousel extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            //   centerPadding: true
        };
        return (
            < div className="carousel-container">
                <div className="brand-statement">
                    <div className='header'>


                        <h1 className="title">
                            VSDV REALTY</h1>
                        <h1 className="title2">
                            We aim to help you find the perfect property. Our team of agents have expertise in commercial and residential real estate and work with our strategic partners to ensure your real estate journey is hassle free. </h1>

                    </div>
                </div>
                <Slider {...settings}>
                    <div className="img-container">
                        <h3> <img className="slide1" src="https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" /></h3>
                    </div>
                    <div className="img-container">
                        <h3><img className="slide1" src="https://images.unsplash.com/photo-1467987506553-8f3916508521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" /> </h3>
                    </div>
                    <div className="img-container">
                        <h3><img className="slide1" src="https://images.unsplash.com/photo-1568634143420-dc5368d74e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" /></h3>
                    </div>
                    <div className="img-container">
                        <h3><img className="slide1" src="https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" /></h3>
                    </div>
                    <div className="img-container">
                        <h3><img className="slide1" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" /></h3>
                    </div>
                    <div className="img-container">
                        <h3><img className="slide1" src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" /></h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Carousel