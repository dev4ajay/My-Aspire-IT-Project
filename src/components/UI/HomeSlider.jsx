import React,{useState} from 'react'
import Slider from "react-slick";
import FirstImage from "../../Assets/img/slider-1.jpg";
import SecondImage from "../../Assets/img/slider-2.jpg";
import ThirdImage from "../../Assets/img/slider-3.jpg";
const HomeSlider = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    prevArrow: <img src={require("../../Assets/img/leftside.png")} className="arrow-icon"></img>,
    infinite: true,
    nextArrow: <img src={require("../../Assets/img/leftside.png")} className="arrow-icon"></img>,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div>
        <div className="kmkm">
        <div>
          <Slider {...settings}>
            <div>
              <img className="d-block w-100" src={FirstImage} alt="First slide" />
            </div>
            <div>
              <img className="d-block w-100" src={SecondImage} alt="First slide" />
            </div>
            <div>
              <img className="d-block w-100" src={ThirdImage} alt="First slide" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HomeSlider