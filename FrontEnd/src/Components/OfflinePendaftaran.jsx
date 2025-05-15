import React from "react";
import Underline from "./Underline";
import { administrasiMuqimAndSmp, administrasiNonMuqimAndSmp, animateFunc } from "../../utils";
import TableAdministration from "./TableAdministration";
import { motion } from "motion/react";

const OfflinePendaftaran = () => {
  return (
    <div className="my-8 flex flex-col justify-center md:flex-row md:h-[23.5rem] gap-8">
      <div className="h-full md:flex-2 flex flex-col gap-3">
        <motion.h2 initial={animateFunc().initial} whileInView={animateFunc().animate} transition={animateFunc(0.5).transition} className="text-xl font-bold text-green-700">
          Pendaftaran Offline
        </motion.h2>
        <Underline />
        <motion.div initial={animateFunc().initial} whileInView={animateFunc().animate} transition={animateFunc(0.5).transition} className="flex-2 px-8 pt-4 bg-slate-100 shadow-md rounded-md">
          <h3 className="font-bold text-green-700">Alur Pendaftaran:</h3>
          <ul className="list-disc px-4 pt-4 text-yellow-600 font-semibold">
            <li>Silaturahmi ke Dewan Masyaikh</li>
            <li>Mengisi Formulir Pendaftaran</li>
            <li>
              Menyerahkan fotocopy 4 Lembar:
              <ul className="px-8 list-disc py-2">
                <li>Akte Lahir</li>
                <li>Ijazah Terakhir</li>
                <li>Kartu Keluarga (kk)</li>
                <li>KTP Orang Tua</li>
                <li>Foto Berwarna 3x4</li>
              </ul>
            </li>
            <li>Membayar Administrasi</li>
          </ul>
        </motion.div>
      </div>
      <div className="md:flex-4">
        <motion.h2 initial={animateFunc().initial} whileInView={animateFunc().animate} transition={animateFunc(0.5).transition} className="text-md font-bold text-green-700">
          Pembayaran Administrasi
        </motion.h2>
        <Underline />
        <div className="flex flex-col md:flex-row w-full gap-2 ">
          <TableAdministration transitionAnimate={0.7} tableTitle={'Santri Muqim + SMP Islam'} className={'flex-1'} datas={administrasiMuqimAndSmp} />
          <TableAdministration transitionAnimate={0.8} tableTitle={'Santri Non Muqim + SMP Islam'} className={'flex-1'} datas={administrasiNonMuqimAndSmp} />
        </div>
      </div>
    </div>
  );
};

export default OfflinePendaftaran;
