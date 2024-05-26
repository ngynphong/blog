const Albums = require('../models/Albums');
const {multipleMongooseToObject} = require('../../until/mongoose');
class AlbumsController{
    //[GET] /albums
    index(req, res, next){
        Albums.find({})
        .then(albums => res.render('albums',{
            albums: multipleMongooseToObject(albums)
        }))
        .catch(next)

    }
}
module.exports = new AlbumsController;