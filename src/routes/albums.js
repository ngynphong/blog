const express = require('express');
const router = express.Router();
const albumsController = require('../app/controllers/AlbumsController');

router.use('/', albumsController.index);


module.exports = router;
