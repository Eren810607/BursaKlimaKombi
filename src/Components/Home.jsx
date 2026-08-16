import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";

import Sliderimage1 from "../images/klima_slider1.png";
import Sliderimage2 from "../images/klima_slider2.png";

import "../App.css";

import "../css/home.css";

import HomeCards from "../Components/HomeCards";
import HomeTexts from "../Components/HomeTexts";


function Home() {

    const whatsappMessage = "Merhaba, Bursa Klima Kombi hakkında bilgi almak istiyorum.";


    const Slider = SliderImport.default ?? SliderImport;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>






            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img
                            className="slider-image"
                            src={Sliderimage1}
                            alt="Slider 1"
                        />
                    </div>

                    <div>
                        <img
                            className="slider-image"
                            src={Sliderimage2}
                            alt="Slider 2"
                        />
                    </div>
                </Slider>
            </div>


            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <h1 className="HomepageTitle">Bursa Klima Kombi</h1>
                <hr className="HomeHr" />
            </div>


            <div className='homeCard'>
                <HomeCards />
            </div>


            <div>
                <HomeTexts />
            </div>



        </div>
    )
}

export default Home