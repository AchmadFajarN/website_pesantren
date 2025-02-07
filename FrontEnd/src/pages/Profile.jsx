import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const profileData = {
  name: "Pesantren Al-Hikmah",
  established: "1990",
  founder: "KH. Ahmad Syafi'i",
  vision: "Menjadi pusat pendidikan Islam yang unggul dalam membentuk generasi beriman, berilmu, dan berakhlak mulia",
  mission: [
    "Menyelenggarakan pendidikan Islam berkualitas",
    "Mengembangkan potensi santri secara komprehensif",
    "Membangun karakter Islami yang kuat",
    "Memberikan pelayanan pendidikan yang profesional"
  ],
  keyPersonnel: [
    {
      name: "KH. Ahmad Syafi'i",
      role: "Pengasuh Pesantren",
      image: "https://placehold.co/400x400",
      description: "Pendiri dan pengasuh utama pesantren dengan pengalaman lebih dari 30 tahun dalam pendidikan Islam."
    },
    {
      name: "Ustadz Muhammad Hasan",
      role: "Kepala Pendidikan",
      image: "https://placehold.co/400x400",
      description: "Bertanggung jawab atas kurikulum dan program pendidikan di pesantren."
    }
  ]
};

const PesantrenWebsite = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Selamat Datang di {profileData.name}</h2>
      <p className="text-gray-600">Didirikan sejak tahun {profileData.established}</p>
      
      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Visi</h3>
          <p className="text-gray-700">{profileData.vision}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Misi</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {profileData.mission.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Key Personnel */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-green-800 mb-6">Pengurus Pesantren</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {profileData.keyPersonnel.map((person, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img 
                    className="h-48 w-full object-cover md:w-48" 
                    src={person.image} 
                    alt={person.name} 
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-green-800">{person.name}</h4>
                  <p className="text-sm text-green-600 mb-2">{person.role}</p>
                  <p className="text-gray-600">{person.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default PesantrenWebsite;