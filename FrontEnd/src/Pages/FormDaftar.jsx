import FormPendaftaran from "../Components/FormPendaftaran";
import { useEffect, useState } from "react";
import BioMurid from "../Components/BioMurid";
import { useNavigate } from "react-router-dom";
import { registerStudent, removeLocalStorage, getStudentByCredentials } from "../../utils/api";

const FormDaftar = () => {
  const navigate = useNavigate();
  const [displayRegisterForm, setDisplayRegisterForm] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
    nama_lengkap: "",
    nik: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    alamat: "",
    provinsi: "",
    kota_kabupaten: "",
    kode_pos: "",
    no_hp: "",
    email: "",
    asal_sekolah: "",
    tahun_lulus: "",
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tahun_lulus" ? parseInt(value, 10) : value,
    }));
  };


  const getStudentBio = async () => {
      const biodata = await getStudentByCredentials();
      if (!biodata.error) {
        const { nomor_pendaftaran, nama_lengkap, nik, alamat, provinsi } = biodata;
        localStorage.setItem("biodata_murid", JSON.stringify({
          nomor_pendaftaran,
          nama_lengkap,
          nik,
          alamat,
          provinsi
        }));
        const bio = localStorage.getItem("biodata_murid");
        setDisplayRegisterForm(JSON.parse(bio))
      }
  }

  useEffect(() => {
   getStudentBio() 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseRegister = await registerStudent(formData);
    console.log(responseRegister);
    const { nomor_pendaftaran, nama_lengkap, nik, alamat, provinsi } = responseRegister;
    
    const localMurid = {
      nomor_pendaftaran,
      nama_lengkap,
      nik,
      alamat,
      provinsi,
    };

    if (responseRegister.error === 'nik sudah terdaftar') {
      setErrorMessage(responseRegister.error)
    }

    if (responseRegister.details === "Key: 'Student.NIK' Error:Field validation for 'NIK' failed on the 'len' tag") {
      setErrorMessage("Nik harus berjumlah 16 digit");
    }


    setDisplayRegisterForm(localMurid);
  };

  const logoutHandler = () => {
    removeLocalStorage("accessToken");
    removeLocalStorage("biodata_murid");
    setDisplayRegisterForm(null);
    navigate("/pendaftaran/login")
  }

  // const { nomor_pendaftaran, nama_lengkap, nik, alamat, provinsi } = displayRegisterForm;

  return (
    <section className="w-full min-h-screen pt-40 flex justify-center items-center">
      {displayRegisterForm === null ? (
        <FormPendaftaran handleSubmit={handleSubmit} errorMessage={errorMessage} formData={formData} handleChange={handleChange} />
      ) : (
        <BioMurid
          no_pendaftaran={displayRegisterForm.nomor_pendaftaran}
          nama={displayRegisterForm.nama_lengkap}
          nik={displayRegisterForm.nik}
          alamat={displayRegisterForm.alamat}
          provinsi={displayRegisterForm.provinsi}
          logoutHandler={logoutHandler}
        />
      )}
    </section>
  );
};

export default FormDaftar;
