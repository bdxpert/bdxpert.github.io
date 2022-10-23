const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/addproduct', formsCSS: true, productCSS: true, activeAddProduct: true });
};
exports.saveProduct = (req, res, next) => {
// products.push({ title: req.body.title });
    const prod = new Product(req.body.title);
    prod.save();
    res.redirect('/');
};
exports.getAllProduct = (req, res, next) => {
    res.render('shop', { prods: Product.getAll(), pageTitle: 'Shop', path: '/', formsCSS: true, p
        roductCSS: true, activeShop: true });
};