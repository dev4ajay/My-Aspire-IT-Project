import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const FEESTRUCTURE = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
  return (
    <>
    <Navbar />
    <div>
                                      <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>

        <div class="container mt-4">
    <div class="section-title text-center">
      <div class="row">
        <div class="col-md-12 col-md-offset-2">
          <h4 class="text-uppercase mt-0 line-height-1">Fee Structure </h4>
          <p>Contact Us:- +91 - 9816623676</p>
          <p>Phone:- +91 - 177 - 2673990</p>
          <p>Email Us:-  manager@aspireiit.in</p>
        </div>
      </div>
    </div>
    
  </div></div>
  <Footer />
    </>
  )
}

export default FEESTRUCTURE