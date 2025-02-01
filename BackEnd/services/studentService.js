const studentRepository = require('../repositories/studentRepository');
const { validateStudent } = require('../models/studentModel');

class StudentService {
  async createStudent(studentData) {
    const { error } = validateStudent(studentData);
    if (error) throw new Error(error.details.map(d => d.message).join(', '));
    
    // Check unique constraints
    const existingNomor = await studentRepository.findByNomorPendaftaran(studentData.nomor_pendaftaran);
    if (existingNomor) throw new Error('Nomor pendaftaran sudah terdaftar');
    
    const existingNIK = await studentRepository.findByNIK(studentData.nik);
    if (existingNIK) throw new Error('NIK sudah terdaftar');
    
    const existingEmail = await studentRepository.findByEmail(studentData.email);
    if (existingEmail) throw new Error('Email sudah terdaftar');

    return studentRepository.create(studentData);
  }

  async getAllStudents() {
    return studentRepository.findAll();
  }

  async getStudentByNomor(nomor) {
    const student = await studentRepository.findByNomorPendaftaran(nomor);
    if (!student) throw new Error('Siswa tidak ditemukan');
    return student;
  }

  async updateStudent(nomor, studentData) {
    const { error } = validateStudent(studentData);
    if (error) throw new Error(error.details.map(d => d.message).join(', '));
    
    const student = await studentRepository.update(nomor, studentData);
    if (!student) throw new Error('Siswa tidak ditemukan');
    return student;
  }

  async deleteStudent(nomor) {
    const student = await studentRepository.findByNomorPendaftaran(nomor);
    if (!student) throw new Error('Siswa tidak ditemukan');
    return studentRepository.delete(nomor);
  }
}

module.exports = new StudentService();