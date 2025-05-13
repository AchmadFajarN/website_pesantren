import React from "react";
import { motion } from "motion/react";
import { animateFunc } from "../../utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CardBgTrsnp from "./CardBgTrsnp";
import { keunggulan } from "../../utils";
import QuoteHomepage from "./QuoteHomepage";
import Underline from "./Underline";

const SectionHomepage = () => {
  return (
    <section id="sectionHomepage" className="my-[10rem]">
      <motion.h1
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.5).transition}
        className="font-bold text-green-700 text-xl"
      >
        Sekilas Tentang Kami
      </motion.h1>
      <Underline />
      <QuoteHomepage />
      <div className="mx-auto mt-[10rem] px-4">
        <motion.h2
          initial={animateFunc().initial}
          whileInView={animateFunc().animate}
          transition={animateFunc(0.5).transition}
          className="text-3xl font-semibold text-green-700 text-center mb-4"
        >
          Dengan Ilmu dan Adab, Meniti Masa Depan
        </motion.h2>
        <motion.p
          initial={animateFunc().initial}
          whileInView={animateFunc().animate}
          transition={animateFunc(0.6).transition}
          className="text-yellow-600 font-bold text-center mb-12 max-w-2xl mx-auto"
        >
          Pesantren kami menggabungkan pembelajaran agama dan umum dalam suasana
          Islami yang mendidik dan membentuk karakter.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {keunggulan.map((item, index) => (
            <CardBgTrsnp key={index} textColor={'text-yellow-600'} index={index} item={item} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={animateFunc(1).transition}
          className="group inline-block"
        >
          <Link to={"/profile"} className="flex items-center gap-2 mt-20">
            <p className=" text-green-700 font-bold">
              Kenali lebih tentang kami
            </p>
            <ArrowRight className="text-green-700" />
          </Link>
          <span className="inline-block h-[2px] bg-green-700 w-full scale-x-0 group-hover:scale-[1] origin-left transition-transform ease-in-out duration-200"></span>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionHomepage;
