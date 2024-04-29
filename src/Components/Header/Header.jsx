import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/image_prev_ui (2).png";
import { HiMenuAlt4 } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <>
      <div className="px-[16px] md:px-8 py-4 2xl:px-16 2xl:py-6">
        <div className="flex justify-between items-center mt-4 2xl:mt-3">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-36 h-auto 2xl:w-56" />
            </Link>
          </div>

          {/* Mobile Mode */}
          <div className="md:hidden">
            <HiMenuAlt4 className="text-white text-3xl" onClick={toggleMenu} />
          </div>

          {isOpen && (
            <div
              ref={dropdownRef}
              className="md:hidden absolute top-0 left-0 w-full bg-black p-4"
            >
              <div className="relative flex flex-col  mx-4 my-4 gap-4 py-5">
                <Link
                  to="/"
                  className="text-white text-xl 2xl:text-2xl font-semibold"
                >
                  Tools
                </Link>
                <div className="relative group ">
                  <Link
                    to="/"
                    className="text-white text-xl 2xl:text-2xl font-semibold"
                    
                  >
                    Support
                  </Link>

                  <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 hidden group-hover:block">
                    <Link to="" className="block px-4 py-2 text-gray-800">
                      Contact
                    </Link>
                    <Link to="/blogs" className="block px-4 py-2 text-gray-800">
                      Blogs
                    </Link>
                    <Link to="" className="block px-4 py-2 text-gray-800">
                      Tutorials
                    </Link>
                  </div>
                </div>
                <Link
                  to="/"
                  className="text-white text-xl 2xl:text-2xl font-semibold"
                >
                  Community
                </Link>
                <Link
                  to="/pricing"
                  className="text-white text-xl 2xl:text-2xl font-semibold"
                >
                  Pricing
                </Link>
              </div>
            </div>
          )}

          <div className="header-items hidden md:flex  lg:gap-16 md:gap-10 mt-2">
            <Link
              to="/"
              className="text-white md:text-sm lg:text-xl 2xl:text-2xl"
            >
              <span>Tools</span>
            </Link>
            <div className="relative group">
              <Link
                to=""
                className="text-white  md:text-sm  lg:text-xl 2xl:text-2xl"
                onMouseEnter={() => {
                  setIsOpen(true);
                }}
              >
                Support
              </Link>
              <div className="border border-cyan-100 absolute top-full  lg:ml-[-60px] w-[16rem] bg-black shadow-lg rounded-lg mt-2 hidden group-hover:block">
                <Link to="/blogs" className="block px-4 py-2 text-white ">
                  <div className="flex  hover:bg-white hover:text-black hover:rounded-xl">
                    <div className="text-4xl">
                      <CgFileDocument />
                    </div>
                    <div className="block">
                      <h1 className="text-sm mx-2">Blogs</h1>
                      <p className="text-[10px] mx-2 mt-1">
                        Discover more on our blog
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/tutorials" className="block px-4 py-2 text-white ">
                  <div className="flex  hover:bg-white hover:text-black hover:rounded-xl">
                    <div className="text-4xl">
                      <MdCastForEducation />
                    </div>
                    <div className="block">
                      <h1 className="text-sm mx-2">Tutorial</h1>
                      <p className="text-[10px] mx-2 mt-1">
                        Get insights of our impactful tools!
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/contact" className="block px-4 py-2 text-white ">
                  <div className="flex hover:bg-white hover:text-black hover:rounded-xl">
                    <div className="text-4xl">
                      <MdOutgoingMail />
                    </div>
                    <div className="block">
                      <h1 className="text-sm mx-2">Contact</h1>
                      <p className="text-[10px] mx-2 mt-1">
                        Connect with us via our contact page
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              to="/"
              className="text-white  md:text-sm  lg:text-xl 2xl:text-2xl"
            >
              <span>Community</span>
            </Link>
            <Link
              to="/pricing"
              className="text-white  md:text-sm lg:text-xl 2xl:text-2xl"
            >
              <span>Pricing</span>
            </Link>
          </div>

          <Link
            to="/"
            className="hidden md:block  rounded-full text-black font-bold md:text-lg lg:text-2xl 2xl:text-3xl md:px-5 md:py-1 lg:px-7 lg:py-2 2xl:px-9 2xl:py-4"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)",
            }}
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
