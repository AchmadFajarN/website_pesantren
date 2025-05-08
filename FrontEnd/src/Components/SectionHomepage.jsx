import React from "react";
import { motion } from "motion/react";
import { animateFunc } from "../../utils";
import kelulusan from '../assets/image/future.jpg'
import kurikulum from '../assets/image/kurikulum.jpg'
import lingkungan from '../assets/image/lingkungan.jpg'
import kitabKuning from '../assets/image/kitab-kuning.jpeg'

const keunggulan = [
  {
    title: "Kurikulum Terpadu",
    emoji: "📚",
    description:
      "Pendidikan agama melalui kitab kuning dan kurikulum umum berjalan beriringan sesuai standar kesetaraan.",
    imgUrl: kurikulum,
  },
  {
    title: "Pembelajaran Klasikal",
    emoji: "🕌",
    description:
      "Kitab-kitab klasik diajarkan secara bertingkat, menyesuaikan jenjang dan kemampuan santri.",
    imgUrl: kitabKuning
  },
  {
    title: "Lingkungan Islami",
    emoji: "🌱",
    description:
      "Adab, kedisiplinan, dan kebersamaan menjadi nilai utama dalam kehidupan santri sehari-hari.",
    imgUrl: lingkungan
  },
  {
    title: "Masa Depan Terbuka",
    emoji: "🎓",
    description:
      "Santri siap melanjutkan pendidikan ke jenjang lebih tinggi, baik umum maupun keagamaan.",
    imgUrl: kelulusan
  },

];

const SectionHomepage = () => {
  return (
    <section className="my-[10rem]">
      <div className="mx-auto px-4">
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

        <div className="grid md:grid-cols-2 gap-4">
          {keunggulan.map((item, index) => (
            <motion.div 
            initial={animateFunc().initial} 
            whileInView={animateFunc().animate} 
            transition={animateFunc(`0.${5 + index}`).transition}
            key={index} className="flex items-center gap-4">
              <div className="w-full md:w-48 h-32 flex-1 bg-gray-200 overflow-hidden rounded-lg shadow-sm flex items-center justify-center">
                <img src={item.imgUrl} alt="" className="w-full h-full object-center object-cover" />
              </div>
              <div className="flex-1 py-2">
                <h3 className="sm:text-xl text-sm font-semibold text-green-700 mb-2">
                  <span className="mr-2">{item.emoji}</span>
                  {item.title}
                </h3>
                <p className="text-yellow-600 font-semibold sm:text-sm text-xs">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionHomepage;
