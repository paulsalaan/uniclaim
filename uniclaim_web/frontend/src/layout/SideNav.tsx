import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineTicket,
  HiOutlineX,
  HiOutlinePencil,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import NavText from "./NavText";
import { TbMessage2 } from "react-icons/tb";
import { LiaInfoCircleSolid } from "react-icons/lia";
import Logo from "../assets/uniclaim_logo.png";
import { IoIosInformationCircleOutline } from "react-icons/io";
import clsx from "clsx";

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
  isSideNavMobileOpen: boolean;
  onMobNavClose: () => void;
}

export default function SideNav({
  isOpen,
  onClose,
  onMobNavClose,
  isSideNavMobileOpen,
}: SideNavProps) {
  return (
    <>
      <div className="flex">
        {/* sidenavbar-for-desktop */}
        <aside
          className={`fixed top-0 left-0 hidden bg-gray-100 text-black pt-22 px-4.5 h-full ${
            isOpen ? "w-57" : "w-21"
          } md:block`}
        >
          <div className="flex flex-col gap-2">
            <NavText
              icon={<HiOutlinePencil className="size-6 stroke-[1.5px]" />}
              label="Report an Item"
              to="/report"
              isOpen={isOpen}
              className={clsx(
                "bg-brand px-4 rounded-lg hover:bg-teal-600",
                isOpen && "my-1 mb-3"
              )}
              iconClassName="text-navyblue"
              textClassName="text-navyblue font-semi-bold font-albert-sans"
              tooltipIconClassName="text-navyblue text-xl"
              tooltipTextClassName="text-navyblue font-albert-sans font-semibold text-base"
              hoverContainerBgClass="bg-brand"
            />
            {isOpen && (
              <p className="text-sm font-manrope font-semibold">Menu</p>
            )}
            <NavText
              icon={<HiOutlineHome className="size-6 stroke-[1.5px]" />}
              label="Home"
              to="/report"
              isOpen={isOpen}
              className="mt-2 hover:bg-gray-200"
              iconClassName="text-black"
              textClassName="text-black font-albert-sans"
              tooltipIconClassName="text-navyblue text-xl"
              tooltipTextClassName="text-navyblue font-albert-sans text-base"
              hoverContainerBgClass="bg-gray-100"
            />
            <NavText
              icon={<HiOutlineTicket className="size-6 stroke-[1.5px]" />}
              label="My Tickets"
              to="/report"
              isOpen={isOpen}
              className="hover:bg-gray-200"
              iconClassName="text-black"
              textClassName="text-black font-albert-sans"
              tooltipIconClassName="text-navyblue text-xl"
              tooltipTextClassName="text-navyblue font-albert-sans text-base"
              hoverContainerBgClass="bg-gray-100"
            />
            <NavText
              icon={<TbMessage2 className="size-6 stroke-[1.5px]" />}
              label="Messages"
              to="/report"
              isOpen={isOpen}
              className="hover:bg-gray-200"
              iconClassName="text-black"
              textClassName="text-black font-albert-sans"
              tooltipIconClassName="text-navyblue text-xl"
              tooltipTextClassName="text-navyblue font-albert-sans text-base"
              hoverContainerBgClass="bg-gray-100"
            />
            <NavText
              icon={
                <HiOutlineLocationMarker className="size-6 stroke-[1.5px]" />
              }
              label="Know More"
              to="/report"
              isOpen={isOpen}
              className="hover:bg-gray-200"
              iconClassName="text-black"
              textClassName="text-black font-albert-sans"
              tooltipIconClassName="text-navyblue text-xl"
              tooltipTextClassName="text-navyblue font-albert-sans text-base"
              hoverContainerBgClass="bg-gray-100"
            />
          </div>
          {isOpen && (
            <p className="text-sm font-manrope font-semibold mt-6 mb-2">
              Know More
            </p>
          )}
          <NavText
            icon={
              <IoIosInformationCircleOutline className="size-6 stroke-[1px]" />
            }
            label="About UniClaim"
            to="/report"
            isOpen={isOpen}
            className="hover:bg-gray-200"
            iconClassName="text-black"
            textClassName="text-black font-albert-sans"
            tooltipIconClassName="text-navyblue text-xl"
            tooltipTextClassName="text-navyblue font-albert-sans text-base"
            hoverContainerBgClass="bg-gray-100"
          />
        </aside>

        {/* sidenavbar-for-mobile */}
        <div className="overflow-hidden">
          <aside
            className={`fixed top-0 left-0 z-50 bg-white text-black h-full transition-all duration-300 ease-in-out overflow-hidden ${
              isSideNavMobileOpen ? "w-full" : "w-0"
            } md:hidden`}
          >
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-1">
                <img src={Logo} alt="Logo" className="size-8" />
                <h1 className="font-albert-sans font-bold text-xl text-blue-950">
                  <span className="text-brand">Uni</span>Claim
                </h1>
              </div>
              <HiOutlineX
                className="w-6 h-6 cursor-pointer text-black hover:text-brand transition-color duration-300"
                onClick={onMobNavClose}
              />
            </div>

            {/* nav-links for mobile */}
            <div className="px-6 font-manrope">
              <div className="w-fit mt-2 mb-6">
                <div className="flex items-center justify-center bg-brand font-albert-sans gap-2 py-3 px-4 rounded-md hover:bg-teal-600 transition-colors duration-300">
                  <HiOutlinePencil className="size-5" />
                  <Link to="/" className="">
                    Report an item
                  </Link>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-base font-semibold mb-4.5">Menu</p>
                <NavText
                  icon={<HiOutlineHome className="size-6 stroke-[1.5px]" />}
                  label="Home"
                  to="/report"
                  isOpen={isOpen}
                  className="hover:bg-gray-50 rounded pl-4 justify-start"
                  iconClassName="text-black"
                  textClassName="font-manrope"
                />
                <NavText
                  icon={<HiOutlineTicket className="size-6 stroke-[1.5px]" />}
                  label="My Tickets"
                  to="/report"
                  isOpen={isOpen}
                  className="hover:bg-gray-50 rounded pl-4 justify-start"
                  iconClassName="text-black"
                  textClassName="font-manrope"
                />
                <NavText
                  icon={<TbMessage2 className="size-6 stroke-[1.5px]" />}
                  label="Message"
                  to="/report"
                  isOpen={isOpen}
                  className="hover:bg-gray-50 rounded pl-4 justify-start"
                  iconClassName="text-black"
                  textClassName="font-manrope"
                />
                <NavText
                  icon={
                    <HiOutlineLocationMarker className="size-6 stroke-[1.5px]" />
                  }
                  label="Reach Us"
                  to="/report"
                  isOpen={isOpen}
                  className="hover:bg-gray-50 rounded pl-4 justify-start"
                  iconClassName="text-black"
                  textClassName="font-manrope"
                />
              </div>

              <p className="text-base font-semibold mt-8 mb-4.5">Know More</p>
              <div className="space-y-7">
                <NavText
                  icon={
                    <IoIosInformationCircleOutline className="size-6 stroke-[1.5px]" />
                  }
                  label="About UniClaim"
                  to="/report"
                  isOpen={isOpen}
                  className="hover:bg-gray-50 rounded pl-4 justify-start"
                  iconClassName="text-black"
                  textClassName="font-manrope"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
