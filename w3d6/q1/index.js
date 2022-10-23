const express = require('express');
const path = require('path');
const app = express();

app.use('/css', express.static(path.join(__dirname, 'css')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

let cssVal = "day";
const date_ob = new Date();
const hour = date_ob.getHours();

if (hour > 17 && hour < 7) {
    cssVal = "night";
}

app.get('/', (req, res) => {
    const date = new Date();
    res.render("index", {
        time: date.toTimeString(),
        cssVal: cssVal,
    });
});
app.listen(3000);