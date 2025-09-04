const FormPendaftaran = ({ handleSubmit, errorMessage, formData, handleChange }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 shadow-md rounded-md p-8 md:w-xl xl:w-2xl w-xs flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label className="text-green-700 font-semibold">Nama Lengkap</label>
        <input
          required
          name="nama_lengkap"
          className="bg-white p-2 focus:outline-green-700 text-sm"
          value={formData.nama_lengkap}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">NIK</label>
        <input
          required
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="nik"
          value={formData.nik}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">Tempat Lahir</label>
        <input
          required
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="tempat_lahir"
          value={formData.tempat_lahir}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">Tanggal Lahir</label>
        <input
          required
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="tanggal_lahir"
          type="date"
          value={formData.tanggal_lahir}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">Jenis Kelamin</label>
        <select
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="jenis_kelamin"
          value={formData.jenis_kelamin}
          onChange={handleChange}
        >
          <option value="">-- Pilih --</option>
          <option value="L">Laki-laki</option>
          <option value="P">Perempuan</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">Alamat</label>
        <input
          required
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">Provinsi</label>
        <input
          required
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="provinsi"
          value={formData.provinsi}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">Kota/Kabupaten</label>
        <input
          required
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="kota_kabupaten"
          value={formData.kota_kabupaten}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">Kode Pos</label>
        <input
          required
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="kode_pos"
          value={formData.kode_pos}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">No HP</label>
        <input
          required
          type="number"
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="no_hp"
          value={formData.no_hp}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">Email</label>
        <input
          required
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">Asal Sekolah</label>
        <input
          required
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="asal_sekolah"
          value={formData.asal_sekolah}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-green-700 font-semibold">Tahun Lulus</label>
        <input
          required
          className="bg-white p-2 focus:outline-green-700 text-sm"
          name="tahun_lulus"
          type="number"
          value={formData.tahun_lulus}
          onChange={handleChange}
        />
      </div>
      <span className="mt-4 text-red-600 font-semibold text-xs">
        {errorMessage}
      </span>
      <button
        className="bg-green-700 rounded-md text-white font-semibold border-2 border-transparent cursor-pointer hover:bg-transparent hover:border-green-700 hover:text-green-700 transition-all duration-300 ease-in-out p-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default FormPendaftaran;
