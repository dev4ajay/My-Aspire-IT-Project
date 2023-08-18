import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/main.css";
import classNames from "classnames";
import useSticky from "../UI/useSticky";
import { Link } from "react-router-dom";
import CenterNav from "../UI/CenterNav";
import Navbar2 from "../UI/Navbar2";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MainNav() {
  const navRef = useRef();
  const { sticky, stickyRef } = useSticky();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
    //   <header ref={stickyRef} className={classNames('nav', { sticky })}>
    <>
      <CenterNav />

      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container className="container_navbar">
          <Navbar.Brand>
            {" "}
            <Link to="/">
              <img src={require("../../Assets/img/logo.png")} className="logo_img"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="button_nav"
            style={{
              border: "1px solid black",
              color: "black",
              outline: "none",
            }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <nav ref={navRef} className="navbar_nav">
                {/* <a href="/aboutUs"> ABOUT US </a> */}
                <li className="mainNav">
                  <Navbar2 />
                </li>
                <li className="about_none">
                  <div className="dropdown">
                    <Link onClick={showNavbar} to="/aboutUs" className="ps-0">
                      ABOUT US
                    </Link>
                    <div className="dropdown-content juuu">
                      <Link onClick={showNavbar} to="/introduction">
                        Introduction
                      </Link>
                      <Link onClick={showNavbar} to="/directorMessage">
                        Director Message
                      </Link>
                      <Link onClick={showNavbar} to="/why-choose-Aspire">
                        Why Choose Aspire
                      </Link>
                      <Link onClick={showNavbar} to="/Teaching-Methodology">
                        Teaching Mythology
                      </Link>
                      <Link onClick={showNavbar} to="/reviews">
                        Reviews
                      </Link>
                      {/* <Link onClick={showNavbar} to="/Career-Counselling">Career Counselling</Link> */}
                      <Link onClick={showNavbar} to="/suggestion-feedback">
                        Suggestion & Feedback
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="about_none">
                  <div className="dropdown">
                    <Link onClick={showNavbar} to="/Admission" className="ps-0">
                      ADMISSION
                    </Link>
                    <div
                      className="dropdown-content juuu"
                      style={{ left: "10px" }}
                    >
                      <Link onClick={showNavbar} to="/Admissionrule">
                        Admission Rule
                      </Link>
                      <Link onClick={showNavbar} to="/onlineAdmissiom">
                        Online Admission
                      </Link>
                      <Link onClick={showNavbar} to="/offliceAdmissiom">
                        Offline Admission
                      </Link>
                      <Link onClick={showNavbar} to="/Feedepositionmode">
                        Fee Deposit Mode
                      </Link>
                      <Link onClick={showNavbar} to="/FEESTRUCTURE">
                        Fee Structure
                      </Link>
                    </div>
                  </div>
                </li>
                <Link onClick={showNavbar} to="/boh" className="ps-0">
                  {" "}
                  BOH
                </Link>
                <br />
                <Link onClick={showNavbar} to="/campus-life" className="ps-0">
                  CAMPUS LIFE
                </Link>
                <br />
                <Link onClick={showNavbar} to="/events" className="ps-0">
                  EVENTS
                </Link>
                <br />
                <Link onClick={showNavbar} to="/alumni" className="ps-0">
                  {" "}
                  AlUMNI
                </Link>
                <br />
              </nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

    // </header>
  );
}

export default MainNav;
