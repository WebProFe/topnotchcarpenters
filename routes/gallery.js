const data = require('../models/gallery');

module.exports = app => {
    app.get('/gallery', function (req, res) {
        res.send(data);
    });
}