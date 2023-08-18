import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import { Link } from "react-router-dom";
const OurCours = () => { React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
  return (
    <section id="blog" className="bg-lighter mt-5 mb-5">
      <div className="container">
        <div className="section-title mt-4">
          <div className="row">
            <div className="col-md-12 col-md-offset-2">
              <h2
                className="text-uppercase mt-0 line-height-1 h4_our"
                style={{ fontWeight: "bold" }}
              >
                Our Courses
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <article className="post clearfix mb-30 bg-lighter">
              <div className="entry-header">
                <div className="post-thumb thumb">
                  <img
                    src={require("../../Assets/img/engineering-home2.jpg")}
                    alt="Aspire IIT &amp; Medical"
                    className="img-responsive img-fullwidth"
                  />{" "}
                </div>
              </div>
              <div className="entry-content pr-10 border ps-3">
                <div
                  className="entry-meta media  no-bg no-border d-flex align-items-end"
                  style={{ marginTop: "-12px" }}
                >

                  <div className="media-body">
                    <div className="event-content pull-left flip">
                      <h3 className="entry-title text-white text-uppercase font-weight-600 m-0 mt-5">
                        <Link
                          to="/engineering"
                          className="text-decoration-none text-theme-colored"
                        >
                          Engineering
                        </Link>
                      </h3>

                    </div>
                  </div>
                </div>
                <ul className="pt-2 p-0 ps-4" style={{ listStyle: "disc" }}>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      IIT JEE Target
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      IIT JEE Crash Courses
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      IIT JEE Test Series
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      IIT JEE Target
                    </a>
                  </li>
                </ul>

             
                <div className="clearfix"></div>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-md-4">
            <article className="post clearfix mb-30 bg-lighter">
              <div className="entry-header">
                <div className="post-thumb thumb">
                  <img
                    src={require("../../Assets/img/Aspire IIT & Medical122.jpg.jpg")}
                    alt="Aspire IIT &amp; Medical"
                    className="img-responsive img-fullwidth"
                  />{" "}
                </div>
              </div>
              <div className="entry-content pr-10 border ps-3">
                <div
                  className="entry-meta media  no-bg no-border d-flex align-items-end"
                  style={{ marginTop: "-12px" }}
                >
               
                  <div className="media-body">
                    <div className="event-content pull-left flip">
                      <h3 className="entry-title text-white text-uppercase font-weight-600 m-0 mt-5">
                        <Link
                          to="/"
                          className="text-decoration-none text-theme-colored"
                        >
                          Medical
                        </Link>
                      </h3>

                    </div>
                  </div>
                </div>
                <ul className="pt-2 p-0 ps-4" style={{ listStyle: "disc" }}>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      NEET Target Courses
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      NEET Crash Courses
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      NEET Test Series
                    </a>
                  </li>
                  <li>
                    <Link to="/KVPY" className="text-decoration-none text-black">
                      KVPY
                    </Link>
                  </li>
                </ul>

              
                <div className="clearfix"></div>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-md-4">
            <article className="post clearfix mb-30 bg-lighter">
              <div className="entry-header">
                <div className="post-thumb thumb">
                  <img
                    src={require("../../Assets/img/foundation-home3.jpg")}
                    alt="Aspire IIT &amp; Medical"
                    className="img-responsive img-fullwidth"
                  />{" "}
                </div>
              </div>
              <div className="entry-content pr-10 border ps-3">
                <div className="entry-meta media  no-bg no-border d-flex align-items-end"
                  style={{ marginTop: "-12px" }}>
                 
                

                  <div className="media-body">
                    <div className="event-content pull-left flip">
                      <h3 className="entry-title text-white text-uppercase font-weight-600 m-0 mt-5">
                        <Link
                          to="/Foundation"
                          className="text-decoration-none text-theme-colored"
                        >
                          Foundation
                        </Link>
                      </h3>
                 
                    </div>
                  </div>
                </div>
                <ul className="pt-2 p-0 ps-4" style={{ listStyle: "disc" }}>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      For Class VI
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      For Class VII
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      For Class VIII
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-black">
                      For Class IX and X
                    </a>
                  </li>
                </ul>

              
                <div className="clearfix"></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCours;
