import React from "react";
import Carousel from "react-bootstrap/Carousel";

const AspireChamp = () => { React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
  return (
    <section className="mt-5">
      <div className="container">
        <h2
          className="text-uppercase mt-0 line-height-1 h4_our mt-3 mb-3 "
          style={{ fontWeight: "bold" }}
        >
          CURRENT NEWS
        </h2>
      </div>
      <div className="container shadow">
        <div className="row">
          <div className="col-md-4">
            <div>
              <img
                src={require("../../Assets/img/boh-1.png")}
                width="350px"
              ></img>
            </div>
          </div>
          <div className="col-md-8">
            <Carousel slide={false}>
              <Carousel.Item>
                <h3 className="text-center mb-3">Aspire Champ</h3>
                <img
                  className="d-block w-100"
                  src={require("../../Assets/img/boh-2.png")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <h3 className="text-center mb-3">
                  India’s Biggest Talent Encouragement Exam
                </h3>
                <img
                  className="d-block w-100"
                  src={require("../../Assets/img/boh-2.png")}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspireChamp;
