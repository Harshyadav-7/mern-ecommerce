import express from 'express';
import {
    addToCart,
    removeItem,
    updateQuantity,
    getCart,
} from '../controllers/cartController.js';
const router = express.Router();

//router for add to cart a product
router.post('/add', addToCart);

//router to remove product from cart
router.post('/remove', removeItem);

//update quantity in the cart
router.post('/update', updateQuantity);

//router to get users cart
router.get('/:userId', getCart);

export default router;
