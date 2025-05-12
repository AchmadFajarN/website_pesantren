import React from "react";
import { motion } from "motion/react";
import { animateFunc } from "../../utils";

const QuoteHomepage = () => {
  return (
    <div className="my-20 flex flex-col items-center justify-center p-4 rounded-md max-w-xl container mx-auto">
      <motion.h1
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.7).transition}
        className="text-xl md:text-4xl text-green-700 font-bold"
      >
        لَا تَرَحَ عِلْمًا وَ تَتْرَكَ التَّعَب
      </motion.h1>
      <motion.p 
      initial={animateFunc().initial}
      whileInView={animateFunc().animate}
      transition={animateFunc(0.9).transition}
      className="text-center mt-4 md:mt-8 text-yellow-600 font-semibold">
        <i>
          "Jangan Menginginkan suatu ilmu, jika tak mau bersusah payah (untuk
          mendapatkannya)"
        </i>
      </motion.p>
    </div>
  );
};

export default QuoteHomepage;
