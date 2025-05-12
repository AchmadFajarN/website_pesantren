import React from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";

const Header = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const unscroll = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
    return () => unscroll();
  }, [scrollY]);
  const [navActive, setNavActive] = useState(false);
  const hamburgerActiveHandler = () => {
    setNavActive(!navActive);
  };
  return (
    <header className={`fixed ${scrolled? 'bg-white/80 backdrop-blur-md border-b-4 border-green-600 shadow-md' : 'bg-transparent'} w-full flex justify-between z-40 p-4 md:px-8 items-center`}>
      <motion.div
        initial={{ opacity: 0, translateX: -35 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3, ease: ["easeInOut"] }}
        className="flex justify-center items-center gap-2"
      >
        <img src={logo} alt="" className="min-w-12 w-12 max-h-14" />
        <h1 className="font-bold text-green-700">Ponpes Nurul Hikmah</h1>
      </motion.div>
      <HamburgerMenu
        hamburgerActive={navActive}
        hamburgerActiveHandler={hamburgerActiveHandler}
      />
      <nav
        className={`scale-0 opacity-0 absolute h-screen md:h-0 inset-0 z-10 md:static md:opacity-[1] md:scale-[1] transition-all duration-200 ease-in-out flex justify-center items-center bg-white/80 backdrop-blur-md ${
          navActive ? "scale-[1] opacity-[1]" : ""
        }`}
      >
        <ul className="flex flex-col items-center gap-4 md:flex-row">
          <motion.li
            onClick={hamburgerActiveHandler}
            initial={{ opacity: 0, translateX: 35 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, ease: ["easeInOut"] }}
          >
            <Link
              className="font-bold text-green-700 hover:text-green-900 transition-colors duration-300 ease-in-out"
              to={"/"}
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            onClick={hamburgerActiveHandler}
            initial={{ opacity: 0, translateX: 35 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, ease: ["easeInOut"] }}
          >
            <Link
              className="font-bold text-green-700 hover:text-green-900 transition-colors duration-300 ease-in-out"
              to={"/pendaftaran"}
            >
              Pendaftaran
            </Link>
          </motion.li>
          <motion.li
            onClick={hamburgerActiveHandler}
            initial={{ opacity: 0, translateX: 35 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, ease: ["easeInOut"] }}
          >
            <Link
              className="font-bold text-green-700 hover:text-green-900 transition-colors duration-300 ease-in-out"
              to={"/blog"}
            >
              Blog
            </Link>
          </motion.li>
          <motion.li
            onClick={hamburgerActiveHandler}
            initial={{ opacity: 0, translateX: 35 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, ease: ["easeInOut"] }}
          >
            <Link
              className="font-bold text-green-700 hover:text-green-900 transition-colors duration-300 ease-in-out"
              to={"/profile"}
            >
              Profile
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
