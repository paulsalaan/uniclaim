// icons
import { HiOutlineX, HiOutlineTicket } from "react-icons/hi";
import { RiPencilLine } from "react-icons/ri";
import { TbMessage2 } from "react-icons/tb";
import { LiaInfoCircleSolid } from "react-icons/lia";

//screens
import NavText from "../components/NavText";

//assets
import Logo from "../assets/images/uniclaim_logo.png";

//react-modules
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";

interface MobileSideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: MobileSideNavProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full z-50 bg-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-full md:hidden`}
    >
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-1">
          <img src={Logo} alt="uniclaim-logo" className="size-9" />
          <h1 className="font-albert-sans font-bold text-xl text-blue-950">
            <span className="text-brand">Uni</span>Claim
          </h1>
        </div>
        <HiOutlineX
          onClick={onClose}
          className="text-2xl cursor-pointer hover:text-brand transition-colors duration-300"
        />
      </div>

      {/* report-an-item-button */}
      <div className="ml-5 mt-1 space-y-8 font-manrope">
        <div className="w-fit">
          <div className="flex items-center justify-center bg-brand font-albert-sans gap-2 py-3 px-4 rounded-md hover:bg-teal-600 transition-colors duration-300">
            <RiPencilLine className="size-5" />
            <Link to="/" className="">
              Report an item
            </Link>
          </div>
        </div>

        {/* menu-nav-links */}
        <div className="">
          <p className="text-base font-semibold mb-4.5">Menu</p>
          <div className="space-y-7">
            <NavText
              icon={<HiOutlineHome className="size-7" />}
              label="Home"
              to="/mainhome"
            />
            <NavText
              icon={<HiOutlineTicket className="size-7 stroke-[1.5px]" />}
              label="My Tickets"
              to="/mytickets"
            />
            <NavText
              icon={<TbMessage2 className="size-7 stroke-[1.5px]" />}
              label="Message"
              to="/mytickets"
            />
            <NavText
              icon={<HiOutlineTicket className="size-7 stroke-[1.5px]" />}
              label="Reach Us"
              to="/mytickets"
            />
          </div>

          <p className="text-base font-semibold mt-8 mb-4.5">Know More</p>
          <div className="space-y-7">
            <NavText
              icon={<LiaInfoCircleSolid className="size-7" />}
              label="About UniClaim"
              to="/mainhome"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
