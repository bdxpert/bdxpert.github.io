const express = require('express');
const cookieParser = require('cookie-parser');

const path = require('path');
const app = express();

// parses request cookies, populating req.cookies and req.signedCookies
app.use(cookieParser("salt for cookie signing"));

app.use(express.urlencoded({"extended": false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));


app.get('/', (req, res) => {
    // fetch cookies
    var cookie = req.headers.cookie;
    let cokkies = [];
    let cookieDate = cookie.split('; ');
    // console.log(cookieDate);

    cookieDate.map((item) => {
        let data = item.trim().split('=');
        cokkies.push({ 'key':data[0], 'value': data[1] });
    });

    res.render("itemform", { cokkies: cokkies });
});

app.post('/', (req, res) => {
    res.cookie(req.body.key, req.body.name);

    res.redirect(303, '/');
});

app.listen(3000);