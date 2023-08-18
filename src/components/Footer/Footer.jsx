import React from "react";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TfiMobile } from "react-icons/tfi";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRssSquare,
  FaPinterest,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { GoMail } from "react-icons/go";
const Footer = () => { React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
  return (
    <footer
      id="footer"
      className="footer footer-section pb-0"
      data-bg-img="images/footer-bg.png"
      data-bg-color="#25272e"
    >
      <div className="container pt-90">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <p className="text-white heading_nf">
                {" "}
                <b>About Us</b>
              </p>
              <ul
                className="f_links"
                style={{ fontSize: "13px", listStyle: "disc" }}
              >      
                      
                <li><Link to="/introduction">Introduction</Link></li>
                <li><Link to="/directorMessage">Director Message</Link></li>
                <li><Link to="/why-choose-Aspire">Why Choose Aspire</Link></li>
                <li><Link to="/Teaching-Methodology">Teaching Mythology</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                {/* <li><Link to="/Career-Counselling">Career Counselling</Link></li> */}
                <li><Link to="/suggestion-feedback">Suggestion & Feedback</Link></li>
             
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <p className="text-white heading_nf">
                <b>Courses</b>{" "}
              </p>
              <ul
                className="f_links"
                style={{ fontSize: "13px", listStyle: "disc" }}
              >
                <li><Link to="/Neettwoyears">Engineering</Link></li>
                <li><Link to='/Iitjeetwoyears'>Medical</Link> </li>
                <li><Link to="/Foundation">Foundation</Link></li>
                {/* <li>KVPY</li>
                <li>NTSE</li> */}
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <p className="text-white heading_nf">
                <b>Results</b>{" "}
              </p>
              <ul
                className="f_links"
                style={{ fontSize: "13px", listStyle: "disc" }}
              >
                <li><Link to="/engineering">Engineering</Link></li>
                <li><Link to='/medical-Results'>Medical</Link> </li>
                <li><Link to="/Foundation">Foundation</Link> </li>
                <li><Link to="/KVPY">KVPY</Link></li>
                <li><Link to="/Result-NTSE">NTSE</Link></li>
                {/* <li> Olympiad, NTSE, KVPY, Scholarship etc</li> */}
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <p className="text-white heading_nf">
                <b>Student Zone</b>
              </p>
              <ul
                className="f_links"
                style={{ fontSize: "13px", listStyle: "disc" }}
              >
              
                {/* <li>Admission</li> */}
                {/* <li>Admission Rule</li> */}
                {/* <li>Online Admission</li> */}
                {/* <li>Offline Admission</li> */}
                {/* <li>Fee Deposit Mode</li> */}
                {/* <li>Fee Structure</li> */}
                <li><Link to="/studentReport">Student Report</Link></li>
                <li><Link to="/Discipline">Discipline</Link> </li>
                {/* <li>Boards</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="horizontal-contact-widget mt-30 pt-30 text-center">
              <div className="col-md-3 mt-4" style={{    textAlign: "left",
    padding: "0"}}>
                <div>
                  <img src={require("../../Assets/img/logo Footer.png")}></img>
                </div>
              </div>
              <div className="col-md-3 d-flex mt-4">
                <div>
                  <HiBuildingOffice2
                    style={{
                      fontSize: "55px",
                      color: "white",
                      marginRight: "1rem",
                    }}
                  />
                </div>
                <div className="text-start footer_contact">
                  <span>HEAD OFFICE</span>
                  <p>
                  Aspire Academy, Near HDFC Bank Phase-III BCS New Shimla-171009 Himachal Pradesh
                  </p>
                </div>
              </div>
              <div className="col-md-3 d-flex mt-4">
                <div>
                  <TfiMobile
                    style={{
                      fontSize: "55px",
                      color: "white",
                      marginRight: "1rem",
                    }}
                  />
                </div>
                <div className="text-start footer_contact">
                  <span>Call Us</span>
                  <p>+91-9816623676, +91-177-2673990</p>
                </div>
              </div>
              <div className="col-md-3 d-flex mt-4">
                <div>
                  <GoMail
                    style={{
                      fontSize: "55px",
                      color: "white",
                      marginRight: "1rem",
                    }}
                  />
                </div>
                <div className="text-start footer_contact">
                  <span>Message</span>
                  <p>manager@aspireiit.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: "black", borderTop: "2px solid" }} />

      <div className="container text-center text-white">
        <div className="row">
          <div>
            <h4>ASPIRE CENTER</h4>
            <div className="d-flex gap-2 nmnmn">
              {" "}
              <p>Shimla</p>
              <p> Una</p>
              <p>Hamirpur </p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: "white" }} />
      <div className="copyright-section">
        <div className="container">
          <div className="row">
            <div className="footer-copyright col-md-6">
              <div className="col-md-4 gap-2 d-flex ">
                <Link to="https://www.instagram.com/aspireiit_medical/" className="text-white kumar">
                  <FaInstagram />
                </Link>
                <Link to="https://www.facebook.com/BrainofHimachal/?fref=ts" className="text-white kumar">
                  <FaFacebookF />
                </Link>
                <Link to="https://mobile.twitter.com/aspire_iit" className="text-white kumar">
                  <FaTwitter />
                </Link>
                <Link to="https://www.youtube.com/channel/UCJkqHF3qDCgHebqGJuhHLLg" className="text-white kumar">
                  <TfiYoutube />
                </Link>
                <Link to="https://www.linkedin.com/in/aspire-acacdmy-7375931b1/?original_referer=https%3A%2F%2Fwww.aspireiit.in%2F
" className="text-white kumar">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>

            <div className="footer-social footer-social-2 col-md-6">
            <p className="text-center text-white" style={{ fontSize: "14px" }}>
        {" "}
        Design By Honsol
      </p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: "white" }} />

     
      <p className="text-center text-white">
                {" "}
                ©Copyright All Rights Reserved <b>Aspire IIT & Medical</b>{" "}
              </p>
    </footer>
  );
};

export default Footer;
