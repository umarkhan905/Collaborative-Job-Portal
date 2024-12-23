import {
  BriefcaseBusiness,
  Building,
  CircleDollarSign,
  Headset,
  Home,
  LogIn,
  LogOut,
  Search,
  Settings,
  User,
  X,
} from "lucide-react";
import React, { act, Fragment } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "./Logo";

type MobileNavigationProps = {
  isMobileNavigationOpen: boolean;
  setIsMobileNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileNavigationRef: React.RefObject<HTMLDivElement>;
  handleClickOutSide: (e: any) => void;
  activeNavLink: string;
  setActiveNavLink: React.Dispatch<React.SetStateAction<string>>;
};

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isMobileNavigationOpen,
  setIsMobileNavigationOpen,
  mobileNavigationRef,
  handleClickOutSide,
  activeNavLink,
  setActiveNavLink,
}) => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "recruiter",
    profilePicture: "https://randomuser.me/api/portraits/lego/1.jpg",
  };
  // const user = null;

  const navLinks = [
    {
      name: "Home",
      icon: Home,
      link: "/",
      activeText: "home",
      active: activeNavLink === "home",
      showNavLink: true,
    },
    {
      name: "Fid Jobs",
      icon: CircleDollarSign,
      link: "/jobs",
      activeText: "jobs",
      active: activeNavLink === "jobs",
      showNavLink: true,
    },
    {
      name: "Companies",
      icon: Building,
      link: "/companies",
      activeText: "companies",
      active: activeNavLink === "companies",
      showNavLink: true,
    },
    {
      name: "Candidates",
      icon: User,
      link: "/candidates",
      activeText: "candidates",
      active: activeNavLink === "candidates",
      showNavLink: true,
    },
    {
      name: "Pricing",
      icon: CircleDollarSign,
      link: "/pricing",
      activeText: "pricing",
      active: activeNavLink === "pricing",
      showNavLink: true,
    },
    {
      name: "Contact",
      icon: Headset,
      link: "/contact",
      activeText: "contact",
      active: activeNavLink === "contact",
      showNavLink: true,
    },
    {
      name: "Login as recruiter",
      icon: LogIn,
      link: "/login",
      activeText: "login",
      active: activeNavLink === "login",
      showNavLink: !user,
    },
    {
      name: "Login as candidate",
      icon: AiOutlineLogin,
      link: "/login",
      activeText: "login",
      active: activeNavLink === "login",
      showNavLink: !user,
    },
  ];
  return (
    <div
      className={`${
        isMobileNavigationOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } absolute inset-0 z-20 w-full h-dvh bg-black/50 transition-all duration-300 block md:hidden`}
      onClick={handleClickOutSide}
    >
      <div
        className={`w-fit min-w-[40%] h-full border-r bg-base-100 border-base-300 ${
          isMobileNavigationOpen ? "translate-x-0" : "translate-x-[-200%]"
        } duration-300 transition-all`}
        ref={mobileNavigationRef}
      >
        <div className="relative flex flex-col h-full p-2">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Logo />

              {/* Close Button */}
              <button
                className="size-6 hover:text-primary "
                onClick={() => setIsMobileNavigationOpen(false)}
              >
                <X />
              </button>
            </div>

            {/* Navigation */}
            <ul className="flex flex-col gap-2 mt-4">
              {navLinks &&
                navLinks.map((navLink) => (
                  <Fragment key={navLink.name}>
                    {navLink.showNavLink && (
                      <li
                        className={`${
                          navLink.active ? "text-primary bg-base-300" : ""
                        } transition-all duration-300 hover:text-primary hover:bg-base-300/80 w-full p-2 rounded-md`}
                        onClick={() => setActiveNavLink(navLink.activeText)}
                      >
                        <Link
                          to={navLink.link}
                          className="flex items-center gap-2"
                        >
                          <navLink.icon className="size-5" />
                          {navLink.name}
                        </Link>
                      </li>
                    )}
                  </Fragment>
                ))}
            </ul>
          </div>
          {user && (
            <div className="flex items-center gap-3 p-1 rounded-md bg-base-300">
              <div className="dropdown dropdown-top">
                <img
                  src={user?.profilePicture}
                  className="object-cover rounded-full cursor-pointer size-9"
                  alt="Profile Picture"
                  tabIndex={1}
                />
                <ul
                  tabIndex={1}
                  className="dropdown-content menu bg-base-100 border border-primary/20 z-[1] mb-2.5"
                >
                  <li className="">
                    <Link to="/profile" className="hover:text-primary">
                      <User className="size-4" />
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="hover:text-primary">
                      <Settings className="size-4" />
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout" className="hover:text-primary">
                      <LogOut className="size-4" />
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-primary">
                  {user?.name}
                </span>
                <span className="text-sm">{user?.email}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
