import React, { useState,useRef } from "react";
import { HiHome } from "react-icons/hi";
import { IoEarth } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import Accordion2 from "./Accordion2.jsx";
import classNames from 'classnames';
import useSticky from '../UI/useSticky';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MainNav from "../Header/MainNav.jsx";
import TopNavRes from "./TopNavRes.jsx";
// import "../Header/Styles/main.css"
const CenterNav = () => {
  const [show, setShow] = useState(false);
  const [mohit, setMohit] = useState("Home About Results");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <div
            className="d-flex p-3"
            style={{ alignItems: "center", gap: "17rem" }}
          >
            <Modal.Title>APPLY ONLINE</Modal.Title>
            <GrClose onClick={handleClose} style={{ cursor: "pointer" }} />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <Link to="/Super-20" className="text-decoration-none btn_green" onClick={handleClose}>
              SUPER 20
            </Link>
            <a href="/" className="text-decoration-none btn_green">
              BRAIN OF HIMACHAL
            </a>
            <Link to="/contactUs" className="text-decoration-none btn_green" onClick={handleClose}>
              JOIN NOW
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      <section className="CenterNav">
      <div className="container">
          <div className="row" style={{width:"102%"}}>
            <div className="d-flex justify-between">
              <div>
                <ul className="ul"  style={{display:"flex"}}>
                  <li>
                    <a href="/" className="mmmmmjdf d-flex align-items-center">
                      {" "}
                      <HiHome />
                      HOME
                    </a>
                  </li>
                  <li>

                    <div className="dropdown">
                      <Link to="/" className="dropbtn" style={{paddingLeft:"12px"}}>
                        {" "}
                        RESULTS
                      </Link>
                      <div className="dropdown-content">

                        <Link to="/engineering"> Engineering</Link>
                        <Link to="/medical-Results">Medical</Link>
                        <Link to="/Foundation">Foundation</Link>
                        <Link to="/KVPY">KVPY</Link>
                        <Link to="/Result-NTSE">NTSE</Link>
                      </div>
                    </div>
                  </li>
                  <li className="Mohit_m">



                    <li class="dropdown text-black">
                      <Link to="/courses" class="dropdown-toggle" data-toggle="dropdown">COURSES</Link>
                      <ul class="dropdown-menu multi-level dropdown-content">
                        {/* <li><a href="#">Engineering</a></li> */}
                        <li class="dropdown-submenu">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Engineering</a>
                          <ul class="dropdown-menu">
                            <li><Link to="/iit-jeet-target">IIT JEE Target</Link></li>
                            <li><Link to="/iit-jee-crash-courses">IIT JEE Crash Courses</Link></li>
                            <li><Link to="/Iit-jee-test-series">IIT JEE Test Series</Link></li>
                            <li><Link to="/KVPYEngineering">KVPY</Link></li>

                          </ul>
                        </li>
                        <li class="dropdown-submenu">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Medical</a>

                          <ul class="dropdown-menu">
                            <li><Link to="/Neet-target">NEET Target Courses</Link></li>
                            <li><Link to="/Neet-crash-courses">NEET Crash Courses</Link></li>
                            <li><Link to="/Neet-test-series">NEET Test Series</Link></li>
                            <li><Link to="/KVPYMedical">KVPY</Link></li>

                          </ul>
                        </li>
                        <li class="dropdown-submenu">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Foundation</a>

                          <ul class="dropdown-menu">
                            <li><Link to="/For-class-vi">For Class VI</Link></li>
                            <li><Link to="/For-class-vii">For Class VII</Link></li>
                            <li><Link to="/For-class-viii">For Class VIII</Link></li>
                            {/* <li><Link to="/ForClassIXandX">For Class IX and X</Link></li> */}
                            <li><Link to="/ForClassX">For class IX and X</Link></li>

                          </ul>
                        </li>
                      </ul>
                    </li>
                  </li>
                  <li>
                    <div className="dropdown">
                      <Link to="/studentZone" className="dropbtn">
                        STUDENT ZONE{" "}
                      </Link>

                      <div className="dropdown-content" style={{ right: "-55px" }}>
                        <Link to="/studentReport">STUDENT REPORT</Link>
                        <Link to="/Discipline"> DISCIPLINE</Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/Career-Counselling">CARRIER</Link>
                  </li>
                  <li>
                    <div className="dropdown">
                      <Link to="/" className="dropbtn">
                        {" "}
                        GALLERY
                      </Link>
                      <div className="dropdown-content">

                        <Link to="/Photos"> Photos</Link>
                        <Link to="/media">Media</Link>
                        <Link to="/video">Videos
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link to="/ContactUs"> CONTACT US</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="ul">
                  <li className="mohit_P">
                    <Link to="/ENQUIRY"> ENQUIRY</Link>
                  </li>
                  <li className="onlineapply">
                    <button
                      className="d-flex"
                      onClick={handleShow}
                      style={{
                        color: "snow",
                        borderRadius: "5px",
                        border: "none",
                      }}
                    >
                      {" "}
                      <span className="applyonline">APPLY ONLINE</span>
                    </button>
                  
                  </li>
                  {/* <li>
         <TopNavRes />
                  </li> */}
                  {/* <li className="onlineapply"> <button
                      className="d-flex"
                      style={{
                        color: "snow",
                        borderRadius: "5px",
                        border: "none",
                      }}
                    >
                      {" "}
                      <span className="login">JOIN NOW</span>
                    </button></li> */}
                </ul>
              </div>
            </div>
          </div>
        
        </div>
       
   {/* <MainNav /> */}
      </section>
      
    </>
  );
};

export default CenterNav;
