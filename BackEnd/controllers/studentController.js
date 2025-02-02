const studentService = require('../services/studentService');
const errorHandler = require('../utils/errorHandler');

const studentController = {
  createStudent: async (req, res) => {
    try {
      const newStudent = await studentService.createStudent(req.body);
      res.status(201).json(newStudent);
    } catch (error) {
      errorHandler(error, req, res);
    }
  },

  getAllStudents: async (req, res) => {
    try {
      const students = await studentService.getAllStudents();
      res.json(students);
    } catch (error) {
      errorHandler(error, req, res);
    }
  },

  getStudentByNomor: async (req, res) => {
    try {
      const student = await studentService.getStudentByNomor(req.params.nomor);
      res.json(student);
    } catch (error) {
      errorHandler(error, req, res);
    }
  },

  updateStudent: async (req, res) => {
    try {
      const updatedStudent = await studentService.updateStudent(
        req.params.nomor,
        req.body
      );
      res.json(updatedStudent);
    } catch (error) {
      errorHandler(error, req, res);
    }
  },

  deleteStudent: async (req, res) => {
    try {
      await studentService.deleteStudent(req.params.nomor);
      res.status(204).end();
    } catch (error) {
      errorHandler(error, req, res);
    }
  },
};

module.exports = studentController;