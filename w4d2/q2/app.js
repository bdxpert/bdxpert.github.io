const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

const list = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.get("/", (req, res) => {
    res.render("form");
});

app.get("/8ball", (req, res) => {
    console.log(req.body.question);
    if(req.body.question !="" || req.body.question != undefined){
        // let Math.random(0,list.length);
        // list[req.body.fname + " " + req.body.lname] = { ...req.body };
        res.send(list[parseInt(Math.random(0,20)*10)]);
    }

    res.status(200);
    res.end();
});
/*
app.get("/list", (req, res) => {
    res.render("list", { list: list });
});
*/
app.listen(3000);