const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

const Product = require('./product');
app.use(express.urlencoded({"extended": false}));

app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'salt for cookie signing',
}));
app.use((req, res, next) => {
    if (!req.session.list) {
        req.session.list = [];
    }
    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

app.use('/css', express.static(path.join(__dirname, 'css')));

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
    res.render("shop", { prods: Product.getAll() } );
});

app.get('/details', (req, res) => {
    console.log(req.query.name);
    // console.log("obj");
    //console.log(Product.find(req.query.name));
    // console.log("objend");
    res.render("product", { product: Product.find(req.query.name) } );
});

app.post('/addToCart', (req, res) => {

    // const prod = Product.find(req.body.name);
    // let proItem;
    console.log("req.body.name");
    console.log(req.body.name);
    // console.log(cart.get(req.body.name));
    let found = false;
    req.session.list.forEach(function(item){
       if(item.name == req.body.name) {
           //item found
           item.quantity = item.quantity +1;
           item.price = req.body.price * item.quantity;
           found = true;
       }
    });
    if(!found) {
        req.session.list.push({name:req.body.name, price:req.body.price, quantity: 1});
    }
    /*if(req.session.list[encodeURIComponent(req.body.name)] == undefined) {
        console.log("cart8888");
        req.session.list.push({name:req.body.name, price:req.body.price, quantity: 1});
        // cart.set(req.body.name, {name:req.body.name, price:req.body.price, quantity: 1});
    } else {
        const cartItem = req.session.list[encodeURIComponent(req.body.name)];
        console.log("cartI33");
        console.log(cartItem);
        // console.log("cartI");
        cartItem.quantity = cartItem.quantity +1;
        cartItem.price = req.body.price * cartItem.quantity;
        // cart.set(req.body.name, cartItem);
        req.session.list[encodeURIComponent(req.body.name)] = cartItem;
    }*/
    console.log(req.session.list);
    res.send("Number of item in the cart: " + req.session.list.length);
    res.status(200);
    res.end();
    // res.redirect(303, '/cart');
});

app.get('/cart', (req, res) => {
    console.log(req.session.list['Monitor']);
    res.render("shoppingcart", { carts: req.session.list } );
});

app.listen(3000);