import React from "react";
import { Link } from "react-router-dom";

type Props = {
  activeNavLink: string;
  setActiveNavLink: React.Dispatch<React.SetStateAction<string>>;
};

const Navigation: React.FC<Props> = ({ activeNavLink, setActiveNavLink }) => {
  const navLinks = [
    {
      name: "Home",
      link: "/",
      activeText: "home",
      active: activeNavLink === "home",
    },
    {
      name: "Fid Jobs",
      link: "/jobs",
      activeText: "jobs",
      active: activeNavLink === "jobs",
    },
    {
      name: "Companies",
      link: "/companies",
      activeText: "companies",
      active: activeNavLink === "companies",
    },
    {
      name: "Candidates",
      link: "/candidates",
      activeText: "candidates",
      active: activeNavLink === "candidates",
    },
    {
      name: "Pricing",
      link: "/pricing",
      activeText: "pricing",
      active: activeNavLink === "pricing",
    },
    {
      name: "Contact",
      link: "/contact",
      activeText: "contact",
      active: activeNavLink === "contact",
    },
  ];

  return (
    <ul className="items-center hidden gap-4 md:flex">
      {navLinks &&
        navLinks.map((navLink) => (
          <li
            className={`${
              navLink.active ? "text-primary" : ""
            } transition-all duration-300 hover:text-primary`}
            onClick={() => setActiveNavLink(navLink.activeText)}
          >
            <Link to={navLink.link}>{navLink.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Navigation;
