import React, { useState } from 'react';
import {BsChevronDown} from "react-icons/bs"
import {AiOutlineRight} from "react-icons/ai"
import { Link } from 'react-router-dom';
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion2-item mmnnm">
      <div className="accordion2-title d-flex align-items-center"  onClick={() => setIsActive(!isActive)}>
        <Link to="/" className='link_nav text-black'>{title}</Link>
        <div>{isActive ? <BsChevronDown /> : <AiOutlineRight />}</div>
      </div>
      {isActive && <div className="accordion2-content " style={{display:"grid",background:"white"}}>{content.map((row)=>(<Link to={row.link} className="text-black">{row.NavLink}</Link>))}</div>}
    </div>
  );
};

export default Accordion;
