import React from 'react'
import {ImLocation} from "react-icons/im"
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const ContactUs = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
    return (
      <>
          <Navbar />
      <section>
                  <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>

                  <section class="divider mt-5">
      <div class="container pt-0">
        <div class="row mb-60 bg-deep">
          <div class="col-sm-12 col-md-4">
            <div class="contact-info text-center pt-60 pb-60 border-right">
       
             <ImLocation class="font-36 mb-3 text-theme-colored"/>
               <h4>HEAD OFFICE SHIMLA</h4>
			  <h6 class="text-gray">Aspire Academy, Near HDFC Bank Phase-III<br /> BCS New Shimla-171009 Himachal Pradesh</h6>
              <h6 class="text-gray">Phone: +91 - 177 - 2673990 </h6>
			   <h6 class="text-gray">Phone: +91 - 9816623676 </h6>
			    <h6 class="text-gray">Email: manager@aspireiit.in</h6>
			   
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="contact-info text-center  pt-60 pb-60 border-right">
            <ImLocation class="font-36 mb-3 text-theme-colored"/>
              <h4>BRANCH OFFICE: ASPIRE UNA</h4>
              <h6 class="text-gray">Paradise Plaza, Near Indra Stadium, Chd. Road,<br /> Una 174303</h6>
			  <h6 class="text-gray">Phone: +91 - 9317268601 </h6>
			   <h6 class="text-gray">Phone: +91 - 9317268603 </h6>
			   <h6 class="text-gray">Email: unaaspire@aspireiit.in</h6>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="contact-info text-center  pt-60 pb-60">
             
            <ImLocation class="font-36 mb-3 text-theme-colored"/>
              <h4>BRANCH OFFICE: ASPIRE HAMIRPUR</h4>
              <h6 class="text-gray">Antriksh Mall, 1<sup>st</sup> Floor, Ward No.2, Near Gandhi Chowk, Hamirpur</h6>
			  <h6 class="text-gray">Phone: +91 - 6230231676</h6>
			   <h6 class="text-gray">Phone: +91 - 8091313676</h6>
			    <h6 class="text-gray">Email: manager@aspireiit.in</h6>
			  
			    
            </div>
          </div>
        </div>
        <div class="row pt-10">
          <div class="col-md-5">
          <h4 class="mt-0 mb-30 line-bottom">Find Our Location</h4>
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13666.914096994098!2d77.1708079!3d31.0894776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2f978988f64bc4d!2sAspire+IIT%2FMEDICAL+Academy!5e0!3m2!1sen!2sin!4v1470312126781" width="100%" height="415" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
          </div>
          <div class="col-md-7">
            <h4 class="mt-0 mt-sm-30 mb-30 line-bottom">Send Us a Message</h4>
            
            <form action="contact-enquiry.php" onSubmit="return Validateroom(this)" method="post">

              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Name <small>*</small></label>
                    <input name="name" class="form-control"  placeholder="Enter Name" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Email <small>*</small></label>
                    <input name="email" class="form-control  "  placeholder="Enter Email" />
                  </div>
                </div>
              </div>                
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Mobile <small>*</small></label>
                    <input name="mobile" class="form-control " placeholder="Enter Phone " />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>School Name</label>
                    <input name="sname" class="form-control"  placeholder="School Name" />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>Message</label>
                <textarea name="msg" class="form-control " rows="5" placeholder="Enter Message"></textarea>
              </div>
              <div class="form-group">
                <input name="form_botcheck" class="form-control" type="hidden" value="" />
                <button type="submit" class="btn btn-flat btn-theme-colored text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px mr-3" data-loading-text="Please wait...">Send your message</button>
                <button type="reset" class="btn btn-flat btn-theme-colored text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px">Reset</button>
              </div>
            </form>

           
          </div>
        </div>
      </div>
    </section> 
        </section>
        <Footer/>
        </>
        
    )
}

export default ContactUs