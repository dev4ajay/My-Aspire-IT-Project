import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const SuggestionFeedback = () => { React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
  return (
    <>
    <Navbar />
    <section id="contact" className='career' data-bg-img="images/pattern/p4.png"> 
      <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>
      <div class="container">
        
        <div class="section-content">          
          <div class="row d-flex justify-content-center">
            <div class="section-title text-center">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8 col-md-offset-2">
              <h2 class="text-uppercase font-28 mt-0"><span class="text-theme-colored">Feedback and </span> Suggestion</h2>
            </div>
          </div>
        </div>
            <div class="col-md-12">
              <form action="feedback.php" onSubmit="return Validateroom(this)" method="post" >
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <input  name="name" class="form-control"  placeholder="Enter Name" />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                        <input name="email" class="form-control "  placeholder="Enter Email" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input  name="mobile" class="form-control"  placeholder="Enter Mobile" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input  name="cname" class="form-control" type="text" placeholder="Enter City" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <textarea  name="msg" class="form-control " rows="5" placeholder="Enter Message"></textarea>
                </div>
                <div id="contact-form-result" class="alert alert-success" role="alert" style={{display:" none"}}>
                </div>
                <div class="form-group text-center mb-0">
                  <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="" />
                  <button data-loading-text="Please wait..." class="btn btn-colored btn-rounded btn-theme-colored pl-30 pr-30" type="submit">Send Your Message</button>
                </div>
              </form>
             
              </div>
            </div>
          </div>
        </div>
    
    </section>
    <Footer />
    </>
  )
}

export default SuggestionFeedback