const newsRouter = require('./news');
const siteRouter = require('./site');
const albumsRouter = require('./albums');
const coursesRouter = require('./courses');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/albums', albumsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);

}
module.exports = route;