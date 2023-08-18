import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const Reviews = () => { React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
  return (
    <>
    <Navbar />
     <section >
     <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>

      <div class="container mt-30 mb-30 pt-30 pb-30 mt-5">
        <div class="row" className='d-flex justify-content-center'>
          <div class="col-md-8 col-md-offset-2">
            <div class="blog-posts single-post">
              <article class="post clearfix mb-0">
                <div class="entry-header">
                  <div class="post-thumb thumb"> <img src={require("../Assets/img/reviews-big.jpg")} alt="Aspire IIT & Medical" class="img-responsive img-fullwidth" /> </div>
                </div>
               
              </article>
             
              <div class="author-details media-post">
                <a href="javascript:void(0);" class="post-thumb mb-0 pull-left flip pr-20"><img class="img-thumbnail" alt="Aspire IIT & Medical" src={require("../Assets/img/virender-b.png")} /></a>
                <div class="post-right">
                  <h5 class="post-title mt-0 mb-0"><a href="javascript:void(0);" class="font-18">Virender Vinu</a></h5>
                  <p>Best place to study. And staff is very co operative. Also they clear each and every doubt of student if they come to ask a doubt. ❤️
If you have an aim to crack competitive axams in your life and really want to get the result you can come here.
Although if you don't want to study then this place is not for you .</p>
                 
                </div>
                <div class="clearfix"></div>
              </div>
			  
			  
			  <div class="author-details media-post">
                <a href="javascript:void(0);" class="post-thumb mb-0 pull-left flip pr-20"><img class="img-thumbnail" alt="Aspire IIT & Medical" src={require("../Assets/img/surender-b.png")} /></a>
                <div class="post-right">
                  <h5 class="post-title mt-0 mb-0"><a href="javascript:void(0);" class="font-18">Surender Singta</a></h5>
                  <p>Aspire is the best coaching institute for IIT & Medical in Himachal. This institute is helping the students to become Engineers and Doctors. This institute has raised a spark among the state students to achieve in the field of Medical and Technology.</p>
                 
                </div>
                <div class="clearfix"></div>
              </div>
			  
			  
			  <div class="author-details media-post">
                <a href="javascript:void(0);" class="post-thumb mb-0 pull-left flip pr-20"><img class="img-thumbnail" alt="Aspire IIT & Medical" src={require("../Assets/img/ritik.png")} /></a>
                <div class="post-right">
                  <h5 class="post-title mt-0 mb-0"><a href="javascript:void(0);" class="font-18">Ritik Chauhan</a></h5>
                  <p>If you have have a determination to crack the competitive exam then this place is definitely your type. This place will provide you the environment as well as quality education. In short I love to study here and i also recommend you to come here if  you ASPIRE to pursue your dream 🙂🙂🙂</p>
                 
                </div>
                <div class="clearfix"></div>
              </div>
			  
			  
			  
             
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Reviews