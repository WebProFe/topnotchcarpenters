const data = require('../models/reviews');

module.exports = app => {
    app.get('/index-three-col-reviews', function (req, res) {
        res.send(data);
    });
}


