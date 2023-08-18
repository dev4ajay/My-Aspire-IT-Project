import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HiHome } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import React from "react"
function TopNavRes() {
    const [show, setShow] = React.useState(false);
  const [mohit, setMohit] = React.useState("Home About Results");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <div
            className="d-flex p-3"
            style={{ alignItems: "center", gap: "16rem" }}
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
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ background: "#e63430" }} className="mobile_nav">
            <Container style={{ marginTop: "7px" }}>

                <ul className='ul text-white'>      
                <li>
                    <a href="/" className="mmmmmjdf d-flex center_navLink align-items-center mr-0  gap-2 text-white pr-0">
                        {" "}
                        <HiHome  />
                        HOME
                    </a>
                </li>
                    <li>

                        <div className="dropdown">
                            <Link to="/" className="dropbtn text-white center_navLink" style={{ paddingLeft: "12px" }}>
                                {" "}
                                RESULTS
                            </Link>
                            <div className="dropdown-content">

                                <Link to="/engineering" className='center_navLink'> Engineering</Link>
                                <Link to="/medical-Results" className='center_navLink'>Medical</Link>
                                <Link to="/Foundation" className='center_navLink'>Foundation</Link>
                                <Link to="/KVPY" className='center_navLink'>KVPY</Link>
                                <Link to="/Result-NTSE" className='center_navLink'>NTSE</Link>
                            </div>
                        </div>
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
                </ul>

                <Navbar.Toggle  aria-controls="responsive-navbar-nav" className='mobile_navLink' style={{
                    position: "absolute",
                    right: "20px",
                    top: "12px"
                }}
                 />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto mjmjkmj" >
                        <li class="dropdown text-black">
                            <Link to="/courses" class="dropdown-toggle mkmj center_navLink" data-toggle="dropdown">COURSES</Link>
                            <ul class="dropdown-menu multi-level multi-level23 dropdown-content">
                                {/* <li><a href="#">Engineering</a></li> */}
                                <li class="dropdown-submenu">
                                    <a href="#" class="dropdown-toggle mohitkkkk center_navLink" data-toggle="dropdown">Engineering</a>
                                    <ul class="dropdown-menu dfdfdf ">
                                        <li><Link to="/iit-jeet-target " className='center_navLink'>IIT JEE Target</Link></li>
                                        <li><Link to="/iit-jee-crash-courses" className='center_navLink'>IIT JEE Crash Courses</Link></li>
                                        <li><Link to="/Iit-jee-test-series" className='center_navLink'>IIT JEE Test Series</Link></li>
                                        <li><Link to="/KVPYEngineering" className='center_navLink'>KVPY</Link></li>

                                    </ul>
                                </li>
                                <li class="dropdown-submenu">
                                    <a href="#" class="dropdown-toggle mohitkkkk center_navLink" data-toggle="dropdown">Medical</a>

                                    <ul class="dropdown-menu dfdfdf">
                                        <li><Link to="/Neet-target" className='center_navLink'>NEET Target Courses</Link></li>
                                        <li><Link to="/Neet-crash-courses" className='center_navLink'>NEET Crash Courses</Link></li>
                                        <li><Link to="/Neet-test-series" className='center_navLink'>NEET Test Series</Link></li>
                                        <li><Link to="/KVPYMedical" className='center_navLink'>KVPY</Link></li>

                                    </ul>
                                </li>
                                <li class="dropdown-submenu">
                                    <a href="#" class="dropdown-toggle mohitkkkk center_navLink" data-toggle="dropdown">Foundation</a>

                                    <ul class="dropdown-menu dfdfdf">
                                        <li><Link to="/For-class-vi" className='center_navLink'>For Class VI</Link></li>
                                        <li><Link to="/For-class-vii" className='center_navLink'>For Class VII</Link></li>
                                        <li><Link to="/For-class-viii" className='center_navLink'>For Class VIII</Link></li>
                                        {/* <li><Link to="/ForClassIXandX">For Class IX and X</Link></li> */}
                                        <li><Link to="/ForClassX" className='center_navLink'>For class IX and X</Link></li>

                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="dropdown">
                                <Link to="/studentZone" className="dropbtn text-white center_navLink">
                                    STUDENT ZONE{" "}
                                </Link>

                                <div className="dropdown-content center_navLink" style={{ right: "-55px" }}>
                                    <Link to="/studentReport" className='center_navLink'>STUDENT REPORT</Link>
                                    <Link to="/Discipline" className='center_navLink'> DISCIPLINE</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="/Career-Counselling" className='text-white center_navLink'>CARRIER</Link>
                        </li>
                        <li>
                            <div className="dropdown">
                                <Link to="/" className="dropbtn text-white center_navLink">
                                    {" "}
                                    GALLERY
                                </Link>
                                <div className="dropdown-content">

                                    <Link to="/Photos" className='center_navLink'> Photos</Link>
                                    <Link to="/media" className='center_navLink'>Media</Link>
                                    <Link to="/video" className='center_navLink'>Videos
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link to="/ContactUs" className='text-white center_navLink'> CONTACT US</Link>
                        </li>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar></>
        
    );
}

export default TopNavRes;