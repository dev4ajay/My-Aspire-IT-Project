import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "../../Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__text">
          <ul>
            <li style={{ marginBottom: "5px" }}>
              <a href="/" className="text-decoration-none text-white mb-4">
                COURSES
              </a>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <a href="/" className="text-decoration-none text-white mb-4">
                STUDENT ZONE{" "}
              </a>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <a href="/" className="text-decoration-none text-white mb-4">
                EARRIER
              </a>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <a href="/" className="text-decoration-none text-white mb-4">
                {" "}
                GALLERY
              </a>
            </li>

            <li style={{ marginBottom: "5px" }}>
              <a href="/" className="text-decoration-none text-white mb-4">
                {" "}
                CONTACT US
              </a>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <a href="/" className="text-decoration-none text-white mb-4">
                {" "}
                Enquiry
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
