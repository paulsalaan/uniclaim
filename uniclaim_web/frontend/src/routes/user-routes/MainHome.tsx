import { useState, useEffect } from "react";

//screens
import SideNav from "../../layout/SideNav";
import Header from "../../layout/HomeHeader";
import Home from "../user-routes/HomePage";
import Footer from "../../layout/FooterComp";

export default function MainHome() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  // useEffect(() => {
  //   if (isSideBarOpen && window.innerWidth < 768) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isSideBarOpen]);

  return (
    <>
      <div className="flex">
        {/* side-nav-container */}
        <div
          className={`hidden transition-all duration-300 ${
            isSideBarOpen ? "md:basis-0" : "md:basis-0"
          } bg-red-100 md:block`}
        >
          <SideNav
            isOpen={isSideBarOpen}
            onClose={() => setIsSideBarOpen(false)}
            isSideNavMobileOpen={isSideBarOpen}
            onMobNavClose={() => setIsSideBarOpen(false)}
          />
        </div>
        <div>
          <SideNav
            isOpen={isSideBarOpen}
            onClose={() => setIsSideBarOpen(false)}
            isSideNavMobileOpen={isSideBarOpen}
            onMobNavClose={() => setIsSideBarOpen(false)}
          />
        </div>
        {/* header-footer-mainhome-container */}
        <div
          className={`flex-1 transition-all duration-300 w-full ${
            isSideBarOpen ? "md:ml-57" : "md:ml-21"
          } md:w-full`}
        >
          <div>
            <Header
              sideBarOpen={isSideBarOpen}
              sideNavClick={() => setIsSideBarOpen(!isSideBarOpen)} // toggles-open-and-close
            />
            {/* home-footer-container */}
            <div className="w-full scroll-smooth">
              <Home />
              <div
                className={`flex flex-col flex-1 transition-all duration-300 w-full ${
                  isSideBarOpen ? "md:ml-0 overflow-hidden" : "md:-ml-0"
                }`}
              >
                <Footer isOpen={isSideBarOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
