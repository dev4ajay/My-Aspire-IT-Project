import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Logo from "../Assets/img/logo.png";
export default function Header() {
  const [pageState, setPageState] = useState("Sign In");
  const [pageState2, setPageState2] = useState();
  const [pageState3, setPageState3] = useState();
  const [pageState4, setPageState4] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
        setPageState2("News");
        setPageState3("Notification");
        setPageState4("Image Upload");
      } else {
        setPageState("Sign In");
        setPageState2("");
        setPageState3("");
        setPageState4("");
      }
    });
  });
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div
      className="bg-white border-b shadow-sm sticky top-0 
  z-40"
    >
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto py-3">
        <div>
          <img
            src={Logo}
            alt="logo"
            className="h-11 cursor-pointer"
            onClick={() => navigate("/admin/profile")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            {/* <li
            className={` py-3 text-sm cursor-pointer font-semibold
          text-gray-400 border-b-[3px] border-b-transparent ${
            pathMathRoute("/offers") && "text-black border-b-red-500"
          }`}
            // onClick={() => navigate("/offers")}
          >
            Offers
          </li> */}
            <li
              className={` py-3 text-sm cursor-pointer font-semibold
          text-gray-400 border-b-[3px] border-b-transparent ${
            pathMathRoute("/admin/sign-in") ||
            (pathMathRoute("/admin/profile") && "text-black border-b-red-500")
          }`}
              onClick={() => navigate("/admin/profile")}
            >
              {pageState}
            </li>
            <li
              className={` py-3 text-sm cursor-pointer font-semibold
          text-gray-400 border-b-[3px] border-b-transparent ${
            pathMathRoute("/admin/sign-in") ||
            (pathMathRoute("/admin/news") && "text-black border-b-red-500")
          }`}
              onClick={() => navigate("/admin/news")}
            >
              {pageState2}
            </li>
            <li
              className={` py-3 text-sm cursor-pointer font-semibold
          text-gray-400 border-b-[3px] border-b-transparent ${
            pathMathRoute("/admin/sign-in") ||
            (pathMathRoute("/admin/profile") && "text-black border-b-red-500")
          }`}
              onClick={() => navigate("/admin/notification")}
            >
              {pageState3}
            </li>
            {/* <li
              className={` py-3 text-sm cursor-pointer font-semibold
          text-gray-400 border-b-[3px] border-b-transparent ${
            pathMathRoute("/admin/sign-in") ||
            (pathMathRoute("/admin/profile") && "text-black border-b-red-500")
          }`}
              onClick={() => navigate("/admin/profile")}
            >
              {pageState4}
            </li> */}
          </ul>
        </div>
      </header>
    </div>
  );
}
