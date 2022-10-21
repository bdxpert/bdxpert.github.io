const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({"extended": false}));

app.use('/css', express.static(path.join(__dirname, 'css')));
//app.use('/css', express.static(path.join(__dirname, 'css')));
const date_ob = new Date();
const hour = date_ob.getHours();
// console.log(hour);
let cssVal = "day";

if (hour > 17 && hour < 7) {
    cssVal = "night";
}

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
                <html lang="en">
                <head>
                <link rel="stylesheet" href="/css/${cssVal}.css">
                </head>
                <body>
                <form method="post" action="/result">
                                <label for="name">Name</label>
                                <input name="name" id="name">
                                <label for="age">Age</label>
                                <input name="age" id="age">
                                <input type="submit">
                               </form>
                </body>
                </html>`
    );
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let resHtml = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <link rel="stylesheet" href="/css/${cssVal}.css">
                    </head>
                    <body>
                    Welcome <b>${name}</b> age: <b>${age}</b>
                    </body>
                    </html>`;

    res.send(resHtml);
});

app.listen(3000);