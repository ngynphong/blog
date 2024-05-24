class AlbumsController{
    //[GET] /albums
    index(req, res){
        res.render('albums');
    }
}
module.exports = new AlbumsController;