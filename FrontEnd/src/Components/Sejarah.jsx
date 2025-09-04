import { motion } from "motion/react";
import { animateFunc } from "../../utils";
import Underline from "./Underline";
import fotoSejarah from '../assets/image/fotoSesi12.jpg'

const Sejarah = () => {
  return (
    <div className="mt-20">
      <motion.h1
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.6).transition}
        className="text-xl font-bold text-green-700" >
        Sejarah
      </motion.h1>
      <Underline />
      <div className="mt-10 xl:grid-cols-2 grid gap-8">
        <motion.div 
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.6).transition}
        className="rounded-md overflow-hidden">
            <img src={fotoSejarah} alt="" className="grayscale-75" />
        </motion.div>
        <div 
        initial={animateFunc().initial}
        whileInView={animateFunc().animate}
        transition={animateFunc(0.6).transition}
        className="font-semibold text-green-700 font-xs">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magni provident dignissimos odio eligendi. Neque quam deserunt repellendus quibusdam nesciunt ipsa, exercitationem aliquam culpa facilis et quis necessitatibus maxime molestias!</p>
            <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed corporis quod nam, ratione excepturi consectetur labore eaque eligendi velit fuga totam numquam atque ipsa rerum ipsum deleniti perspiciatis voluptatem tempora!
            </p>
            <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fugiat maxime. Ullam, eaque in. Qui sint ipsam tempora recusandae optio. Culpa accusantium beatae pariatur vitae accusamus doloremque, officia amet magni minima necessitatibus, molestiae tenetur. Fugit quaerat illum autem, cupiditate nulla enim necessitatibus, mollitia accusantium obcaecati dolores, iusto animi aut veniam quae pariatur natus. Dolores, animi facere corporis commodi deleniti facilis ipsum ad, vel sapiente soluta eveniet natus quam perferendis dignissimos accusamus reiciendis nam non illo! Aut ex, corporis corrupti labore ut aperiam reprehenderit earum facilis minima quo, eum vel nemo explicabo, harum cumque excepturi culpa non ipsum dolore quibusdam modi!
            </p>
            <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium recusandae vel porro nostrum eum ut in eius aliquid, deleniti veniam, magni sint nisi repudiandae quisquam saepe praesentium pariatur! Nam, consequuntur!
            </p>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
