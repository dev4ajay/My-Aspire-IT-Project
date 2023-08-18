import React from "react";
import TopLogo from "../../Assets/img/logo.png";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
const TopNav = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <section className="topNav">
      <div className="container pt-0">
        <div className="row TopNavRow">
          <div className="col-md-4 gap-2 d-flex ">
            <Link
              to="https://www.instagram.com/aspireiit_medical/"
              className="text-black kumar"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.facebook.com/BrainofHimachal/?fref=ts"
              className="text-black kumar"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://mobile.twitter.com/aspire_iit"
              className="text-black kumar"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCJkqHF3qDCgHebqGJuhHLLg"
              className="text-black kumar"
            >
              <TfiYoutube />
            </Link>
            <Link
              to="https://www.linkedin.com/in/aspire-acacdmy-7375931b1/?original_referer=https%3A%2F%2Fwww.aspireiit.in%2F
"
              className="text-black kumar"
            >
              <FaLinkedinIn />
            </Link>
          </div>
          <div
            className="col-md-4 d-flex "
            style={{ justifyContent: "center" }}
          >
            <p
              style={{
                fontWeight: "600",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <span className="topClick text-white">
                <Link to="/SSB" className="text-white text-decoration-none">
                  CLICK HERE
                </Link>
              </span>
              SSB - 11th, 12th
            </p>{" "}
          </div>
          <div className="col-md-4 text-end">
            <Link to="/admin/sign-in" className="topLastBtn">
              Visit : www.aspireiit.in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
