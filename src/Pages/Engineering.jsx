import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
const Engineering = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Navbar />
      <section>
        <img src={require("../Assets/img/slider-1.jpg")} width="100%"></img>
        <section>
          <div class="container mt-5">
            <div class="row multi-row-clearfix">
              <div class="blog-posts">
                <div className="d-flex">
                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb-thumb ">
                        <img 
                          src={require("../Assets/JEE/2022/1.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultjee2022">JEE - 2022 </Link>{" "}
                            </h5>
                            <Link to="/Resultjee2022" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>

                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter ">
                    <div class="entry-header">
                      <div class="post-thumb-thumb " >
                        <img 
                          src={require("../Assets/JEE/2021/1.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultjee2021">JEE - 2021 </Link>{" "}
                            </h5>
                            <Link to="/Resultjee2021" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
                <div class="col-sm-6 col-md-3 mt-3">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb-thumb " >
                        <img
                          src={require("../Assets/JEE/2020/1.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border" >
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultneet2020">JEE - 2020 </Link>
                            </h5>
                            <Link to="/Resultjee2020" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
              
               
                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter" >
                    <div class="entry-header">
                      <div class="post-thumb-thumb ">
                        <img
                          src={require("../Assets/JEE/2019/1.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        
                      />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultneet2019">JEE - 2019 </Link>
                            </h5>
                            <Link to="/Resultjee2019" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
                </div>

<div className="d-flex">

                <div class="col-sm-6 col-md-3" >
                  <article class="post clearfix mb-30 bg-lighter" >
                    <div class="entry-header">
                      <div class="post-thumb-thumb " >
                        <img
                          src={require("../Assets/JEE/2018/1.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultjee2018">JEE - 2018 </Link>
                            </h5>
                            <Link to="/Resultjee2018" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>

                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter" >
                    <div class="entry-header">
                      <div class="post-thumb-thumb ">
                        <img
                          src={require("../Assets/JEE/2017/1.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        />
                      </div>
                    </div>

                    
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultjee2017">JEE - 2017 </Link>{" "}
                            </h5>
                            <Link to="/Resultjee2017" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter" >
                    <div class="entry-header">
                      <div class="post-thumb-thumb ">
                        <img
                          src={require("../Assets/JEE/2016/1.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultjee2016">JEE - 2016 </Link>{" "}
                            </h5>
                            <Link to="/Resultjee2016" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
                <div class="col-sm-6 col-md-3" >
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb-thumb " >
                        <img
                          src={require("../Assets/JEE/2015/93.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border" >
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultjee2015">JEE - 2015 </Link>{" "}
                            </h5>
                            <Link to="/Resultjee2015" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
              </div>

              <div className="d-flex">
                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb-thumb ">
                        <img 
                          src={require("../Assets/NEET/2022/110.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultneet2022">NEET - 2022 </Link>{" "}
                            </h5>
                            <Link to="/Resultneet2022" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>

                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter ">
                    <div class="entry-header">
                      <div class="post-thumb-thumb " >
                        <img 
                          src={require("../Assets/NEET/2021/1.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultneet2021">NEET - 2021 </Link>{" "}
                            </h5>
                            <Link to="/Resultneet2021" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
                <div class="col-sm-6 col-md-3 mt-3">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb-thumb " >
                        <img
                          src={require("../Assets/NEET/2020/1.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border" >
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultneet2020">NEET - 2020 </Link>
                            </h5>
                            <Link to="/Resultneet2020" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
              
               
                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter" >
                    <div class="entry-header">
                      <div class="post-thumb-thumb ">
                        <img
                          src={require("../Assets/NEET/2019/118.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        
                      />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultneet2019">NEET - 2019 </Link>
                            </h5>
                            <Link to="/Resultneet2019" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
                </div>
                <div className="d-flex">
                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb-thumb ">
                        <img 
                          src={require("../Assets/NEET/2018/123.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultneet2018">NEET - 2018 </Link>{" "}
                            </h5>
                            <Link to="/Resultneet2018" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>

                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter ">
                    <div class="entry-header">
                      <div class="post-thumb-thumb " >
                        <img 
                          src={require("../Assets/NEET/2017/101.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultneet2017">NEET - 2017 </Link>{" "}
                            </h5>
                            <Link to="/Resultneet2017" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
                <div class="col-sm-6 col-md-3 mt-3">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb-thumb " >
                        <img
                          src={require("../Assets/NEET/2016/214.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        
                        />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border" >
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultneet2016">NEET - 2016 </Link>
                            </h5>
                            <Link to="/Resultneet2016" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
              
               
                <div class="col-sm-6 col-md-3">
                  <article class="post clearfix mb-30 bg-lighter" >
                    <div class="entry-header">
                      <div class="post-thumb-thumb ">
                        <img
                          src={require("../Assets/NEET/2015/213.jpg")}
                          alt="Aspire IIT & Medical"
                          class="img-responsive img-fullwidth "
                        
                      />
                      </div>
                    </div>
                    <div class="entry-content  pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h5 class="entry-title text-white text-uppercase m-0 mt-5">
                              <Link to="/Resultneet2015">NEET - 2015 </Link>
                            </h5>
                            <Link to="/Resultneet2015" class="btn-read-more">
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
                </div>

              </div>
              
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Engineering;
