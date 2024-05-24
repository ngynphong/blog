const newsRouter = require('./news');
const siteRouter = require('./site');
const albumsRouter = require('./albums');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/albums', albumsRouter);
    app.use('/', siteRouter);

}
module.exports = route;