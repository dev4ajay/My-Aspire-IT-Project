import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const OfflineAdmission = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
}, [])
  return (
   <>
   <Navbar />
    <div>
                      <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>

<div class="container mt-5 mb-4">
       
       <div class="row">
         <div class="col-xs-12 col-sm-6 col-md-4 pb-sm-20">
           <h4 class="title mb-30 line-bottom">How to get (Offline) Application Form? </h4>
           <ul class="list-border-bottom no-padding p-0">
             <li>
              
               <p align="justify">Aspire IIT & Medical The Application Form can be received by hand from any of our Branches, if it is being requested to the counselor at the institute. OR The Application Form can be received by Post from the Branch Office at Shimla, if you have requested on Phone, or e-mail to us. OR And it can also be downloaded from our website by clicking on Download Application Form. download Application Form</p>
             </li>
             
             
           </ul>
          
         </div>
         <div class="col-xs-12 col-sm-6 col-md-4 pb-sm-20">
           <h4 class="title mb-30 line-bottom">How to deposit Application Form?</h4>
           <ul class="list-border-bottom no-padding p-0">
             <li>
              
               <p align="justify">The envelope containing Offline Application Form with last annual exams’ mark sheets, four recent passport size photographs and Demand Draft for particular course can be submitted at Front-office directly by hand at any of the Branches, of your choice. OR The Application Form with required document can be sent by Registered Post / Speed Post / Courier to: <strong>Aspire Academy, Near HDFC Bank Phase-III BCS New Shimla-171009 Himachal Pradesh</strong>, so that it reaches us on time.</p>
             </li>
            
           </ul>
          
         </div>
         <div class="col-xs-12 col-sm-6 col-md-4 pb-sm-20">
           <h4 class="title mb-30 line-bottom">How to Pay Offline</h4>
           <ul class="list-border-bottom no-padding p-0">
             <li>
               
               <p align="justify">Pay through a Demand Draft (DD) of any Nationalized Bank: The Demand Draft is to be made in favor of ‘Aspire IIT & Medical CLASSES’. Pay through Credit Card / Debit Card: You have to carry your Credit card / Debit card and pay your (student’s) Course fee in your Study Centre.<br />

<strong>Note:</strong> Applicant must write the details of his/her payment on the back side of Demand Draft viz., Student name, Father's name, Course name & Phone number.</p>
             </li>
            
           </ul>
         
         </div>
       </div>
     </div>
    </div>
    <Footer />
   </>
  )
}

export default OfflineAdmission