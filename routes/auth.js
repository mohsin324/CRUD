const express = require('express');
const router = express.Router();
const { getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct } = require('../controllers/auth');

router.get('/', getAllProducts);
router.get('/:idd', getSingleProduct);
router.post('/post/:id', addProduct);
router.post('/replace/:idd', updateProduct);
router.delete('/delete/:id', deleteProduct);









module.exports = router;