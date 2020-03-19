const express = require("express");

const bodyParser = require("body-parser");

const app = express();

var items = [];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleDateString("en-US", options);

    // var currentDay = today.getDay();
    // const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // var day = daysWeek[currentDay];
    res.render('list', { kindOfDay: day, newListItems: items});
    
});

app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("server is running")
});
