import React, { useState } from 'react';
import { Data } from '../UI/utils/Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {BsChevronDown} from "react-icons/bs"
import {AiOutlineRight} from "react-icons/ai"
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar2 copy';
import Navbar23 from './Navbar2 copy 2';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  display:grid;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`

  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  height: 48px;
  width: 281px;

  h1 {
    padding:0.5rem 6rem  ;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #e63430 !important;
  color: black;
  width: 100%;
 height: 500px;;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border-bottom: 1px solid #00ffb9;
  // border-top: 1px solid #00ffb9;

  p {
    font-size: 2rem;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection className='mmmmmm text-black'>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index} >
                  <h1></h1>
                  <span>{clicked === index ? <BsChevronDown /> : <AiOutlineRight />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>

                   <Navbar2 />
                   <li className='accordion2-title d-flex align-items-center gap-5 ' style={{marginLeft:"-14rem"}}>
                    <Link className='text-black' to="/Career-Counselling">CARRIER</Link>
                    </li>
                    <Navbar23 />


                    <li className='accordion2-title d-flex align-items-center gap-5 ' style={{marginLeft:"-13rem"}}>
                    <Link className='text-black' to="/Career-Counselling">Contact Us</Link>
                    </li>
                    <li className='accordion2-title d-flex align-items-center gap-5 ' style={{marginLeft:"-14rem"}}>
                    <Link className='text-black' to="/Career-Counselling">ENQIURY</Link>
                    </li>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
