import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'

const CareerCounselling = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
  return (
    <>
    <Navbar />
      <section id="contact" className='career' data-bg-img="images/pattern/p4.png"> 
      <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>

      <div class="container mt-4">
        <div class="section-title text-center">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8 col-md-offset-2">
              <h4 class="text-uppercase  mt-0"><span class="text-theme-colored">Career Counselling </span> </h4>
			  <p  align="center">With so many options of professions in modern world, with changing landscape of education.
With abundance of knowledge available, with new efficient ways of learning.
You don’t want to fall back in line, you don’t want to waste your precious time.
We believe in service, we believe in helping. We are your friend, we are here to guide.
Book a counseling session and accelerate your career.
</p>
            </div>
          </div>
        </div>
        <div class="section-content">          
          <div class="row">
            <div class="col-md-12">
            
           
              <form action="career-counselling.php" onSubmit="return Validate(this)" method="post">
                <div class="row">
				 
				<div class="col-sm-12">
                    <div class="form-group">
					
                    <select  name="class" class="form-control">
                                                <option value="" >Class</option>
												<option value="6th">6th</option>
												<option value="7th">7th</option>
                                                <option value="8th">8th</option>
                                                <option value="9th">9th</option>
                                                <option value="10th">10th</option>
                                                <option value="+1">+1</option>
                                                <option value="+2">+2</option>
                                                <option value="+2 Passout">+2 Passout</option>
                                            </select>
                    </div>
                  </div>
				  
				  <div class="col-sm-12">
                    <div class="form-group">
					
                    <select  name="state" class="form-control">
                                                <option value="" >State</option>
												<option value="Andhra Pradesh">Andhra Pradesh</option>
												<option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
												<option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
												
												
												<option value="Madhya Pradesh">Madhya Pradesh</option>
												<option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Punjab">Punjab</option>
												<option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
												
												<option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>
                                            </select>
                    </div>
                  </div>
				  
				  <div class="col-sm-12">
                    <div class="form-group">
                    <select  name="stream" class="form-control">
                                                <option value="" >Stream</option>
												<option value="Medical">Medical</option>
												<option value="Non Medical">Non Medical</option>
                                                <option value="Studying in 10<SUP>th</SUP> or below">Studying in 10<sup>th</sup> or below</option>
                                                
                                            </select>
                    </div>
                  </div>
				  
				  
                  <div class="col-sm-12">
                    <div class="form-group">
                      <input  name="name" class="form-control" placeholder="Student Name" />
					  
                    </div>
                  </div>
                 
				  
				  <div class="col-sm-12">
                    <div class="form-group">
                      <input name="mobile" class="form-control"  placeholder="Enter Mobile" />
                    </div>
                  </div>
                  
                  
				  
				   <div class="col-sm-12">
                    <div class="form-group">
                     <select  name="day" class="form-control">
                                                <option value="" >Preferred Day </option>
                                                <option value="Week Days: ( Monday - Friday )">Week Days: ( Monday - Friday ) </option>
                                                <option value="Saturday">Saturday </option>
                                               <option value="Sunday">Sunday </option>

                                            </select>
											
											 
                    </div>
                  </div>
                  
				
				
				<div class="col-sm-12">
                    <div class="form-group">
                     <select  name="time" class="form-control">
                                                <option value="" > Time</option>
                                                <option value=" Working Hours : 10 AM - 5 PM"> Working Hours : 10 AM - 5 PM</option>
                                                <option value=" Morning Hours : 7 AM - 9 AM ">Morning Hours : 7 AM - 9 AM </option>
                                               <option value="Evening Hours : 6 PM - 8 PM "> Evening Hours : 6 PM - 8 PM </option>

                                            </select>
											
											<br/>
											<input  name="email" class="form-control" placeholder="Email" />  
                    </div>
                  </div> 
                                    
                </div>
                
                <div class="form-group text-center mb-0">
                  <input id="form_botcheck"  class="form-control" type="hidden" value="" />
                  <button data-loading-text="Please wait..." class="btn btn-colored btn-rounded btn-theme-colored pl-30 pr-30" type="submit">Confirm Booking
</button>
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

export default CareerCounselling