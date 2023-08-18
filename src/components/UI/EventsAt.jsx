import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "./data copy 2";
import imgGirl from "../../Assets/img/intellibrain-image01.png";
import { Link } from "react-router-dom";

function EventsAt() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <div className="moo p-30">
      <div className="container">
        <h1 className="mb-3" style={{ fontWeight: "bold" }}>
          Features
        </h1>
        
        <div className="row gap-4 d-flex justify-content-center">
          {dataDigitalBestSeller.map((item) => (
              <div className="card mohit col-lg-2 col-md-6">
              <div className="card-top">
                <img
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
               <h1><Link to={item.link} className="text-danger">{item.title}</Link></h1> 
              </div>
            </div>
          ))}
          </div>
        
      </div>
    </div>
  );
}

export default EventsAt;
