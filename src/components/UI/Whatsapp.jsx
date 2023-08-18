import React,{useState} from "react";
import { BsWhatsapp } from "react-icons/bs";
const WhatsApp = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)
  return (
    <div>
      <div>
        <a href="https://api.whatsapp.com/send?phone=+918894437018&text=Hello,%20team%20Aspire,%20I%20have%20a%20query" className="text-white">
          <BsWhatsapp className="LeftTopIcon" onClick={scrollTop} style={{height: 35, display: showScroll ? 'flex' : 'none'}}/>
        </a>
      </div>
    </div>
  );
};

export default WhatsApp;
