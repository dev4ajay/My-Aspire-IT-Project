import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const DirectorMessage = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
  return (
    <>
    <Navbar />
      <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>
    
    <div className='container d-flex mt-4'>
              <div class="col-md-6">
            <div class="blog-posts">
              <div class="col-md-12">
                <div class="row list-dashed"></div>
                  <article class="post clearfix mb-30 bg-lighter">
                    <div class="entry-header">
                      <div class="post-thumb thumb"> 
                        <img src={require("../Assets/img/md.JPG")} alt="Aspire IIT & Medical" class="img-responsive img-fullwidth" /> 
                      </div>
                    </div>
                    <div class="entry-content p-20 pr-10">
                      <div class="entry-meta media mt-0 no-bg no-border">
                      
                        <div class="media-body ">
                          <div class="event-content pull-left flip">
                            <h4 class="entry-title text-white text-uppercase m-0 "><a href="javascript:void(0);">Director Message</a></h4>
                            <span class="mb-10 text-gray-darkgray mr-10 font-13"><font color="#000000"> Er. Yogendra Kumar Meena (MD) </font></span>                       
                           
                          </div>
                        </div>
                      </div>
                      <p class="mt-10" align="justify">You have entered the most crucial part of your life. The next few years will be pivotal in shaping your future. Every parent loves his child and wishes to provide the best quality education to enable him reach his full potential. We at ASPIRE IIT & MEDICAL believe in providing uncompromised quality of education to the students and helping them realize their dreams.<br/><br/>

In an ever-increasing competitive atmosphere, sound understanding of fundamentals in Science /Mathematics plays a pivotal role when a student steps out into the professional world outside. All competitive, aptitude and professional exams ranging from NTSE through IIT JEE, NEET, AIIMS, AFMC, CAT, GMAT, GRE, SAT etc have a significant component focusing on fundamentals. Hence, it is imperative to focus on building strong foundation at an early age.<br/><br/>

ASPIRE IIT & MEDICAL Programs have been designed to lay a strong foundation of basic concepts in Physics, Chemistry, Biology and Mathematics. The rational approach in dealing with the problem is an asset which will be useful in all spheres of life. We believe that an early start provides strong competitive edge to the students.The program will focus on encouraging students to look beyond textbooks for learning and apply the concepts learnt to real-life situations.<br/><br/>

In this enjoyable journey of learning, Our Programs will also groom you for the challenging examinations coming along this path. Most of these examinations, which a student faces during these years, are based on thorough understanding of the subject, which if prepared in a systematic and a scientific manner, can be dealt with ease. </p>
                      <a class="btn-read-more">Best Wishes!!!</a><br />
					  <a class="btn-read-more">Aspire IIT & Medical Team . </a>
                      <div class="clearfix"></div>
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

export default DirectorMessage