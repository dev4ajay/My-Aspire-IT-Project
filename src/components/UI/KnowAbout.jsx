import React from "react";

const KnowAbout = () => { React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="know_heading" style={{ fontWeight: "bold" }}>
              About Aspire IIT & Medical
            </h3>
            <p className="text-justify" style={{ fontSize: "16px" }}>
              Aspire IIT & Medical is an initiative taken by an IIT qualified
              graduate with an aim to change the way science education is
              delivered in the country.
            </p>
            <p className="text-justify" style={{ fontSize: "16px" }}>
              We believe that Science cannot be taught in the classrooms without
              actually relating it to the real life examples. We have introduced
              Activity Based Learning and Technology to the traditional
              classroom learning. We also try to demonstrate the laws of science
              through real life examples and activities. Once the student
              understands the underlying phenomenon and is able to relate the
              theory to real life examples, he is better prepared to do the
              calculations that follow. The work has been done. Directional and
              focused effort, is the key to a top ranking performance in all
              competitive exams.
            </p>
          </div>
          <div className="col-md-6">
            <div className="mohitmmm mt-5 d-flex justify-content-between">
              <div
                className="shadow text-center px-3"
                style={{
                  width: "47%",
                  display: "flex",
                  height: "255px",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "2rem",
                }}
              >
                <div>
                  <img src={require("../../Assets/img/about-icon01.png")}></img>
                </div>
                <div>
                  <h2>27 Lac+</h2>
                  <p>
                    Trusted Chosen in all modes by
                    <br /> Students across
                    <br /> (Since 1988)
                  </p>
                </div>
              </div>
              <div
                className="shadow text-center px-3 py-2"
                style={{ width: "47%"}}
              >
                <div>
                  <img src={require("../../Assets/img/about-icon02.png")}  style={{ marginLeft: "5rem",
                marginTop: "2rem" }}></img>
                </div>
                <div>
                  <h2>2.8 Lac+</h2>
                  <p>
                    Trusted Chosen in all modes by
                    <br /> Students across
                    <br /> (Since 1988)
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="mohitmmm mt-4 gap-3">
              <div className="shadow text-center px-3 py-2">
                <div>
                  <img src={require("../../Assets/img/about-icon03.png")}></img>
                </div>
                <div>
                  <h2>46</h2>
                  <p>
                    Trusted Chosen in all modes by
                    <br /> Students across
                    <br /> (Since 1988)
                  </p>
                </div>
              </div>
              <div className="shadow text-center px-3 py-2">
                <div>
                  <img src={require("../../Assets/img/about-icon04.png")}></img>
                </div>
                <div>
                  <h2>170+</h2>
                  <p>
                    Trusted Chosen in all modes by
                    <br /> Students across
                    <br /> (Since 1988)
                  </p>
                </div>
              </div>
              <div className="shadow text-center px-3 py-2">
                <div>
                  <img src={require("../../Assets/img/about-icon05.png")}></img>
                </div>
                <div>
                  <h2>27 Lac+</h2>
                  <p>
                    Trusted Chosen in all modes by
                    <br /> Students across
                    <br /> (Since 1988)
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowAbout;
