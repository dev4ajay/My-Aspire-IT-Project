import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const Onlineadmission = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
  return (
 <>
 <Navbar />
    <div>
                      <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>
                      <section id="contact" data-bg-img="images/pattern/p4.png"> 
      <div class="container">
        
        <div class="section-content">          
          <div class="row">
            <div class="col-md-12">
              <h4 class="text-uppercase text-center mt-4 mb-4"><span class="text-theme-colored">Online Registration </span> Form</h4>
            
              
              <form action="online-admission.php" onSubmit="return Validateroom(this)" method="post">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input  name="name" class="form-control" placeholder="Enter Name" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input  name="email" class="form-control" placeholder="Enter Email" />
                    </div>
                  </div>
				  
				  <div class="col-sm-6">
                    <div class="form-group">
                      <input name="mobile" class="form-control"  placeholder="Enter Mobile" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input  name="sname" class="form-control" placeholder="School Name" />
                    </div>
                  </div>
				  
				  <div class="col-sm-6">
                    <div class="form-group">
                      <input  name="pclass" class="form-control"  placeholder="Present Class" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input name="cname" class="form-control"  placeholder="City" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                     <select  name="course" class="form-control">
                                                <option value="" >--Select Course--</option>
                                                <option value="IIT JEE Two Years">IIT JEE Two Years</option>
                                                <option value="IIT JEE One Year">IIT JEE One Year</option>
                                                <option value="IIT JEE Target">IIT JEE Target</option>
                                                <option value="IIT JEE Crash Courses">IIT JEE Crash Courses</option>
                                                <option value="IIT JEE Test Series">IIT JEE Test Series</option>
                                                <option value="KVPY">KVPY</option>
                                                <option value="NEET Two Year Courses">NEET Two Year Courses</option>
                                                <option value="NEET One Year Courses">NEET One Year Courses</option>
                                                <option value="NEET Target Courses">NEET Target Courses</option>
                                                <option value="NEET Crash Courses">NEET Crash Courses</option>
                                                <option value="NEET Test Series">NEET Test Series</option>
                                                <option value="KVPY Medical">KVPY Medical</option>
                                                <option value="For Class VI">For Class VI</option>
												<option value="For Class VII">For Class VII</option>
											    <option value="For Class VIII">For Class VIII</option>
												<option value="For Class IX and X">For Class IX and X</option>
												<option value="For Class X">For Class X</option>

                                            </select>
                    </div>
                  </div>
				  
				   <div class="col-sm-6">
                    <div class="form-group">
                     <select  name="centre" class="form-control">
                                                <option value="" >--Select Centre--</option>
                                                <option value="Shimla">Shimla</option>
                                                <option value="Solan">Solan</option>
                                               

                                            </select>
                    </div>
                  </div>
                  
				  <div class="col-sm-7">
                                        <label class="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox1" name="mark" class="chk" value="Admission & Registration" /> Admission & Registration
                                        </label>
                                        <label class="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox2" name="mark" class="chk" value="Tuition Fee" /> Tuition Fee
                                        </label>
                                        <label class="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox3" name="mark" class="chk" value="Franchise Payment" /> Franchise Payment
                                        </label>
                                        <label class="checkbox-inline">
                                            <input type="checkbox" id="inlineCheckbox4" name="mark" class="chk" value="Others Payment" /> Others Payment
                                        </label>
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="form-group">
                                            <label class="sr-only" for="exampleInputAmount">Amount (in Rupees)</label>
                                            <div class="input-group">
                                                <div class="input-group-addon pr-5">INR</div>
                                                <input type="text" class="form-control"  name="rs" id="txtAmount" placeholder="Amount" />
                                                <div class="input-group-addon pr-5">.00</div>
                                            </div>
                                        </div>
                                    </div>
                </div>
                
                <div class="form-group text-center mb-0">
                  <input id="form_botcheck"  class="form-control" type="hidden" value="" />
                  <button data-loading-text="Please wait..." class="btn btn-colored btn-rounded btn-theme-colored pl-30 pr-30" type="submit">Send your message</button>
                </div>
              </form>
             

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

export default Onlineadmission