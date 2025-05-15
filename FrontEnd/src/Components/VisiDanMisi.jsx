import React from "react";
import Underline from "./Underline";
import { misi } from "../../utils"; 
import CardBgTrsnp from "./CardBgTrsnp";
import { motion } from "motion/react";
import { animateFunc } from "../../utils";

const VisiDanMisi = () => {
  return (
    <section className="mt-20">
      <motion.h1 
      initial={animateFunc().initial}
      whileInView={animateFunc().animate}
      transition={animateFunc(0.6).transition}
      className="text-xl font-bold text-green-700">Visi</motion.h1>
      <Underline />
      <motion.h2 
      initial={animateFunc().initial}
      whileInView={animateFunc().animate}
      transition={animateFunc(0.7).transition}
      className="mt-10 text-green-700 font-bold text-2xl text-center">
        "Terciptanya Insan Kamil"
      </motion.h2>
      <motion.p 
      initial={animateFunc().initial}
      whileInView={animateFunc().animate}
      transition={animateFunc(0.8).transition}
      className="text-center mt-4 font-semibold text-yellow-600">
        (Beriman, berilmu, berahlakul karimah, berwawasan, dan berjiwa pesantren
        serta unggul)
      </motion.p>
      <motion.h1 
      initial={animateFunc().initial}
      whileInView={animateFunc().animate}
      transition={animateFunc(0.6).transition}
      className="mt-10 text-xl font-bold text-green-700">Misi</motion.h1>
      <Underline />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {
                misi.map((item, index) => {
                    return <CardBgTrsnp key={index} item={item} index={index} textColor={'text-green-700'} />
                })
            }
      </div>
    </section>
    
  );
};

export default VisiDanMisi;
