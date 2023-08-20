import { Carousel } from 'react-bootstrap';
import logo1 from "../images/bg1.jpeg"
import logo2 from "../images/1.jpeg"
import logo3 from "../images/bg3.jpg"
import logo4 from "../images/2.jpeg"
function MyCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo3}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo4}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
export default MyCarousel;