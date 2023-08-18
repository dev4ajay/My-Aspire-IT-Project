import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
const CAMPUSLIFE = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  // console.log(CAMPUSLIFE)
  return (
    <>
      <Navbar />
      <section>
        <img src={require("../Assets/img/slider-1.jpg")} width="100%"></img>

        <div class="container mt-30 mb-30 pt-30 pb-30 mt-4">
          <div class="row blog-posts">
            <div class="col-md-12">
              <div
                id="grid"
                class="gallery-isotope grid-2 masonry gutter-30 clearfix"
              >
                <div class="gallery-item">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img
                          src={require("../Assets/img/nm (1).jpg")}
                          alt=""
                          class="img-responsive img-fullwidth"
                        />
                      </div>
                    </div>
                    <div class="entry-content border-1px p-20 pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h4 class="entry-title text-white text-uppercase m-0 mt-5">
                              <font color="#12294B">Doubt Session</font>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <p class="mt-10">
                        {" "}
                        <i class="fa fa-check-square-o"></i> Comprehensive and
                        customized study material according to the individual
                        demand of the child.
                        <br />
                        <i class="fa fa-check-square-o"></i> With only focus
                        being cracking the most prestigious exams of the country
                        (KVPY, RMO, BOH, JEE, NEET & more) our study material is
                        focused.
                        <br />
                        <i class="fa fa-check-square-o"></i> Material is
                        designed not for cramming but to be understood and
                        applied in real life.
                      </p>
                      <br />

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>

                <div class="gallery-item">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img
                          src={require("../Assets/img/nm (2).jpg")}
                          alt=""
                          class="img-responsive img-fullwidth"
                        />
                      </div>
                    </div>
                    <div class="entry-content border-1px p-20 pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h4 class="entry-title text-white text-uppercase m-0 mt-5">
                              <font color="#12294B">LIBRARY</font>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <p class="mt-10">
                        <i class="fa fa-check-square-o"></i> Aspire Campus
                        Libraries are well lighted and spacious with specialized
                        collection of books, journals and other resources in
                        Mathematics, Sciences, engineering and technology.
                        <br />
                        <i class="fa fa-check-square-o"></i> ASPIRE Academy
                        ensures the best and most efficient Learning environment
                        for their students. <br />
                        <i class="fa fa-check-square-o"></i> Libraries are
                        always placed close to the Teachers Staff Room, for
                        quick doubt sessions.
                      </p>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>

                <div class="gallery-item">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img
                          src={require("../Assets/img/nm (4).jpg")}
                          alt=""
                          class="img-responsive img-fullwidth"
                        />
                      </div>
                    </div>
                    <div class="entry-content border-1px p-20 pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h4 class="entry-title text-white text-uppercase m-0 mt-5">
                              <font color="#12294B">FOOD & DINING</font>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <p class="mt-10">
                        <i class="fa fa-check-square-o"></i> Aspire Academy has
                        a central role in creating a hygienic & healthy food
                        environment .<br />
                        <i class="fa fa-check-square-o"></i> It enables students
                        to adopt and maintain healthy dietary practices keeping
                        their learning process to full potential.
                        <br />
                        <i class="fa fa-check-square-o"></i> Hostels have fresh
                        and well stocked kitchen facilities.
                        <br />
                        <i class="fa fa-check-square-o"></i> Tuck Shop & Canteen
                        in addition to mess are available in Campus.
                      </p>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>

                <div class="gallery-item">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img
                          src={require("../Assets/img/nm (5).jpg")}
                          alt=""
                          class="img-responsive img-fullwidth"
                        />
                      </div>
                    </div>
                    <div class="entry-content border-1px p-20 pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h4 class="entry-title text-white text-uppercase m-0 mt-5">
                              <font color="#12294B">MEDICAL SERVICES</font>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <p class="mt-10">
                        <i class="fa fa-check-square-o"></i> 24x7 Ambulance
                        service. <br />
                        <i class="fa fa-check-square-o"></i> In campus First-
                        Aid.
                        <br />
                        <i class="fa fa-check-square-o"></i> On call doctor.
                        <br />
                        <i class="fa fa-check-square-o"></i> Nearest Hospitals
                        (3 nearest Hospitals; with Google map links)
                      </p>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>

                <div class="gallery-item">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img
                          src={require("../Assets/img/nm (7).jpg")}
                          alt=""
                          class="img-responsive img-fullwidth"
                        />
                      </div>
                    </div>
                    <div class="entry-content border-1px p-20 pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h4 class="entry-title text-white text-uppercase m-0 mt-5">
                              <font color="#12294B">TRANSPORTATION</font>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <p class="mt-10">
                        <i class="fa fa-check-square-o"></i> Aspire Bus service
                        in Between the Campuses.
                        <i class="fa fa-check-square-o"></i> 24x7 car transport
                        service.
                      </p>
                      <br />
                      <br />
                      <br />

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>

                <div class="gallery-item">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb thumb">
                        <img
                          src={require("../Assets/img/nm (8).jpg")}
                          alt=""
                          class="img-responsive img-fullwidth"
                        />
                      </div>
                    </div>
                    <div class="entry-content border-1px p-20 pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                        <div class="media-body pl-15">
                          <div class="event-content pull-left flip">
                            <h4 class="entry-title text-white text-uppercase m-0 mt-5">
                              <font color="#12294B">ASPIRE – PARENT </font>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <p class="mt-10">
                        {" "}
                        Aspire values the relationship of Parents and
                        institution. We know the best result of your child will
                        be the combined product of efforts from teachers as well
                        as parents. We are always available for you queries.
                        Parents are regularly updated about their Childs
                        progress through website and SMS service.
                      </p>

                      <div class="clearfix"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CAMPUSLIFE;
