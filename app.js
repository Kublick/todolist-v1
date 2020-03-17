const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');


app.get("/", function (req, res) {
    
    var today = new Date();
    var currentDay = today.getDay();
    const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var day = daysWeek[currentDay];
    res.render('list', { kindOfDay: day });

});

app.listen(3000, function () {
    console.log("server is running")
});
