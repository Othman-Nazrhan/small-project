const Student = require('../models/student');

exports.addStudents = async (req, res) => {
    const student = req.body;
    const newStudent = await new Student(student);
    try {
        newStudent.save()
        res.status(200).json(newStudent)
    }
    catch (error) {
        res.status(400).json({ error })
    }
};

exports.updateStudents = (req, res) => {
    const student = req.body

    Student.updateOne({ _id: req.params.id },
        { ...student, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'update student !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteStudents = ((req, res) => {

    Student.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'delete student' }))
        .catch(error => res.status(400).json({ error }));
});

exports.getOneStudents = ((req, res, next) => {
    Student.findOne({ _id: req.params.id })
        .then(student => res.status(200).json(student))
        .catch(error => res.status(404).json({ error }));
});

exports.getAllStudents = ((req, res, next) => {
    Student.find()
        .then(students => res.status(200).json(students))
        .catch(error => res.status(400).json({ error }));
});