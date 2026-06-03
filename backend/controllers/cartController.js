import Cart from '../models/Cart.js';

//add item to cart

export const addToCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId, items: [
                    { productId, quantity: 1 }
                ]
            });
        } else {

            const item = cart.items.find(i => i.productId.toString() === productId);

            if (item) {
                item.quantity += 1;
            } else {
                cart.items.push({ productId, quantity: 1 });  // cart.item nahi, cart.items
            }
        }



           

            await cart.save();
            res.json({
                message: 'Item Added to cart',
                cart
            })

        }catch (error) {
            console.log("ERROR:", error);
            res.status(500).json({ message: 'Server Error', error });
        }
    };


// remove item from cart
export const removeItem = async (req, res) => {
        try {
            const { userId, productId } = req.body
            const cart = await Cart.findOne({ userId });

            if (!cart) {
                return res.status(404).json({ message: "cart not found" });
            }
            cart.items = cart.items.filter(
                i => i.productId.toString() !== productId
            )

            await cart.save();
            res.json({
                message: 'items  removed from Cart',
                cart
            })
        } catch (error) {
            res.status(500).json({ message: "server error", error });
        }
    }

    //update quantity

    export const updateQuantity = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        const item = cart.items.find(
            i => i.productId.toString() === productId
        );

        if (!item) {
            return res.status(404).json({
                message: "Item not found in cart"
            });
        }

        item.quantity = quantity;

        await cart.save();

        res.json({
            message: "Item quantity updated",
            cart
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};
    //get cart by user ID
    export const getCart = async (req, res) => {
        try {
            const { userId } = req.params;
            const cart = await Cart.findOne({ userId }).populate('items.productId');
            res.json(cart);
        } catch (error) {
            res.status(500).json({ message: "server error", error })
        }
    }