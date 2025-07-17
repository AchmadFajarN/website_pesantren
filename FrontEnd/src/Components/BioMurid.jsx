import { LogOut } from 'lucide-react';

const BioMurid = ({ no_pendaftaran, nama, nik, alamat, provinsi, logoutHandler }) => {
  return (
    <div className="mb-40 flex flex-col items-center">
      <h1 className="text-green-600 text-3xl font-bold">Anda Sudah Terdaftar</h1>
      <div className="mt-10 border-green-700 border-2 p-8 rounded-lg shadow-lg">
        <p className="flex justify-between gap-8 text-green-700 font-semibold">No Pendaftaran: <span className="text-yellow-600">{ no_pendaftaran }</span></p>
        <p className="flex justify-between gap-8 text-green-700 font-semibold">Nama: <span className="text-yellow-600">{ nama }</span></p>
        <p className="flex justify-between gap-8 text-green-700 font-semibold">NIK: <span className="text-yellow-600">{ nik }</span></p>
        <p className="flex justify-between gap-8 text-green-700 font-semibold">Alamat: <span className="text-yellow-600">{ alamat }</span></p>
        <p className="flex justify-between gap-8 text-green-700 font-semibold">Provinsi: <span className="text-yellow-600">{ provinsi }</span></p>
      </div>
      <button onClick={logoutHandler} className='flex text-white hover:text-green-700 hover:bg-white transition-colors duration-300 ease-in-out border-2 border-green-700 bg-green-700 gap-4 items-center shadow-lg cursor-pointer text-center mt-10 p-2 rounded-md'>
        <LogOut />
        <p className='font-semibold '>Logout</p>
      </button>
    </div>
  );
};

export default BioMurid;
