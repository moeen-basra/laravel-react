import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const Layout = () => {
     //console.log("layout", title)
     const [mobileNavsidebar, setMobileNavsidebar] = useState(false);
     


  return (
    <Fragment>
       <div className="flex bg-gray-100 min-h-screen relative">
        
          <Sidebar mobileNavsidebar={mobileNavsidebar} />
          
          <div className="flex-grow text-gray-800">
          <Header mobileNavsidebar={mobileNavsidebar} setMobileNavsidebar={setMobileNavsidebar} />
              <Outlet/>
          </div>

        <Footer />
      </div> 
        

    </Fragment>
  );
};
