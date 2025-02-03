const Joi = require('joi');
const currentYear = new Date().getFullYear();

const studentSchema = Joi.object({
  nomor_pendaftaran: Joi.string().max(20),
  nama_lengkap: Joi.string().max(100).required(),
  nik: Joi.string().length(16).pattern(/^[0-9]+$/).required(),
  tempat_lahir: Joi.string().max(50).required(),
  tanggal_lahir: Joi.date().required().max(new Date()),
  jenis_kelamin: Joi.string().valid('L', 'P').required(),
  alamat: Joi.string().required(),
  provinsi: Joi.string().max(50).required(),
  kota_kabupaten: Joi.string().max(50).required(),
  kode_pos: Joi.string().max(10).required(),
  no_hp: Joi.string().max(15).pattern(/^[0-9]+$/).required(),
  email: Joi.string().email().max(100).required(),
  asal_sekolah: Joi.string().max(100).required(),
  tahun_lulus: Joi.number().integer().min(1900).max(currentYear).required()
});

const validateStudent = (data) => {
  return studentSchema.validate(data, { abortEarly: false });
};

module.exports = { validateStudent };