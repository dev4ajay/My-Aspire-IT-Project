import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Course from "../components/UI/Course";
import GlobalStudies from "../components/UI/GlobalStudies";
import HomeSlider from "../components/UI/HomeSlider";
import SecSlider from "../components/UI/SecSlider";
import KnowAbout from "../components/UI/KnowAbout";
import EventsAt from "../components/UI/EventsAt";
import ALLENChamp from "../components/UI/ALLENChamp";
import { AiOutlineClose } from "react-icons/ai";
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
import { Link } from "react-router-dom";
const Home = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, [80000]);
  }, [show]);
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
  <Navbar />
      <Modal show={show} onHide={handleClose} className="modal-300">
        <Modal.Header>
          <AiOutlineClose
            className="btn-close"
            style={{ cursor: "pointer" }}
            onClick={handleClose}
          />
          <Modal.Title>
            <img
              src={require("../Assets/img/pop-up.jpg")}
              style={{
                borderRadius: "5px",
              }}
            ></img>
            <div className="d-flex align-items-center mt-3 justify-content-center mb-3 ms-2">
             
             
              <h5
                style={{ fontSize: "17px", fontWeight: "bold", color: " red",textAlign:"center" }}
              >
                {" "}
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSfnQvVTkWKdxX2P9z8Knc33L96bidiorgfrelgqGp1YEWyl0w/viewform?usp=sf_link
"
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    color: " red",
                    textDecoration: "none",
                  }}
                  target="block"
                >
                  REGISTER NOW
                </Link>
              </h5>
            </div>
          </Modal.Title>
        </Modal.Header>
      </Modal>
      <HomeSlider />
      <SecSlider />
      <Course />
      {/* <MakeYourKid /> */}
      <GlobalStudies />
      <KnowAbout />
      <ALLENChamp />
      <EventsAt />
      {/* <AlumniPortal /> */}
      {/* <Accordion /> */}
      {/* <Admission /> */}
      {/* <NewsLetter /> */}
      <Footer />
    </>
  );
};

export default Home;
