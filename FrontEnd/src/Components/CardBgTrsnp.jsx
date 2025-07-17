import React from "react";
import { motion } from "motion/react";
import { animateFunc } from "../../utils";

const CardBgTrsnp = ({ item, index, textColor }) => {
  return (
    <motion.div
      initial={animateFunc().initial}
      whileInView={animateFunc().animate}
      transition={animateFunc(`0.${5 + index}`).transition}
      className="flex items-start gap-4"
    >
      <div className="w-full order-3 md:w-48 h-32 flex-1 bg-gray-200 overflow-hidden rounded-lg shadow-sm flex items-center justify-center">
        <img
          src={item.imgUrl}
          alt="foto"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="flex-1 py-2 order-2">
        {item.title && item.emoji && (
          <h3 className="sm:text-xl text-sm font-semibold text-green-700 mb-2">
            <span className="mr-2">{item.emoji}</span>
            {item.title}
          </h3>
        )}
        <p className={`${textColor} font-semibold sm:text-sm text-xs`}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default CardBgTrsnp;
