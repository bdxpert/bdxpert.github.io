const express = require('express');
const productController = require('../controllers/products');
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);
router.get('/add-product', productController.getAddProduct);
router.post('/add-product', productController.saveProduct);
module.exports = router;