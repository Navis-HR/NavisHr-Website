import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PublicIcon from "@mui/icons-material/Public";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { SvgIconComponent } from "@mui/icons-material";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo/Logo.png";
import { Link } from "react-router-dom";

interface NavItem {
  href: string;
  icon: SvgIconComponent;
  label: string;
  isHome?: boolean;
}

const navItems: NavItem[] = [
  { href: "/", icon: HomeOutlinedIcon, label: "Home" },
  { href: "/destination", icon: PublicIcon, label: "Destination" },
  { href: "/news", icon: NewspaperIcon, label: "News" },
  { href: "/navis-hr", icon: BusinessCenterOutlinedIcon, label: "NAVIS HR" },
  {
    href: "/join-navis-hr",
    icon: PeopleAltOutlinedIcon,
    label: "Join NAVIS HR",
  },
  { href: "/contact", icon: MailOutlinedIcon, label: "Contact" },
];

const NavBarItem: React.FC<
  NavItem & { onClick?: () => void; isActive: boolean }
> = ({ href, icon: Icon, label, onClick, isActive }) => (
  <a
    href={href}
    className={`flex items-center justify-between transition-colors duration-200 ${
      isActive ? "text-[#ff0008]" : "text-[#565e6c] hover:text-[#ff0008]"
    }`}
    onClick={onClick}
  >
    <span className="mr-2">
      <Icon />
    </span>
    {label}
  </a>
);

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full ${isSticky ? "fixed md:top-5 left-0 right-0 z-50" : ""}`}
    >
      <div
        className={`${
          isSticky ? "max-w-full" : "max-w-[1176px]"
        } mx-auto px-0 sm:px-6 md:px-4 lg:px-10 xl:px-24 transition-all duration-300`}
      >
        <div
          className={`h-[58px] md:rounded-full shadow-lg bg-white flex items-center justify-between px-4 sm:px-6 lg:px-8 text-[16px] leading-[26px] font-semibold ${
            isSticky ? "shadow-lg" : ""
          }`}
        >
          {/* Conditionally render logo when sticky */}
          {isSticky && (
            <div className="hidden md:flex items-center">
              <img src={Logo} alt="Logo" className="h-7" />
            </div>
          )}
          <div className="hidden md:flex items-center justify-between flex-grow space-x-2 lg:space-x-4 lg:px-9 xl:px-14">
            {navItems.map((item, index) => (
              <NavBarItem
                key={index}
                {...item}
                isActive={activeLink === item.href}
                onClick={() => handleLinkClick(item.href)}
              />
            ))}
          </div>
          <div className="md:hidden ml-auto flex items-center justify-between w-full">
            {/* Add logo to the left end */}
            <img src={Logo} alt="Logo" className="h-7" />
            {/* Menu icon on the right end */}
            <button onClick={toggleMenu} className="ml-auto">
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div
        className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-700 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 shadow-md"
        }`}
      >
        <div className="flex flex-col space-y-4 py-4 px-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`hover:text-[#ff0008] font-[500] flex items-center ${
                activeLink === item.href ? "text-[#ff0008]" : "text-[#565e6c]"
              }`}
              onClick={() => handleLinkClick(item.href)}
            >
              <span className="mr-2">
                <item.icon />
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
