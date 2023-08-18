import React from "react";

const Admission = () => { React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
  return (
    <section className="mt-5 ">
      <div className="container ">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-md-6 pt-5">
            <h2>
              Admission Information <br />
              through Aspire App
            </h2>
            <p>
              Aspire Info and admission app is here to provide all the admission
              info and solve related queries.
            </p>
            <div className="deepak">
              <img src={require("../../Assets/img/googleplay.png")}></img>
              <button className="getMore">Get More Apps </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <img src={require("../../Assets/img/allen-app-bg.png")}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
