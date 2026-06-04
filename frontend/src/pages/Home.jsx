import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");


    const loadProduct = async () => {
        try {
            const res = await api.get(`/products?search=${search}&category=${category}`)
            setProducts(res.data);
        } catch (error) {
            console.log("error Loading products", error);
        }
    }

    useEffect(() => {
        loadProduct();
    }, [search, category]);


    const addToCart =async (productId)=>{
        const userId = localStorage.getItem("userId");
        if(!userId){
            alert("please log in to add products");
            return;
        }

        const res = await api.post(`/cart/add`, {userId, productId});

        const total = res.data.cart.items.reduce(
            (sum, item) => sum + item.productId.price * item.quantity, 0
        );
        localStorage.setItem("cartCount", total)
        window.dispatchEvent(new Event("cartUpdated"))
    }

    return (
        <div className="p-6">
            <div className="mb-4 flex gap-3">
                <input
                    placeholder="Search products.."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-3 py-2 rounded w-1/2"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border px-3 py-2 rounded"
                >
                    <option value="">All Categories</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Mobiles">Mobiles</option>
                </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="border p-3 rounded shadow hover:shadow-lg transition"
                    >
                        <Link to={`/product/${product._id}`}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-40 object-contain bg-white rounded"
                            />

                            <h2 className="mt-2 font-semibold text-lg">
                                {product.title}
                            </h2>

                            <p className="text-gray-600">
                                ₹{product.price}
                            </p>
                        </Link>

                        <button
                            onClick={() => addToCart(product._id)}
                            className="mt-3 w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
                        >
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}