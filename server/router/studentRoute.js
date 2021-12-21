const express = require('express');
const router = express.Router();
const studentCtrl = require('../controllers/student');





router.get('/', studentCtrl.getAllStudents);

router.get('/:id', studentCtrl.getOneStudents);
router.post('/', studentCtrl.addStudents);
router.put('/:id',  studentCtrl.updateStudents);
router.delete('/:id',studentCtrl.deleteStudents);


module.exports = router;