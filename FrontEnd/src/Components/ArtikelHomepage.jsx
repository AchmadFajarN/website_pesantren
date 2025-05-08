import React from "react";
import CardArtikel from "./CardArtikel";
import Underline from "./Underline";
import { getAllData } from "../../utils";
import { motion } from "motion/react";
import { animateFunc } from "../../utils";

const ArtikelHomepage = () => {
  const data = getAllData();
  return (
    <div className="my-10">
      <motion.h1
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.5).transition}
        className="font-bold text-xl text-green-700"
      >
        Artikel Pilihan
      </motion.h1>
      <Underline />
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((data, index) => {
          return <CardArtikel key={index} data={data} transitionAnimate={`0.${5 + index}`} />;
        })}
      </div>
    </div>
  );
};

export default ArtikelHomepage;
