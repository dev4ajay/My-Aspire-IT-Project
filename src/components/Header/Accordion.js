import React, { useState } from 'react';
import {BsChevronDown} from "react-icons/bs"
import {AiOutlineRight} from "react-icons/ai"
import { Link } from 'react-router-dom';
const Accordion = ({ title,content,gap}) => {
  console.log("mjjjj",gap)
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion2-item ">
      <div className="accordion2-title  d-flex align-items-center" style={{gap:gap}} onClick={() => setIsActive(!isActive)}>
        <Link to="/" className='link_nav ps-0' >{title}</Link>
        <div>{isActive ? <BsChevronDown /> : <AiOutlineRight />}</div>
      </div>
      {isActive && <div className="accordion2-content " style={{display:"grid"}}>{content.map((row)=>(<Link to={row.link}>{row.NavLink}</Link>))}</div>}
    </div>
  );
};

export default Accordion;
