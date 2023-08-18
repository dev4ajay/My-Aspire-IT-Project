import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
const SSB = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src={require("../Assets/img/slider-1.jpg")} width="100%"></img>
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-10 col-md-push-1">
              <div id="section-one" class="mb-50">
                <div id="section-two" class="mb-50">
                  <h1> Sure Selection Batch</h1>
                  <h3> School Integrated 2 Year Programme (+1 & +2 )</h3>
                  <h2> Targetting IIT & AIIMS</h2>
                  <a
                    class="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30"
                    href="https://forms.gle/bCqKk4nEDLhajR9D8"
                    target="_blank"
                  >
                    SSB Registration
                  </a>
                  <br />
                  <hr />
                  <p class="mb-20" align="justify">
                    Spectrum is an exhaustive program for students currently
                    studying in 10<sup>th</sup> and would be appearing for NEET
                    / JEE Main - Adv designed to inculcate the habit of
                    conceptual learning in students. Spread over a span of 2
                    years the program is designed to help students transit
                    smoothly from class 11<sup>th</sup> & 12<sup>th</sup> and
                    build a strong grasp over the concepts of subjects like
                    Mathematics, Chemistry and Physics. Beside Classroom Session
                    and comprehensive Course Material, Online Test Series will
                    also be provided to students. This will help in assessing
                    and improving their performance, besides introducing them to
                    the pattern of the competitive examinations.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <h2>Aspire Results </h2>
        </center>
        <center>
          <Link
            class="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30"
            to="/engineering"
          >
            Engineering
          </Link>
          <Link
            class="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30 ms-4"
            to="/medical-results"
          >
            Medical
          </Link>
          <Link
            class="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30 ms-4"
            to="/Foundation"
          >
            Foundation
          </Link>
          <Link
            class="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30 ms-4"
            to="/KVPY"
          >
            KVPY
          </Link>
          <Link
            class="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30 ms-4"
            to="/Result-NTSE"
          >
            NTSE
          </Link>
        </center>
        <br />
        <section id="pricing" class="bg-silver-light">
          <div class="container pb-30">
            <div class="section-content">
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 hvr-float-shadow mb-sm-30 wow fadeInLeft animation-delay1">
                  <div class="pricing-table style1 bg-white border-10px text-center">
                    <div class="p-40">
                      <p>Class Room Teaching + NCERT Focus</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 hvr-float-shadow mb-sm-30 wow fadeInUp animation-delay1">
                  <div class="pricing-table style1 bg-white border-10px text-center">
                    <div class="p-40">
                      <p>Best Faculties In India</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 hvr-float-shadow mb-sm-30 wow fadeInUp animation-delay1">
                  <div class="pricing-table style1 bg-white border-10px text-center">
                    <div class="p-40">
                      <p>Doubt Session Classes + Practical Supported Studies</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 hvr-float-shadow mb-sm-30 wow fadeInUp animation-delay1">
                  <div class="pricing-table style1 bg-white border-10px text-center">
                    <div class="p-40">
                      <p>Weekly Parent Interaction With Report Cards</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 hvr-float-shadow mb-sm-30 wow fadeInUp animation-delay1">
                  <div class="pricing-table style1 bg-white border-10px text-center">
                    <div class="p-40">
                      <p>
                        Topic Wise Tests, Part Syllabus Tests, Full Syllabus
                        Tests
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 hvr-float-shadow mb-sm-30 wow fadeInRight animation-delay1">
                  <div class="pricing-table style1 bg-white border-10px text-center">
                    <div class="p-40">
                      <p>
                        Aspire IIT/Mediacal Hand Picked Books, Modules, Question
                        Books, Daily Pracice Problems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <center>
              <Link
                class="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30"
                href="ssb-enquiry.html"
                target="_blank"
              >
                Request a Callback
              </Link>
            </center>
          </div>
        </section>
      </div>
      <Footer />{" "}
    </>
  );
};

export default SSB;
