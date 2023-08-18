import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const Forclassviii = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
  return (
 <>
 <Navbar />
 <section>
                  <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>

     <div className='container mt-4 mb-4'> 
     <div class="col-xs-12 col-sm-8 col-md-8 pl-20 pl-sm-15">
    <div>
      <h3 class="mt-0">Foundation </h3>
       <h4 class="mt-0"> For Class VIII</h4>
      <h5 class="text-theme-colored">Coming Soon...</h5>
     
    </div>
   
  </div>
  </div>
   </section>
   <Footer />
 </>
  )
}

export default Forclassviii