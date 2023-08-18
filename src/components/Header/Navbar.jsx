import React from "react";
import CenterNav from "../UI/CenterNav";
import TopNav from "../UI/TopNav";
import TopNavRes from "../UI/TopNavRes";
import MainNav from "./MainNav";

const Navbar = () => { React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
  return (
    <>
      <TopNav />
      <TopNavRes/>
      {/* <CenterNav /> */}
      <MainNav />
      
    </>
  );
};

export default Navbar;
