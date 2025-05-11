import React from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const CardKurikulum = ({ data }) => {
  return (
    <div className="p-4 bg-slate-100 shadow-xl rounded-md">
      <h1 className="font-bold text-2xl text-green-700">{data.kelas}</h1>
      <span className="inline-block w-20 h-[2px] bg-green-700"></span>
      <ul className="list-disc pl-8">
        {data.pelajaran.map((item) => {
          return <li className="font-semibold text-yellow-600">{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CardKurikulum;
