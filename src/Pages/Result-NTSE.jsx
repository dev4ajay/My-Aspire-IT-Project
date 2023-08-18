import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const ResultNTSE = () => { React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
  return (
   <>
   <Navbar />
   <div>
                      <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>
                      			
			<div className='container mt-4'>
                <div className='row'>
                <div class="col-sm-6 col-md-3">
              <article class="post clearfix mb-30 bg-lighter">
                <div class="entry-header">
                  <div class="post-thumb thumb"> 
                    <img src={require("../Assets/img/mm (1).jpg")} alt="Aspire IIT & Medical" class="img-responsive img-fullwidth" /> 
                  </div>
              </div>
              </article>
            </div>
			<div class="col-sm-6 col-md-3">
              <article class="post clearfix mb-30 bg-lighter">
                <div class="entry-header">
                  <div class="post-thumb thumb"> 
                    <img src={require("../Assets/img/mm (2).jpg")} alt="Aspire IIT & Medical" class="img-responsive img-fullwidth" /> 
                  </div>
                </div>
               
              </article>
            </div>
			
			<div class="col-sm-6 col-md-3">
              <article class="post clearfix mb-30 bg-lighter">
                <div class="entry-header">
                  <div class="post-thumb thumb"> 
                    <img src={require("../Assets/img/mm (3).jpg")} alt="Aspire IIT & Medical" class="img-responsive img-fullwidth" /> 
                  </div>
              </div>
              </article>
            </div>
            <div class="col-sm-6 col-md-3">
              <article class="post clearfix mb-30 bg-lighter">
                <div class="entry-header">
                  <div class="post-thumb thumb"> 
                    <img src={require("../Assets/img/mm (4).jpg")} alt="Aspire IIT & Medical" class="img-responsive img-fullwidth" /> 
                  </div>
              </div>
              </article>
            </div>
                </div>
            </div>
    </div>
    <Footer />
   </>
  )
}

export default ResultNTSE