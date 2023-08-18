import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const ENQUIRY = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
    // console.log(ENQUIRYData)
    return (
     <>
     <Navbar />

     <section>
           <div>
              <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>
<div>
<div class="container pt-sm-10 pb-sm-30 mt-5 mb-5">
        <div class="row pt-30">
         
          <div class="col-md-8">
            <h4 class="mt-0 mb-20 line-height-1">Interested In Discussing?</h4>
            
            <form action="home-enquiry.php" onSubmit="return Validateroom(this)" method="post">

              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="form_name">Name <small>*</small></label>
                    <input  name="name" class="form-control" type="text" placeholder="Enter Name" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="form_email">Email <small>*</small></label>
                    <input name="email" class="form-control"  placeholder="Enter Email" />
                  </div>
                </div>
				 <div class="col-sm-6">
                  <div class="form-group">
                    <label for="form_name">Mobile <small>*</small></label>
                    <input  name="mobile" class="form-control"placeholder="Enter Mobile" />
                  </div>
                </div>
              </div>
             
				  
				   <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="form_name">Select Class<small>*</small></label>
                     <select name="class" class="form-control">
                                                <option value="" >Select Class</option>
                                                <option value="8th">8th</option>
                                                <option value="9th">9th</option>
                                                <option value="10th">10th</option>
                                                <option value="+1">+1</option>
                                                <option value="+2">+2</option>
                                              
                                            </select>
                  </div>
                </div>
                
				 <div class="col-sm-6">
                  <div class="form-group">
                    <label for="form_name">Select Stream<small>*</small></label>
                     <select  name="course" class="form-control">
	  <option value="" > Select Stream </option>
	<optgroup label="Medical">
		<option value="NEET">NEET</option>
		<option value="UG">UG</option>
		<option value="AIIMS">AIIMS</option>
		
	</optgroup>
	<optgroup label="IIT/JEE">
		<option value="MAIN">MAIN</option>
		<option value="Advance">Advance</option>
		 
	</optgroup>
	
	 <option value="Foundation"  ><strong>Foundation</strong></option>
     <option value="BOH"><strong>BOH</strong></option>
     <option value="NTSE"><strong>NTSE</strong></option>
      <option value="KVPY"><strong>KVPY</strong></option>
</select>
                  </div>
                </div>
              </div>  
			  
			   <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="form_name">State <small>*</small></label>
                    
					<input id="form_phone" name="sname" class="form-control" type="text" placeholder="Enter State" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="form_phone">City</label>
                    <input  name="cname" class="form-control"  placeholder="Enter City" />
                  </div>
                </div>
              </div>
			  
			  
			   <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="form_name">How do Come to Know About Aspire<small>*</small></label>
                     <select id="ddl_Course" name="aboutaspire" class="form-control">
                                                <option value="" >Select Your Option </option>
                                                <option value="X Aspire Student">X Aspire Student</option>
                                                <option value="Friend \ Relative">Friend \ Relative</option>
                                                <option value="Aspire Current Student">Aspire Current Student</option>
                                                <option value="Received Call From Aspire Representative">Received Call From Aspire Representative</option>
                                                <option value="Ads">Ads</option>
                                                <option value="Brain Of Himachal">Brain Of Himachal</option>
                                                <option value="Aspire Career">Aspire Career </option>
                                                <option value="By Internet">By Internet</option>
                                                <option value="By Google Ads">By Google Ads</option>
                                                <option value="Hoarding">Hoarding</option>
                                                <option value="Facebook Add"> Facebook Ads</option>
                                                <option value="FM Radio">FM Radio</option>
												<option value="Others">Others</option>
											   </select>
                  </div>
                </div>
                
              </div>
			  
			  
			  
			  

              <div class="form-group">
                <label for="form_name">Message</label>
                <textarea  name="msg" class="form-control " rows="5" placeholder="Enter Message"></textarea>
              </div>
              <div class="form-group">
                <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="" />
                <button type="submit" class="btn btn-dark btn-theme-colored btn-flat mr-5" data-loading-text="Please wait...">Send Your Message</button>
                <button type="reset" class="btn btn-default btn-flat btn-theme-colored">Reset</button>
              </div>
            </form>

           
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

export default ENQUIRY