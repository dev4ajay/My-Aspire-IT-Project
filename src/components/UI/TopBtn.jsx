import React,{useState} from "react";
import { BiArrowToTop } from "react-icons/bi";
const TopBtn = () => {
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
        <a href="#" className="text-white">
          <BiArrowToTop className="rightTopIcon" onClick={scrollTop} style={{height: 35, display: showScroll ? 'flex' : 'none'}}/>
        </a>
      </div>
    </div>
  );
};

export default TopBtn;
