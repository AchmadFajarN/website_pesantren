import React from "react";
import Underline from "./Underline";
import { misi } from "../../utils"; 
import CardBgTrsnp from "./CardBgTrsnp";

const VisiDanMisi = () => {
  return (
    <section className="mt-20">
      <h1 className="text-xl font-bold text-green-700">Visi</h1>
      <Underline />
      <h2 className="mt-10 text-green-700 font-bold text-2xl text-center">
        "Terciptanya Insan Kamil"
      </h2>
      <p className="text-center mt-4 font-semibold text-yellow-600">
        (Beriman, berilmu, berahlakul karimah, berwawasan, dan berjiwa pesantren
        serta unggul)
      </p>
      <h1 className="mt-10 text-xl font-bold text-green-700">Misi</h1>
      <Underline />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {
                misi.map((item, index) => {
                    return <CardBgTrsnp item={item} index={index} textColor={'text-green-700'} />
                })
            }
      </div>
    </section>
    
  );
};

export default VisiDanMisi;
