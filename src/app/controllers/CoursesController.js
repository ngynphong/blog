const Courses = require('../models/Course');
const { mongooseToObject } = require('../../until/mongoose');
class CoursesController {
    // [GET] /news/:slug
    show(req, res, next) {
        Courses.findOne({ _id: req.params._id })
            .then(courses => res.render('courses/show', {
                courses: mongooseToObject(courses)
            }

            ))
            .catch(next)
    };

    create(req, res, next){
        res.render('courses/create');
    };

    store(req, res, next){
        const formData = req.body;
        const course = new Courses(formData);
        course.save()
        .then(() => res.redirect('/'))
        .catch(eror => {

        })        
    };
}


module.exports = new CoursesController;
