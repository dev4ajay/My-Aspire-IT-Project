import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const Neettestseries = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
  return (
  <>
  <Navbar />
  <section>
              <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>

        <div className='container mt-4 mb-4'>
          <div class="col-xs-12 col-sm-8 col-md-8 pl-20 pl-sm-15">
              <div>
                <h3 class="mt-0"> MEDICAL</h3>
                <h5 class="text-theme-colored">NEET Test Series  - Courses Offered</h5>
				
                <p align="justify">The course is designed to nurture students for success in IIT-JEE Mains and Advanced / NEET with deep understanding of concepts in physics, chemistry, Mathematicsematics/biology with focus on Board Exams as well.



 </p>
                <hr />
                
              </div>
              <div class="mt-30">
              
                <ul class="list theme-colored angle-double-right m-0">
                  
                  <li><strong>	Classes on 6 days per week</strong>  </li>
				   
				    <li><strong>Regular Doubt Classes</strong> </li>
					 <li><strong>Personal mentoring with faculty members </strong>  </li>
					  <li><strong>Regular review tests onJEE/NEET patterns </strong>  </li>
					   <li><strong>Parallel preparation for school/NCERT curriculum and regular Board pattern tests</strong>   </li>
					   <li><strong>Free enrolment to DedicatedJEE Mains and Advanced/NEET Test Series after course completion</strong>   </li>
					    
                </ul><br />
				 
				
				<h4 class="text-uppercase">ADMISSION :</h4>
              
                <h5 class="text-theme-colored">Direct Admission </h5>
				
				<hr />
				<br />
				<h4  class="text-uppercase">MEDIUM :</h4>
              
                <h5 class="text-theme-colored">English </h5>
				
				<hr />
				<br />
				 
				
				


				
				
				
               
               
              </div>
            </div>
    </div>
    </section>
    <Footer />
  </>
  )
}

export default Neettestseries