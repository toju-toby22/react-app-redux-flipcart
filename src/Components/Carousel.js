import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import slide1 from "../Assets/slide1.jpeg";
import slide2 from "../Assets/slide2.jpg";
import slide3 from "../Assets/slide3.jpg";

const Carousel = () => {
    return (
         <div style={{margin: "10px"}}>
                <Slider autoplay={true}>

                        <div>
                            <img className="slide" src={slide1} alt=""/>
                        </div>


                        <div>
                            <img className="slide" src={slide2} alt=""/>
                        </div>


                        <div>
                            <img className="slide" src={slide3} alt=""/>
                        </div>
                </Slider>
        </div>
    );
   
}
export default Carousel;