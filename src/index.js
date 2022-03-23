const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require("mongoose")
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

mongoose.connect("mongodb+srv://shrati:65FywNUvGdDH49SQ@cluster0.tpfb4.mongodb.net/group28-DB", {
    useNewUrlParser: true
})
    .then(() => console.log("mongodb is conncted"))
    .catch(err => console.log(err))

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
