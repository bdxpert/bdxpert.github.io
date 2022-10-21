const express = require('express');
const app = express();

app.use(express.urlencoded({"extended":false}));

app.get('/', (req, res) => {
    res.send(`<form method="post" action="/result">
                <label for="name">Name</label>
                <input name="name" id="name">
                <label for="age">Age</label>
                <input name="age" id="age">
                <input type="submit" >
               </form>
            `);
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
     res.send(`Welcome ${name} age: ${age}`);
});

app.listen(3000);