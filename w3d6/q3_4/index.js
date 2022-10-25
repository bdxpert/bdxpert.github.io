const express = require('express');
const path = require('path');
const app = express();
const Product = require('./product');
app.use(express.urlencoded({"extended": false}));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

let cart = new Map();
app.get('/', (req, res) => {
    res.render("shop", { prods: Product.getAll() } );
});

app.get('/details', (req, res) => {
    console.log(req.query.name);
    console.log("obj")
    console.log(Product.find(req.query.name));
    console.log("objend")
    res.render("product", { product: Product.find(req.query.name) } );
});

app.post('/addToCart', (req, res) => {

    // const prod = Product.find(req.body.name);
    // let proItem;
    console.log("req.body.name");
    console.log(req.body.name);
    console.log(cart.get(req.body.name));
    if(cart.get(req.body.name) == undefined) {
        console.log("cart8888")
        cart.set(req.body.name, {name:req.body.name, price:req.body.price, quantity: 1});
    } else {
        const cartItem = cart.get(req.body.name);
        console.log("cartI33")
        console.log(cartItem);
        console.log("cartI")
        cartItem.quantity = cartItem.quantity +1;
        cartItem.price = req.body.price * cartItem.quantity;
        cart.set(req.body.name, cartItem);
    }


    /*cart.forEach(function(item) {
        if(item.)
        proItem =
    });
    if()*/
    // cart.push({req.body.name : {price:req.body.price, quantity: 1}});

    /*console.log(req.body.name);
    console.log("obj");
    console.log(Product.find(req.body.name));
    console.log("objend");*/

    res.redirect(303, '/cart');
});

app.get('/cart', (req, res) => {
    console.log(cart);
    res.render("shoppingcart", { carts: cart } );
});

app.listen(3000);