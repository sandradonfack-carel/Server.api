const express = require('express');
const router = express.Router();

let courses = [
    { id: 1, title: 'algorithmique', teacher: 'Dr NJI', credits: 6 },      
    { id: 2, title: 'developpement web', teacher: 'Dr Jiomekong', credits: 6 },
];
let nextId = 3;

router.get('/', (req, res) => {
    res.status(200).json(courses);
});

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).json({ error: 'cours non trouve' });
    }
    res.status(200).json(course);
});

router.post('/', (req, res) => {
    const { title, teacher, credits } = req.body;

    if (!title || !teacher || !credits) {
        return res.status(400).json({ error: 'les champs title, teacher et credits sont requis' });
    }

    const newCourse = { id: nextId++, title, teacher, credits };
    courses.push(newCourse); 
    res.status(201).json(newCourse);
});

router.put('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).json({ error: 'cours non trouve' }); 
    }

    const { title, teacher, credits } = req.body;
    if (title) course.title = title;
    if (teacher) course.teacher = teacher;
    if (credits) course.credits = credits;

    res.status(200).json(course);
});

router.delete('/:id', (req, res) => {
    const index = courses.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'cours non trouve' }); // ✅ statuts → status
    }

    courses.splice(index, 1);
    res.status(200).json({ message: 'cours supprime avec succes' }); // ✅ statuts → status
});

module.exports = router; // ✅ Export manquant ajouté
