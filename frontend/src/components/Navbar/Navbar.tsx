import { BriefcaseBusiness, Menu } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import AvatarNavigationDropDown from "./AvatarNavigationDropDown";
import Logo from "./Logo";

const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState<string>("home");
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] =
    useState<boolean>(false);
  const mobileNavigationRef = useRef<null | HTMLDivElement>(null);

  const handleClickOutSide = (e: any) => {
    if (mobileNavigationRef.current) {
      if (!mobileNavigationRef.current.contains(e.target as Node)) {
        setIsMobileNavigationOpen(false);
      }
    }
  };

  return (
    <header className=" py-2.5 border-b bg-base-100/80 w-dvw padding-x border-base-300 z-10 top-0 backdrop-blur-lg">
      <nav className="relative flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <Navigation
          activeNavLink={activeNavLink}
          setActiveNavLink={setActiveNavLink}
        />

        {/* Sidebar Toggle */}
        <Menu
          className="transition-all duration-300 cursor-pointer md:hidden size-6 hover:text-primary"
          onClick={() => setIsMobileNavigationOpen(true)}
        />

        {/* Avatar */}
        <AvatarNavigationDropDown />
      </nav>

      {/* Mobile Navigation  */}
      <MobileNavigation
        activeNavLink={activeNavLink}
        setActiveNavLink={setActiveNavLink}
        isMobileNavigationOpen={isMobileNavigationOpen}
        setIsMobileNavigationOpen={setIsMobileNavigationOpen}
        handleClickOutSide={handleClickOutSide}
        mobileNavigationRef={mobileNavigationRef}
      />
    </header>
  );
};

export default Navbar;
