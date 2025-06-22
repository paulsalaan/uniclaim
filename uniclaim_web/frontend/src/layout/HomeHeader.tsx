import { HiOutlineMenuAlt2, HiOutlineBell, HiOutlineX } from "react-icons/hi";
import Logo from "../assets/uniclaim_logo.png";
import { useState } from "react";

interface HomeHeaderProps {
  sideNavClick: () => void;
  sideBarOpen: boolean;
}

export default function HomeHeader({
  sideBarOpen,
  sideNavClick,
}: HomeHeaderProps) {
  return (
    <>
      <div className="">
        {/* header-container */}
        <div className="">
          <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-navyblue px-5 py-4">
            {/* logo-w-text-container */}
            <div className="flex items-center gap-1">
              <img
                src={Logo}
                alt="logo_pic"
                className="size-10 hidden md:block"
              />
              {sideBarOpen && (
                <h1 className="hidden ml-1 font-albert-sans font-bold text-[23px] text-white transition-all duration-300 md:block">
                  <span className="text-brand">Uni</span>Claim
                </h1>
              )}
              {sideBarOpen ? (
                <HiOutlineMenuAlt2
                  onClick={sideNavClick}
                  className="size-8 ml-2 md:ml-17 text-white stroke-1 cursor-pointer hover:text-brand"
                />
              ) : (
                <HiOutlineMenuAlt2
                  onClick={sideNavClick}
                  className="size-8 md:ml-7 text-white stroke-[1.5px] cursor-pointer hover:text-brand"
                />
              )}
            </div>

            {/* notification-bell-w-profile-container */}
            <div className="flex items-center gap-4">
              <HiOutlineBell className="size-8 text-white stroke-[1.3px] cursor-pointer hover:text-brand" />
              <div className="bg-teal-100 rounded-full size-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
