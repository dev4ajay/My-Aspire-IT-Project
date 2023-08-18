import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import TopBtn from "./components/UI/TopBtn";
import AboutUs from "./Pages/AboutUs";
import ADMISSION from "./Pages/ADMISSION";
import AlUMNI from "./Pages/AlUMNI";
import BOH from "./Pages/BOH";
import CAMPUSLIFE from "./Pages/CAMPUSLIFE";
import Courses from "./Pages/Courses";
import EVENTS from "./Pages/EVENTS";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import StudentReport from "./Pages/StudentReport";
import StudentZone from "./Pages/StudentZone";
import Carrier from "./Pages/Caarier";
import Discipline from "./Pages/Discipline";
import AspireAlumni from "./Pages/AspireAlumni";
import News from "./Pages/News.jsx";
import Media from "./Pages/Media.jsx";
import Photos from "./Pages/Photos.jsx";
import ENQUIRY from "./Pages/ENQUIRY.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Introduction from "./Pages/Introduction";
import DirectorMessage from "./Pages/DirectorMessage";
import WhyChooseAspire from "./Pages/WhyChooseAspire";
import TeachingMethodology from "./Pages/TeachingMethodology";
import Reviews from "./Pages/Reviews";
import CareerCounselling from "./Pages/CareerCounselling";
import SuggestionFeedback from "./Pages/Suggestion&Feedback";
import Engineering from "./Pages/Engineering";
import MedicalResults from "./Pages/MedicalResults";
import Foundation from "./Pages/Foundation";
import KVPY from "./Pages/KVPY";
import ResultNTSE from "./Pages/Result-NTSE";
import VIDEO from "./Pages/VIDEO";
import Iitjeetarget from "./Pages/Iit-jee-target";
import Iitjeecrashcourses from "./Pages/Iit-jee-crash-courses";
import Iitjeetestseries from "./Pages/Iit-jee-test-series";
import Neettarget from "./Pages/Neet-target";
import Neetcrashcourses from "./Pages/Neet-crash-courses";
import Neettestseries from "./Pages/Neet-test-series";
import Forclassvi from "./Pages/For-class-vi";
import Forclassvii from "./Pages/For-class-vii";
import Forclassviii from "./Pages/For-class-viii";
import ForClassIXandX from "./Pages/ForClassIXandX";
import ForClassX from "./Pages/ForClassX";
import KVPYMedical from "./Pages/KVPY-Medical";
import KVPYEngineering from "./Pages/KVPY-Engineering";
import Resultneet202021 from "./Pages/Result-neet-2020-21";
import Iitjeetwoyears from "./Pages/Iit-jee-two-years";
import Neettwoyears from "./Pages/Neet-two-years";
import Resultneet2021 from "./Pages/Result-neet-2021";
import Resultneet2022 from "./Pages/Result-neet-2022";
import Resultneet2020 from "./Pages/Result-neet-2020";
import Resultneet2019 from "./Pages/Result-neet-2019";
import Resultneet2015 from "./Pages/Result-neet-2015";
import Resultneet2018 from "./Pages/Result-neet-2018";
import Resultneet2017 from "./Pages/Result-neet-2017";
import Resultneet2016 from "./Pages/Result-neet-2016";
import Resultjee2018 from "./Pages/Result-jee-2018";
import Resultjee2019 from "./Pages/Result-jee-2019";
import Resultjee2020 from "./Pages/Result-jee-2020";
import Resultjee2021 from "./Pages/Result-jee-2021";
import Resultjee2022 from "./Pages/Result-jee-2022";
import Resultjee2015 from "./Pages/Result-jee-2015";
import ResultJee2016 from "./Pages/Result-Jee-2016";
import Resultjee2017 from "./Pages/Resultjee2017";
import Admissionrule from "./Pages/Admission-rule";
import Onlineadmission from "./Pages/Online-admission";
import OfflineAdmission from "./Pages/OfflineAdmission";
import Feedepositionmode from "./Pages/Fee-deposition-mode";
import FEESTRUCTURE from "./Pages/FEE-STRUCTURE";
import Super20 from "./Pages/Super20";
import Navbar2 from "./components/UI/Navbar2";
import SSB from "./Pages/SSB";

import WhatsApp from "./components/UI/Whatsapp";
import SignIn from "./admin/Pages/SignIn";


// import GalleryImageAdd from "./admin/components/GalleryImageAdd";
function App() {
  return (
    <>
      <TopBtn />
      <WhatsApp />
      <BrowserRouter>
        <ToastContainer />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/introduction" element={<Introduction />}></Route>
          <Route path="/navbar2" element={<Navbar2 />}></Route>
          <Route
            path="/why-choose-Aspire"
            element={<WhyChooseAspire />}
          ></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route
            path="/Career-Counselling"
            element={<CareerCounselling />}
          ></Route>
          <Route path="/engineering" element={<Engineering />}></Route>
          <Route path="/video" element={<VIDEO />}></Route>
          <Route path="/medical-Results" element={<MedicalResults />}></Route>
          <Route path="/Foundation" element={<Foundation />}></Route>
          <Route path="/KVPY" element={<KVPY />}></Route>
          <Route path="/Neet-target" element={<Neettarget />}></Route>
          <Route
            path="/Neet-crash-courses"
            element={<Neetcrashcourses />}
          ></Route>
          <Route path="/Neet-test-series" element={<Neettestseries />}></Route>
          <Route path="/SSB" element={<SSB />}></Route>
          <Route path="/For-class-vi" element={<Forclassvi />}></Route>
          <Route path="/For-class-vii" element={<Forclassvii />}></Route>
          <Route path="/For-class-viii" element={<Forclassviii />}></Route>
          <Route path="/ForClassIXandX" element={<ForClassIXandX />}></Route>
          <Route path="/ForClassX" element={<ForClassX />}></Route>
          <Route path="/Result-NTSE" element={<ResultNTSE />}></Route>
          <Route path="/Foundation" element={<Foundation />}></Route>
          <Route path="/Foundation" element={<Foundation />}></Route>
          <Route
            path="/suggestion-feedback"
            element={<SuggestionFeedback />}
          ></Route>
          <Route
            path="/Teaching-Methodology"
            element={<TeachingMethodology />}
          ></Route>
          <Route path="/directorMessage" element={<DirectorMessage />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/Admission" element={<ADMISSION />}></Route>
          <Route path="/boh" element={<BOH />}></Route>
          <Route path="/campus-life" element={<CAMPUSLIFE />}></Route>
          <Route path="/events" element={<EVENTS />}></Route>
          <Route path="/alumni" element={<AlUMNI />}></Route>
          <Route path="/" element={<Results />}></Route>

          <Route path="/Super-20" element={<Super20 />}></Route>
          <Route path="/KVPYMedical" element={<KVPYMedical />}></Route>
          <Route path="/Admissionrule" element={<Admissionrule />}></Route>
          <Route path="/onlineAdmissiom" element={<Onlineadmission />}></Route>
          <Route
            path="/offliceAdmissiom"
            element={<OfflineAdmission />}
          ></Route>
          <Route
            path="/Feedepositionmode"
            element={<Feedepositionmode />}
          ></Route>
          <Route path="/FEESTRUCTURE" element={<FEESTRUCTURE />}></Route>
          <Route path="/KVPYEngineering" element={<KVPYEngineering />}></Route>
          <Route
            path="/Resultneet202021"
            element={<Resultneet202021 />}
          ></Route>
            <Route path="/Resultjee2017" element={<Resultjee2017 />}></Route>
          <Route path="/Resultjee2018" element={<Resultjee2018 />}></Route>
          <Route path="/Resultjee2019" element={<Resultjee2019 />}></Route>
          <Route path="/Resultjee2020" element={<Resultjee2020 />}></Route>
          <Route path="/Resultjee2021" element={<Resultjee2021 />}></Route>
          <Route path="/Resultjee2022" element={<Resultjee2022 />}></Route>
          <Route path="/Resultjee2015" element={<Resultjee2015 />}></Route>
          <Route path="/Resultjee2016" element={<ResultJee2016 />}></Route>
          <Route path="/Resultneet2019" element={<Resultneet2019 />}></Route>
          <Route path="/Resultneet2018" element={<Resultneet2018 />}></Route>
          <Route path="/Resultneet2017" element={<Resultneet2017 />}></Route>
          <Route path="/Resultneet2021" element={<Resultneet2021 />}></Route>
          <Route path="/Resultneet2020" element={<Resultneet2020 />}></Route>
          <Route path="/Resultneet2022" element={<Resultneet2022 />}></Route>
          <Route path="/Resultneet2016" element={<Resultneet2016 />}></Route>
          <Route path="/Resultneet2015" element={<Resultneet2015 />}></Route>
          <Route path="/Iitjeetwoyears" element={<Iitjeetwoyears />}></Route>
          <Route path="/Neettwoyears" element={<Neettwoyears />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/studentZone" element={<StudentZone />}></Route>
          <Route path="/studentReport" element={<StudentReport />}></Route>
          <Route path="/caarier" element={<Carrier />}></Route>
          <Route path="/Discipline" element={<Discipline />}></Route>
          <Route path="/aspire-alumni" element={<AspireAlumni />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/Photos" element={<Media />}></Route>
          <Route path="/iit-jeet-target" element={<Iitjeetarget />}></Route>
          <Route
            path="/iit-jee-crash-courses"
            element={<Iitjeecrashcourses />}
          ></Route>
          <Route
            path="/Iit-jee-test-series"
            element={<Iitjeetestseries />}
          ></Route>
          <Route path="/media" element={<Photos />}></Route>
          <Route path="/ENQUIRY" element={<ENQUIRY />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          {/* Admin Router */}

          {/* <Route path="/admin/sign-in" element={<SignIn />}></Route> */}
          {/* Admin Router Close */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
