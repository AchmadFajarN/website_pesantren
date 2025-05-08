import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { animateFunc } from "../../utils";

const HeroHomepage = () => {
  return (
    <section className="h-screen relative flex flex-col justify-center items-center">
      <motion.p
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.5).transition}
        className="text-2xl sm:text-3xl text-center font-bold text-green-700 md:text-5xl lg:text-6xl"
      >
        Selamat Datang di ponpes
      </motion.p>
      <motion.p
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.6).transition}
        className="text-lg sm:text-xl font-bold text-yellow-600 md:text-2xl lg:text-3xl md:mt-4"
      >
        Nurul Hikmah Assalafiyyah
      </motion.p>
      <motion.p
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.7).transition}
        className="text-center text-xs mt-8 font-semibold text-yellow-600 md:text-xl"
      >
        Tempat belajar, tumbuh, dan mendekat kepada Allah.
      </motion.p>
      <motion.p
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.7).transition}
        className="text-center text-xs font-semibold text-yellow-600 md:text-xl"
      >
        Ayo mondok, raih ilmu dan akhlak mulia bersama kami.
      </motion.p>

      <Link className="mt-8" to={"/pendaftaran"}>
        <motion.p
          initial={animateFunc().initial}
          whileInView={animateFunc().animate}
          transition={animateFunc().transition}
          className="border-2 border-transparent bg-green-700 rounded-sm px-4 py-2 text-yellow-200 font-semibold hover:bg-transparent hover:text-green-700 hover:border-green-700 transition-all duration-300 ease-in-out"
        >
          Info Pendaftaran?
        </motion.p>
      </Link>
      <a href="" className="absolute bottom-14 text-green-700 animate-bounce" >
        <ArrowDown className="" />
      </a>
    </section>
  );
};

export default HeroHomepage;
