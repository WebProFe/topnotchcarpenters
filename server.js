// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SampleData");

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

// const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));
// require('./routes/email')(app);
require('./routes/homePage')(app);
require('./routes/workHist')(app);
require('./routes/projects')(app);
require('./routes/skills')(app);
require('./routes/reviews')(app);
require('./routes/gallery')(app);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Emails");


if (process.env.NODE_ENV === 'production') {
    //Express will serve up production assets
    app.use(express.static('client/build'));

    //Express will serve up the index.html file
    //if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));