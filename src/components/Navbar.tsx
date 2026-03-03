import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleSmoothSroll } from "../utils/util";

const FlipText = ({ text }: { text: string }) => (
  <>
    {text.split("").map((char, i) => (
      <span
        key={i}
        className="nav-flip-char"
        style={{ animationDelay: `${i * 0.08}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </>
);

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenu) => {
  return (
    <div className="w-screen flex justify-center lg:px-20 px-4 py-6 fixed bg-white z-50">
      <nav className="max-w-7xl w-full flex justify-between items-center text-xl">
        <Link to="/" className="font-bold cursor-pointer">
          Ruchit Patel
        </Link>

        {/* links  */}
        <div className="font-semibold lg:flex gap-8 items-center h-full hidden">
          <span
            onClick={() => {
              handleSmoothSroll(
                "skills",
                isMobileMenuOpen,
                setIsMobileMenuOpen,
              );
            }}
            className="nav-flip min-w-fit"
          >
            <FlipText text="Skills" />
          </span>
          <span
            onClick={() => {
              handleSmoothSroll(
                "experience",
                isMobileMenuOpen,
                setIsMobileMenuOpen,
              );
            }}
            className="nav-flip min-w-fit"
          >
            <FlipText text="Experience" />
          </span>
          <span
            onClick={() => {
              handleSmoothSroll("about", isMobileMenuOpen, setIsMobileMenuOpen);
            }}
            className="nav-flip min-w-fit"
          >
            <FlipText text="About Me" />
          </span>
          <span
            onClick={() => {
              handleSmoothSroll(
                "project",
                isMobileMenuOpen,
                setIsMobileMenuOpen,
              );
            }}
            className="nav-flip min-w-fit"
          >
            <FlipText text="Project" />
          </span>
          <span
            onClick={() => {
              handleSmoothSroll(
                "contact",
                isMobileMenuOpen,
                setIsMobileMenuOpen,
              );
            }}
            className="nav-flip min-w-fit"
          >
            <FlipText text="Contact" />
          </span>
        </div>

        {/* resume  */}
        <div className="group relative cursor-pointer lg:block hidden">
          <a
            href="./Ruchit_Resume.pdf"
            download="Ruchit Resume"
            className="flex justify-center items-center rounded bg-black py-4 px-5 h-fit font-semibold text-white gap-2 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          >
            Resume
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="white"
              />
            </svg>
          </a>
          <div className="w-full h-full border border-black rounded absolute bottom-0 right-0 pointer-events-none" />
        </div>

        <div
          onClick={() => {
            setIsMobileMenuOpen(true);
          }}
          className="lg:hidden"
        >
          <FaHamburger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
