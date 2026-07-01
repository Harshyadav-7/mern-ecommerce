import express from 'express';
import {
    saveAddress,
    getAddresses,
}from "../controllers/addressController.js";

const router = express.Router();

// router to save address
router.post('/add', saveAddress);

// router to get address;
router.get('/:userId', getAddresses);

export default router;