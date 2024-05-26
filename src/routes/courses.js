const express = require('express');
const router = express.Router();
const CoursesController = require('../app/controllers/CoursesController');

router.get('/create', CoursesController.create);
router.post('/store', CoursesController.store);
router.get('/:_id', CoursesController.show);



module.exports = router;