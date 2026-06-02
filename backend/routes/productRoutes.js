import express from 'express';
import {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

//router to create a new product
router.post('/add', createProduct);


//route to get all product
router.get('/', getProduct );

//route to update product by id
router.put('/update/:id', updateProduct);

//route to delete product by id
router.delete('/delete/:id', deleteProduct);

export default router;