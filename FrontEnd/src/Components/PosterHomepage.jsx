import React from "react";
import posterImage from "../assets/image/fotoSesi8.jpg";
import Underline from "./Underline";
import { motion } from "motion/react";
import { animateFunc } from "../../utils";

const PosterHomepage = () => {
  const obj = {
    title: "Mengenal Peran Santri Lingkungan Masyarakat",
    createdAt: 'Kamis, 03-06-200',
    imageUrl: posterImage,
    body: 'Praesent tortor enim, accumsan egestas pharetra in, venenatis eget nibh. Ut iaculis diam non diam ultrices, nec luctus orci cursus. Sed quis venenatis lectus. Nam tristique tellus vitae ipsum fringilla bibendum. Suspendisse tincidunt justo eu lacus scelerisque fermentum. Nunc nisi ipsum, congue vel aliquam id, sodales ac lorem. Suspendisse velit arcu, dictum vel ullamcorper a, commodo sed massa. Proin sed risus aliquet dolor pretium faucibus accumsan sed mi. Sed bibendum eros porta urna maximus efficitur. Donec et felis ut odio placerat egestas. Ut congue justo dui, quis porta ex tristique ac. Integer gravida convallis augue in egestas. Integer augue ligula, vestibulum nec ipsum et, varius vehicula odio.'
  };
  return (
    <section className="my-24">
      <motion.h1
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.7).transition}
        className="font-bold text-green-700 text-xl"
      >
        Info Terkini
      </motion.h1>
      <Underline />
      <motion.div
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.8).transition}
        className="shadow-lg group w-full flex flex-col max-h-[60rem] mt-8 h-[30rem] lg:h-[30rem] rounded-md overflow-hidden"
      >
        <div className="w-full h-[60%] group-hover:scale-[1.02] transition-transform duration-200 ease-in-out">
          <img src={obj.imageUrl} alt="" className="w-full h-full object-bottom object-cover" />
        </div>
        <div className="bg-green-700 w-full px-8 py-4 h-[40%]">
        <p className="text-sm  font-bold text-yellow-500">kegiatan</p>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-white">{obj.title}</h1>
          <p className="text-sm font-bold text-white">{obj.createdAt}</p>
          <p className="text-white mt-4 line-clamp-1 md:line-clamp-2">{obj.body}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default PosterHomepage;
