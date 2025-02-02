const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:nomor', studentController.getStudentByNomor);
router.put('/:nomor', studentController.updateStudent);
router.delete('/:nomor', studentController.deleteStudent);

module.exports = router;