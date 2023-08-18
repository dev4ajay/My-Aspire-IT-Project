import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const Foundation = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
  return (
 <>
 <Navbar />
    <div>
              <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>
              <section>
      <div class="container mt-5 mb-30 pt-30 pb-30">
        <div class="row ">
          <div class="col-md-10 col-md-offset-1">
            <div class="blog-posts">
              <div class="col-md-12">
                <div class="row list-dashed">
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb thumb"><br /> 
                        <img src={require("../Assets/img/foundation.jpg")} alt="Aspire IIT & Medical" class="img-responsive img-fullwidth" /> 
                      </div>
                    </div>
                  
                  </article>

                

                 

                 

                 
                  
                </div>
              </div>
             
            </div>
          </div>  
        </div>
      </div>
    </section>

    </div>
    <Footer />
 </>
  )
}

export default Foundation