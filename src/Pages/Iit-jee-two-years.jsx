import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const Iitjeetwoyears = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
  return (
  <>
  <Navbar />
  <div>
              <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>

        <div className='container mt-4 mb-4 '>
        <div class="row">
           
            <div class="col-xs-12 col-sm-8 col-md-8 pl-20 pl-sm-15">
              <div>
                <h3 class="mt-0"> MEDICAL</h3>
                <h5 class="text-theme-colored">NEET Two Year Courses</h5>
				  <h5 class="text-theme-colored">Why Choose Two-Year Classroom Course For  NEET </h5>
                <p align="justify"><b>NEET GENESIS</b> is an exhaustive program for students currently studying in Class XI and would be appearing for NEET 2021, designed to inculcate the habit of conceptual learning in students. Spread over a span of 2 years the program is designed to help students transit smoothly from class 10th to 12th and build a strong grasp over the concepts of subjects like Biology, Chemistry and Physics.<br /><br />
Besides Classroom Session and comprehensive Course Material, Online Test Series will also be provided to students. This will help in assessing and improving their performance, besides introducing them to the pattern of the competitive examinations.

 </p>
                <hr />
                
              </div>
              <div class="mt-30">
                <h4 class="text-uppercase">TEACHING METHODOLOGY </h4>
              
                <h5 class="text-theme-colored">Preparation for Board Examination</h5>
                <ul class="list theme-colored angle-double-right m-0">
                  
                  <li><strong>	Classroom Teaching & NCERT Book Discussion</strong>  </li>
				   <li><strong>Clear Exam Board Worksheets (CBWs)</strong>   </li>
				    <li><strong>Smart Study Material (Sheets/Modules)</strong> </li>
					 <li><strong>Board Pattern Tests (BPTs) </strong>  </li>
					  <li><strong>Doubt Resolution Classes </strong>  </li>
					   <li><strong>Support for Practical (Physics & Chemistry)</strong>   </li>
					    
                </ul><br />
				
				
				<h4 class="text-uppercase">Preparation for JEE Main </h4>
              
                
                <ul class="list theme-colored angle-double-right m-0">
                  
                  <li><strong>Classroom Teaching</strong>  </li>
				   <li><strong>Daily Practice Problems (DP Ps)</strong>   </li><li><strong>Study Material</strong> </li>
					 <li><strong>Full-Length Tests (FLTs) </strong>  </li>
					  <li><strong>Part-Length Tests (PLTs) </strong>  </li>
					   <li><strong>Doubt Resolution Classes</strong>   </li>
					    
                </ul><br />
				
				
                <h4 class="mt-30 text-uppercase">Teaching/Learning Tools</h4>
                <ul class="list theme-colored angle-double-right m-0">
                  <li class="mt-0"><strong>Daily Practice Problems (DPPs): </strong><br /> A handout having problems for home assignment, practice and classroom discussion covering current and previous topics. A DPP for JEE Main has 7-10 problems. </li>
               
				  
				   <li><strong>Board Worksheet: </strong><br /> Questions onboard pattern with blank spaces (to write their answers) are provided to students in the form of worksheets. Students after completing the worksheet; have to submit it for evaluation. It ensures written practice of students for board examinations. </li>
				   
				   
				      <li><strong>Study Material (Sheets/Modules): </strong><br /> Topic wise study material having key concepts, problems for practice in various Exercise Levels and questions asked in previous years (Board/JEE Main). </li>
				   
				    <li><strong>Periodic Tests: </strong><br /> Periodic Tests designed according to the official test format serves as periodic milestones where students assess their performance throughout their preparation journey. These tests comprise of Topic-Syllabus Tests (TSTs), Part-Syllabus Tests(PSTs) and Full-Syllabus Tests (FSTs). All tests are conducted on the pattern of JEE Main in offline mode. Board Practice Tests(BPTs) are also conducted.</li>
					
					
					 <h4 class="mt-30 text-uppercase">WHY CHOOSE CE’S JEE MAIN COACHING CLASSES?</h4>
					
					
					 <li><strong>Get Taught by Best Faculties</strong><br /> Our tutors were in your shoes and were able to achieve your goals not by studying harder but by studying smarter.</li>
					 
					  <li><strong>Most Trusted Results</strong><br /> Clear Exam has been quite consistent with its performance when it comes to producing achievers. </li>
	
	
	  <li><strong>Mentored by Founders</strong><br /> Our faculty is always willing to clear doubts of students even individually and our focus is better resulting through conceptual clarity and constant support.</li>
	  
	  				  
					 
                </ul>
				
				
				
               
               
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer />
  </>
  )
}

export default Iitjeetwoyears