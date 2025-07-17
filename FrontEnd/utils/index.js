import foto1 from "../src/assets/image/fotoSesi2.jpg";
import foto2 from "../src/assets/image/fotoSesi3.jpg";
import foto3 from "../src/assets/image/fotoSesi4.jpg";
import foto4 from "../src/assets/image/fotoSesi5.jpg";
import foto5 from "../src/assets/image/fotoSesi6.jpg";
import foto6 from "../src/assets/image/fotoSesi7.jpg";
import kelulusan from "../src/assets/image/future.jpg";
import kurikulum from "../src/assets/image/kurikulum.jpg";
import lingkungan from "../src/assets/image/lingkungan.jpg";
import kitabKuning from "../src/assets/image/kitab-kuning.jpeg";
import pramuka from "../src/assets/image/pramuka2.jpg";
import smpClass from "../src/assets/image/smp2.jpg";

let misi = [
  {
    description: 'Melaksanakan pembelajaran secara klasikal terpadu akseleratif dan bimbingan secara efektif',
    imgUrl: kurikulum,
  },
  {
    description: 'Mendidik santri memiliki kemantapan aqidah dan keunggulan moral',
    imgUrl: lingkungan,
  },
  {
    description: 'Mendidik santri agar mampu mempraktikan nilai keislaman dalam bermasyarakat, berbangsa, dan bernegara',
    imgUrl: foto3
  },
  {
    description: 'Mencetak lulusan yang memiliki kompentensi pengetahuan, skill dan bermasyarakat',
    imgUrl: kelulusan
  }
]

let kelasDanKurikulum = [
  {
    kelas: "I'Dad",
    pelajaran: [
      "Bimbingan Ibadah",
      "BTQ (Baca Tulis Alqur'an)",
      "Nadhom Aqidah",
      "Nadhom Fiqih",
      "Tajwid",
      "Tafshiran",
      "Tarkiban",
      "Hafalan surat pendek",
    ],
  },
  {
    kelas: "Ibtida I",
    pelajaran: [
      "Bimbingan Ibadah",
      "BTQ (Baca Tulis Alqur'an)",
      "Jauhar Kalamiyah",
      "Mabadi' Fiqih",
      "Akhlaqul Banin",
      "Tajwid",
      "Tashrifan",
      "Tarkiban",
      "Hafalan Jurumiyah",
    ],
  },
  {
    kelas: "Ibtida II",
    pelajaran: [
      "Tajwid",
      "Tashrifan (Bina)",
      "Tijan",
      "Safinah",
      "Jurumiyah",
      "Kailani",
      "Washoya",
      "Hafalan Nadzom Yaqulu",
    ],
  },
  {
    kelas: "Wustho I",
    pelajaran: [
      "Imrithi",
      "Yaqulu",
      "Tashrifan (Qiyas)",
      "Safinah/Riyadh",
      "A'dabul Muta'alim wal Muta'alim",
      "Nur Dholam",
      "Tanqihul Qoul",
      "Hafalan Imrithi",
    ],
  },
  {
    kelas: "Wustho II",
    pelajaran: [
      "Imrithi",
      "Yaqulu",
      "Fathul Majid",
      "Riyadh",
      "Ta'limul Muta'alim",
      "Arba'in Nawawi",
      "Tashrifan (Ngelal/Ngasal)",
      "Hafalan Imrithi",
    ],
  },
  {
    kelas: "Wustho III",
    pelajaran: [
      "Alfiyah Ibnu Malik",
      "Sulamuttaufiq",
      "Baiquniyah",
      "Fathul Qarib",
      "Ta'limul Muta'alim",
      "Fathul Majid",
      "Sulam Munawaroq",
      "Hafalan Alfiyah",
    ],
  },
  {
    kelas: "Ulya I",
    pelajaran: [
      "Alfiyah Ibn Malik",
      "I'anah",
      "Bulughul Maram",
      "Kiyayatul Atiqiya",
      "Ta'limul Muta'alim",
      "Jauhar Maknun",
      "Hafalan Alfiyah",
    ],
  },
  {
    kelas: "Ulya II",
    pelajaran: [
      "Alfiyah Ibn Malik",
      "I'anah",
      "Bulughul Maram",
      "Tafsir Jalalin",
      "Jauhar Maknun",
      "Hafalan Alfiyah",
    ],
  },
  {
    kelas: "Ma'had Ali",
    pelajaran: [
      "Tafsir Jalalain",
      "Falaq",
      "Jam'ul Jawami'",
      "Bulughul Maram",
      "Waraqat",
      "Hafalan Sulam Munawaroq",
      "Jauhar Maknun",
    ],
  },
];
let data = [
  {
    id: 1,
    title:
      "Transformasi Pendidikan Pesantren di Era Digital: Peluang dan Tantangan",
    createdAt: "jum'at 10-04-2020",
    tag: ["Digital", "Informasi"],
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra eros nibh. Nulla gravida diam risus, non egestas neque lobortis semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed mattis tristique ligula at rutrum. In auctor iaculis lacus. Nunc tempus molestie dolor vehicula congue. Aliquam eleifend pellentesque massa, quis laoreet sem auctor non. Donec eget dui nunc. Nunc diam turpis, lobortis ornare ornare id, condimentum eu leo. Suspendisse hendrerit ullamcorper neque at egestas. Proin in tempor dui. Mauris fringilla eu massa sed tincidunt. Donec nisl enim, dapibus vitae suscipit sit amet, ultrices vel ipsum.",
    imageUrl: foto1,
  },
  {
    id: 2,
    title: "Kontribusi Pesantren terhadap Pengembangan Ekonomi Lokal",
    createdAt: "kamis, 19-02-2024",
    tag: ["Kegiatan", "Ekonomi"],
    body: "Nulla sed lorem non nibh semper aliquet. Donec imperdiet est ut metus faucibus interdum. Proin nec rhoncus nibh, et venenatis ipsum. In vitae massa finibus, pellentesque diam a, pharetra purus. Vivamus ullamcorper mi ut arcu sollicitudin maximus. Suspendisse tincidunt dui ut sollicitudin viverra. Mauris laoreet erat nec tincidunt facilisis.",
    imageUrl: foto2,
  },
  {
    id: 3,
    title:
      "Integrasi Kurikulum Umum dan Keagamaan di Lembaga Pendidikan Pesantren",
    createdAt: "Senin, 12-04-2023",
    tag: ["Pendidikan"],
    body: "Nunc congue elit sit amet mauris ullamcorper lacinia. Vestibulum pretium hendrerit ultrices. In luctus, elit et facilisis auctor, justo neque feugiat enim, vitae eleifend purus ex in libero. Fusce efficitur sem sed lorem tincidunt semper. Quisque commodo, eros et accumsan feugiat, magna metus tincidunt libero, lobortis sollicitudin purus odio et ligula. Praesent in est fermentum, tempor risus sed, maximus est. Aliquam rhoncus mattis maximus. Integer congue neque risus, eu viverra ligula maximus at. Cras porttitor vel metus ut rutrum. Sed sed finibus sapien. Phasellus urna purus, euismod in arcu eu, malesuada tincidunt tellus.",
    imageUrl: foto3,
  },
  {
    id: 4,
    title:
      "Pesantren dan Moderasi Beragama: Menangkal Radikalisme di Kalangan Remaja",
    createdAt: "Rabu, 03-01-2022",
    tag: ["Pendidikan", "Kegiatan"],
    body: "libero. Quisque accumsan nibh at sem molestie pretium. Donec feugiat odio nec turpis porta, in placerat nisi convallis. Sed gravida elementum velit, eget eleifend est efficitur quis. Sed imperdiet non lorem non sagittis. Praesent malesuada tellus a ante pharetra posuere. Sed consectetur mi turpis, eget facilisis nisi sollicitudin a. Vivamus id tempus justo. Maecenas massa erat, consequat quis tortor sed, feugiat lacinia mauris. Cras scelerisque sem nibh, et iaculis elit porttitor eu.",
    imageUrl: foto4,
  },
  {
    id: 5,
    title: "Model Kepemimpinan Kyai dalam Sistem Pendidikan Pesantren",
    createdAt: "Ahad, 10-02-2025",
    tag: ["Pendidikan"],
    body: "rutrum. In auctor iaculis lacus. Nunc tempus molestie dolor vehicula congue. Aliquam eleifend pellentesque massa, quis laoreet sem auctor non. Donec eget dui nunc. Nunc diam turpis, lobortis ornare ornare id, condimentum eu leo. Suspendisse hendrerit ullamcorper neque at egestas. Proin in tempor dui. Mauris fringilla eu massa sed tincidunt. Donec nisl enim, dapibus vitae suscipit sit amet, ultrices vel ipsum.",
    imageUrl: foto5,
  },
  {
    id: 6,
    title:
      "Peran Pesantren dalam Pembentukan Karakter Bangsa: Studi Kasus Pesantren Tradisional di Indonesia",
    createdAt: "Selasa, 24-07-2025",
    tag: ["Pendidikan"],
    body: "mauris. Suspendisse sit amet massa a tortor bibendum gravida. Nulla scelerisque in tellus vel gravida. Donec ut eros nec augue hendrerit mattis. Curabitur sed convallis enim, ac dapibus quam. Nunc a felis sed eros accumsan egestas vel auctor enim. Pellentesque id iaculis eros. Sed egestas a mi a tincidunt. Maecenas sodales enim tortor, a interdum felis suscipit sed. Integer tristique libero at volutpat tincidun",
    imageUrl: foto6,
  },
];

const keunggulan = [
  {
    title: "Kurikulum Terpadu",
    emoji: "📚",
    description:
      "Pendidikan agama melalui kitab kuning dan kurikulum umum berjalan beriringan sesuai standar kesetaraan.",
    imgUrl: kurikulum,
  },
  {
    title: "Pembelajaran Klasikal",
    emoji: "🕌",
    description:
      "Kitab-kitab klasik diajarkan secara bertingkat, menyesuaikan jenjang dan kemampuan santri.",
    imgUrl: kitabKuning,
  },
  {
    title: "Jenjang Menengah (SMP)",
    emoji: "🏫",
    description:
      "Masa transisi penting bagi santri untuk memperkuat dasar ilmu agama dan umum secara seimbang.",
    imgUrl: smpClass,
  },
  {
    title: "Lingkungan Islami",
    emoji: "🌱",
    description:
      "Adab, kedisiplinan, dan kebersamaan menjadi nilai utama dalam kehidupan santri sehari-hari.",
    imgUrl: lingkungan,
  },
  {
    title: "Berbagai Ekstrakulikuler",
    emoji: "⛺",
    description:
      "Mengasah potensi dan karakter melalui kegiatan yang menyenangkan dan bermakna.",
    imgUrl: pramuka,
  },
  {
    title: "Masa Depan Terbuka",
    emoji: "🎓",
    description:
      "Santri siap melanjutkan pendidikan ke jenjang lebih tinggi, baik umum maupun keagamaan.",
    imgUrl: kelulusan,
  },
];

let administrasiMuqimAndSmp = [
  {
    name: "Registrasi",
    price: 10000,
  },
  {
    name: "Syahriahan 2 bulan",
    price: 50000,
  },
  {
    name: "Perawatan Bangunan",
    price: 50000,
  },
  {
    name: "Buku Pedoman Santri",
    price: 50000,
  },
  {
    name: "Map Rapot",
    price: 50000,
  },
  {
    name: "Paket Kitab 1 tahun",
    price: 150000,
  },
  {
    name: "Infaq Makan 1 bulan",
    price: 450000,
  },
  {
    name: "Semeter 1",
    price: 150000,
  },
];

let administrasiNonMuqimAndSmp = [
  {
    name: "Registrasi",
    price: 10000,
  },
  {
    name: "Map Rapot",
    price: 50000,
  },
  {
    name: "Paket Kitab 1 tahun",
    price: 150000,
  },
  {
    name: "Semester/2 Semester",
    price: 150000,
  },
];

const animateFunc = (duration) => {
  return {
    initial: {
      opacity: 0,
      translateY: 35,
    },
    animate: {
      opacity: 1,
      translateY: 0,
    },
    transition: {
      duration: duration,
      ease: ["easeInOut"],
    },
  };
};

const getAllData = () => {
  return data;
};

const getDataById = (id) => {
  return data.filter((item) => item.id === id);
};

function formatRupiah(angka) {
  return 'Rp. ' + angka.toLocaleString("id-ID");
}

export {
  animateFunc,
  getAllData,
  getDataById,
  keunggulan,
  kelasDanKurikulum,
  administrasiMuqimAndSmp,
  administrasiNonMuqimAndSmp,
  formatRupiah,
  misi
};
