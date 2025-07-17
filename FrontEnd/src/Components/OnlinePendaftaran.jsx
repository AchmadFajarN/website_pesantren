import Underline from "./Underline";
import { motion } from "motion/react";
import { animateFunc } from "../../utils";
import { Link } from 'react-router-dom'

const OnlinePendaftaran = () => {
  return (
    <section>
      <motion.h1 initial={animateFunc().initial} whileInView={animateFunc().animate} transition={animateFunc(0.7).transition} className="text-green-700 text-xl font-bold">Pendaftaran Online</motion.h1>
      <Underline />
      <motion.p initial={animateFunc().initial} whileInView={animateFunc().animate} transition={animateFunc(0.8).transition} className="mt-8 mb-4 text-yellow-600 font-bold block max-w-lg rounded-md shadow-md py-2 text-center bg-slate-100">Langkah-langkah:</motion.p>
      <motion.ul initial={animateFunc().initial} whileInView={animateFunc().animate} transition={animateFunc(0.9).transition} className="list-disc max-w-lg bg-slate-100 text-green-700 font-semibold flex flex-col gap-2 md:gap-1 pl-8 py-8 pr-2 rounded-md shadow-md">
        <li>Silahkan buat akun terlebih dahulu di <Link className="text-yellow-600" to="/pendaftaran/register">Link ini</Link></li>
        <li>Jika sudah punya akun silahkan login. <Link className="text-yellow-600" to={'/pendaftaran/login'}>Link untuk login</Link></li>
        <li>Isi Form yang tertera, lalu submit</li>
        <li>Setelah di submit pihak pesantren akan menghubungi anda</li>
        <p className="text-xs font-semibold text-yellow-600 mt-4">Catatan: Harap ingat bahwa 1 akun hanya bisa mendaftfar satu kali</p>
      </motion.ul>
    </section>
  );
};

export default OnlinePendaftaran;
