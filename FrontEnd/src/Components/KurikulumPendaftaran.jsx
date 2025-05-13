import { useState } from "react";
import { kelasDanKurikulum } from "../../utils";
import { ChevronDown } from "lucide-react";

const KurikulumPendaftaran = () => {
  const [sideActive, setSideActive] = useState(false);
  const sideBar = () => {
    setSideActive(!sideActive);
  };

  const dataWithId = kelasDanKurikulum.map((item) => {
    return {
      ...item,
      isDisplay: false,
    };
  });

  const [dataKurikulum, setDataKurikulum] = useState(dataWithId);

  const displayPelajaran = (name) => {
    const data = dataKurikulum.map((item) =>
      item.kelas === name ? { ...item, isDisplay: !item.isDisplay } : item
    );
    setDataKurikulum(data);
  };

  return (
    <aside
      className={`fixed rounded-md right-0 top-24 h-[80vh] z-50 ${
        !sideActive ? "translate-x-full" : "translate-x-2"
      } transition-transform duration-200 ease-in-out w-[270px] sm:w-xs bg-green-700`}
    >
      <div
        onClick={sideBar}
        className={`flex justify-center items-center ${
          sideActive
            ? "size-12 -left-12"
            : "min-h-8 py-2 w-[7rem] md:w-40 px-2 md:px-4 -left-[7rem] md:-left-[10rem]"
        } cursor-pointer bg-inherit absolute top-18 rounded-l-xl`}
      >
        {!sideActive ? (
          <p className="text-white text-xs md:text-sm font-bold">
            Lihat Kurikulum
          </p>
        ) : (
          <ChevronDown className="text-white -rotate-90" />
        )}
      </div>
      <div className="w-full h-full rounded-md overflow-y-scroll">
        <div className="py-4 px-8 text-center bg-green-900">
          <h2 className="font-bold text-xl text-white">Kitab Yang diaji</h2>
        </div>
        <ul>
          {dataKurikulum.map((kelas, index) => {
            return (
              <li key={index} className="py-2 group cursor-pointer font-semibold text-green-700 border-b-4">
                <div
                  onClick={() => displayPelajaran(kelas.kelas)}
                  className="flex justify-between px-2 text-white"
                >
                  {kelas.kelas}
                  <ChevronDown />
                </div>
                {kelas.isDisplay && (
                  <ul className="bg-green-800 flex flex-col gap-2 p-2">
                    {kelas.pelajaran.map((pelajaran) => (
                      <li className="text-yellow-400">{pelajaran}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default KurikulumPendaftaran;
