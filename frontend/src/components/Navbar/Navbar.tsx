import { Menu } from "lucide-react";
import Container from "../Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import React, { useRef, useState } from "react";
import MobileNavigation from "./MobileNavigation";
import AvatarNavigationDropDown from "./AvatarNavigationDropDown";

const Navbar = () => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] =
    useState<boolean>(false);

  const mobileNavigationRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutSide = (
    e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent
  ) => {
    if (mobileNavigationRef.current) {
      if (!mobileNavigationRef.current.contains(e.target as Node)) {
        setIsMobileNavigationOpen(false);
      }
    }
  };
  return (
    <header className="w-full border-b py-2.5 bg-base-100/80 backdrop-blur-lg border-base-300 z-10 sticky top-0">
      <Container className="relative">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation />

          {/* Sidebar Toggle */}
          <Menu
            className="transition-all duration-300 cursor-pointer md:hidden size-6 hover:text-primary"
            onClick={() => setIsMobileNavigationOpen(true)}
          />

          {/* Avatar */}
          <AvatarNavigationDropDown />
        </nav>
      </Container>

      {/* Mobile Navigation  */}
      <MobileNavigation
        isMobileNavigationOpen={isMobileNavigationOpen}
        setIsMobileNavigationOpen={setIsMobileNavigationOpen}
        handleClickOutSide={handleClickOutSide}
        mobileNavigationRef={mobileNavigationRef}
      />
    </header>
  );
};

export default Navbar;
