import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Fid Jobs",
      link: "/jobs",
    },
    {
      name: "Companies",
      link: "/companies",
    },
    {
      name: "Candidates",
      link: "/candidates",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="items-center hidden gap-4 md:flex">
      {navLinks &&
        navLinks.map((navLink) => (
          <NavLink
            to={navLink.link}
            className={({ isActive }: { isActive: boolean }) =>
              `transition-all duration-300 hover:text-primary ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            {navLink.name}
          </NavLink>
        ))}
    </div>
  );
};

export default Navigation;
