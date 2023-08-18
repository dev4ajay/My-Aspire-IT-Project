import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "./data copy";
import imgGirl from "../../Assets/img/intellibrain-image01.png";
const AlumniPortal = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
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
    <section style={{ backgroundColor: "#E5E5E5", marginTop: "2rem" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ paddingTop: "2rem" }}>Aspire Alumni Portal</h2>
            <p>
              <b>
                Reconnect and experience the power of togetherness. Stay
                Connected!!
              </b>
            </p>
            <p>
              Welcome to our online platform that will facilitate connections
              and keep you connected to every Aspire alumni, no matter where you
              are.
            </p>
            <button className="join_us">Join Us !</button>
          </div>
          <div className="col-md-6 p-30">
            <div className="moo">
              <Slider {...settings}>
                {dataDigitalBestSeller.map((item) => (
                  <div
                    className="card mere"
                    // style={{ minHeight: "200px", padding: "0px" }}
                  >
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
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniPortal;
