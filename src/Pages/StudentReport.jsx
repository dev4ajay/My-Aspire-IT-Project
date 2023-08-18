import React from 'react'
import { studentReportData } from "../components/data/about"
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const StudentReport = () => {
    // console.log(studentReportData)
    return (
    <>
    <Navbar />
        <section>
      <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>
      <section id="contact" data-bg-img="images/pattern/p4.png"> 
      <div class="container">
        <div class="section-title text-center">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8 col-md-offset-2 text-center">
              <h2 class="text-uppercase font-28 mt-0"><span class="text-theme-colored">Student  </span> Report</h2>
            </div>
          </div>
        </div>
        <div class="section-content">          
          <div class="row">
            <div class="col-md-12">
              <form class="contact-form-transparent" id="contact_form" action="http://kodesolution.website/html/s/medikal/v4.0/demo/includes/sendmail.php" name="contact-form" method="post">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <input id="form_name" name="form_name" class="form-control" type="text" placeholder="Student" required="" />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <input id="form_phone" name="form_phone" class="form-control" type="text" placeholder="Username Or Email" required="" />
                    </div>
                  </div>
				  
				  <div class="col-sm-12">
                    <div class="form-group">
                      <input id="form_name" name="form_name" class="form-control" type="text" placeholder="Password" required="" />
                    </div>
                  </div>
                  
                  
				
                <div class="form-group text-center mb-0">
                  <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="" />
                  <button data-loading-text="Please wait..." class="btn btn-colored btn-rounded btn-theme-colored pl-30 pr-30" type="submit">Send Your Message</button>
                </div>
                </div>
              </form>
              

            </div>
          </div>
        </div>
      </div>
    </section>
        </section>
        <Footer />
    </>
    )
}

export default StudentReport