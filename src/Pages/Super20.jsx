import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const Super20 = () => {
   React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
    return (
        <>  
        <Navbar />
        <div>
     <img src={require("../Assets/img/slider-1.jpg")} width='100%'></img>

            <div class="container mt-4 mb-5">
                <div class="row">

                    <div class="col-md-10 col-md-push-1">
                        <div id="section-one" class="mb-50">

                            <div id="section-two" class="mb-50">
                                <h3>Super 20 <br />सुपर 20</h3>
                                <h3>Exam Date: 12<sup>th</sup> Feb,  19<sup>th</sup> Feb,  26<sup>th</sup> Feb</h3>
                                <a class="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30" href="https://forms.gle/i2SKhVcCmPAGs9fz9" target="_blank">Super 20 Registration</a><br />
                                <hr />
                                <p class="mb-20" align="justify">

                                    This initiative is to identify the 20 meritorious students across Himachal those who are financially weak. These 20 meritorious students will be identified from Class XII (Med and Non Med) and after completion of their 12th exam and they will be given free offline coaching classes for one year along with free hostel accommodation. The cost to facilitate these students is approx. 60 lakhs which will be borne by Aspire Academy.<br />
                                    यह पहल पूरे हिमाचल में उन 20 मेधावी छात्रों की पहचान करने के लिए है जो आर्थिक रूप से कमजोर हैं। इन 20
                                    मेधावी छात्रों की पहचान बारहवीं कक्षा (मेड और नॉन मेड) से की जाएगी और उनकी 12 वीं की परीक्षा पूरी होने के
                                    बाद उन्हें एक वर्ष के लिए मुफ्त छात्रावास के आवास के साथ-साथ मुफ्त ऑफ़लाइन कोचिंग कक्षाएं दी जाएंगी।
                                    इन छात्रों की सुविधा के लिए लागत लगभग है। 60 लाख जो एस्पायर अकादमी द्वारा वहन किया जाएगा।
</p>

                                    <h4>The selection process for this special batch is mentioned as below:<br />इस विशेष बैच के लिए चयन प्रक्रिया नीचे दी गई है:</h4>

                                    1. The candidate has to appear for Super 20.<br />
                                    उम्मीदवार को सुपर20 के लिए उपस्थित होना होगा।<br />

                                    2. 500 Top Performer students in BOH will be invited for second round test.<br />
                                    बीओएच में 500 शीर्ष प्रदर्शन करने वाले छात्रों को दूसरे दौर की परीक्षा के लिए आमंत्रित किया जाएगा।<br />
                                    3. Top 100 students will be invited for final documentation screening and final interview round, from which THE SUPER 20 will be selected.<br />
                                    टॉप 100 छात्रों को फाइनल डॉक्यूमेंटेशन स्क्रीनिंग और फाइनल इंटरव्यू राउंड के लिए आमंत्रित किया
                                    जाएगा, जिसमें से सुपर 20 का चयन किया जाएगा।


                                    <hr />
                                    <h4>ELIGIBILITY <br />पात्रता</h4>



                                    <i class="fa fa-check-square"></i> The student is of class 12 (Medical/Non-Medical)<br />
                                    छात्र कक्षा 12 (चिकित्सा/गैर-चिकित्सा) का है<br />
                                    <br />
                                    <hr />

                                        <h4>HOW TO APPLY FOR SUPER20?<br />सुपर20 के लिए आवेदन कैसे करें?</h4>
                                        You can apply for Super 20 Examination for free; if you are of Class twelve (Medical/Non-Medical)<br />आप सुपर 20 परीक्षा के लिए नि:शुल्क आवेदन कर सकते हैं; यदि आप बारहवीं कक्षा के हैं (मेडिकल/नॉन-
                                        मेडिकल) <br />


                                        <hr />
                                        <iframe width="560" height="515" src="https://www.youtube.com/embed/pSQBp1BI9DA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                        <center><a class="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30" href="https://www.youtube.com/watch?v=pSQBp1BI9DA&feature=youtu.be" target="_blank">एस्पायर सुपर 20 में भाग लेने का सुनहरा मौका →</a></center><br />
                                    </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </>
      
            )
}

            export default Super20