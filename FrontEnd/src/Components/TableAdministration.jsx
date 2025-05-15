import { formatRupiah, animateFunc } from "../../utils";
import { motion } from "motion/react";

const TableAdministration = ({ datas, className, transitionAnimate, tableTitle }) => {
  const reslutPrice = datas.reduce((acc, data) => acc + data.price, 0);
  return (
    <motion.div
      initial={animateFunc().initial}
      whileInView={animateFunc().animate}
      transition={animateFunc(transitionAnimate).transition}
      className={`${className}`}
    >
      <div className="w-full mt-2 py-2 bg-slate-100 shadow-md text-center">
        <h3 className="font-bold text-green-700">{tableTitle}</h3>
      </div>
      <div className="mt-2 min-h-[14rem] bg-slate-100 px-2 py-4 shadow-md rounded-md">
        {datas.map((data) => {
          return (
            <div className="flex justify-between font-semibold text-yellow-600">
              <p>{data.name}</p>
              <p>{formatRupiah(data.price)}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full mt-2 py-2 bg-slate-100 shadow-md text-center">
        <h3 className="font-bold text-green-700">
          total: {formatRupiah(reslutPrice)}
        </h3>
      </div>
    </motion.div>
  );
};

export default TableAdministration;
