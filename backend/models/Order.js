import mongoose from "mongoose"

const OrderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: Number,
        price: Number
    }
],

    address:{
        fullName: String,
        phone: String,
        addressLine: String,
        city: String,
        state: String,
        pincode: String,
    },
    totalAmount: Number,
    paymentMethod: {
        type: String,
        default: 'COD'
    },
    status:{
        default: 'placed',
    },
    timestamps: true
});

export default mongoose.model('Order', OrderSchema)