import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import { imageNEET2021} from "../ImagePath";
const Resultneet2021 = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  console.log(imageNEET2021);
  return (
    <>
      <Navbar />
      <img src={require("../Assets/img/slider-1.jpg")} width="100%"></img>
      <div className="container mt-4 mb-4">
        <div>
          <div class="row multi-row-clearfix">
            <div>
              <article class="post clearfix mb-30">
                <div class="entry-header" style={{ columnCount: "4" }}>
                  {imageNEET2021.map((row) => (
                    <div class="post-thumb thumb img_Jee">
                      <img
                        src={row.Sevenneetimage}
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
      </div>

      <Footer />
    </>
  );
};

export default Resultneet2021;
