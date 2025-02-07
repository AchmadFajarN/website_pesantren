const studentRepository = require('../repositories/studentRepository');
const { validateStudent } = require('../models/studentModel');

class StudentService {
  async createStudent(studentData) {
    const { error } = validateStudent(studentData);
    if (error) throw new Error(error.details.map(d => d.message).join(', '));

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

  async updateStudent(nomorPendaftaran, studentData) {
    const { error } = validateStudent(studentData);
    if (error) throw new Error(error.details.map(d => d.message).join(', '));

    const existingStudent = await studentRepository.findByNomorPendaftaran(nomorPendaftaran);
    if (!existingStudent) {
      throw new Error('Siswa tidak ditemukan');
    }

    if (studentData.email && studentData.email !== existingStudent.email) {
      const emailExists = await studentRepository.findByEmail(studentData.email);
      if (emailExists) {
        throw new Error('Email sudah terdaftar');
      }
    }

    const updatedData = {
      ...studentData,
      email: studentData.email || existingStudent.email,
    };

    return studentRepository.update(nomorPendaftaran, updatedData);
  }

  async deleteStudent(nomor) {
    const student = await studentRepository.findByNomorPendaftaran(nomor);
    if (!student) throw new Error('Siswa tidak ditemukan');
    return studentRepository.delete(nomor);
  }
}

module.exports = new StudentService();