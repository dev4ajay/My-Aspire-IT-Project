import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import { imageJee2017 } from "../ImagePath";

const Resultjee2017 = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Navbar />
      <img src={require("../Assets/img/slider-1.jpg")} width="100%"></img>

      <div className="container mt-4 mb-4">
        <div class="row multi-row-clearfix">
          <div>
            <article class="post clearfix mb-30">
              <div class="entry-header" style={{ columnCount: "4" }}>
                {imageJee2017.map((row) => (
                  <div class="post-thumb thumb img_Jee">
                    <img
                      src={row.Threeimage}
                      alt="Aspire IIT & Medical"
                      class="img-responsive img-fullwidth mb-3"
                    />
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resultjee2017;
