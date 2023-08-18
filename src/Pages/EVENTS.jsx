import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const EVENTS = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
    // console.log(EVENT
    return (
     <>
     <Navbar />
     <section>
            <div>
              <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>
<div>
<div class="mt-4 mb-4 pl-sm-15 text-center">
              <div>
                <h3 class="mt-0">EVENTS</h3>
				
                <h5 class="text-theme-colored">Coming Soon...</h5>
               
              </div>
             
            </div>
</div>
    </div>
        </section>
        <Footer />
     </>
    )
}

export default EVENTS