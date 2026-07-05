import {useEffect, useState} from 'react';
import api from "../api/axios";
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router';


export default function Productdetails(){

    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [searchParams] = useSearchParams();
    const searchedQuery = searchParams.get("q")

    const loadProduct = async() => {
        try{
            const res  = await api.get("/products/")
            const prod = res.data.find((item) => item._id === id)
            setProduct(prod);

        }catch(error) {
            console.log("error Loading products", error);
        }
    }

    useEffect(() =>{
        loadProduct();
    }, [])

    if(!product){
        return <div>Loading....</div>
    }

    const addToCart = async (productId) => {
            const userId = localStorage.getItem("userId");
            if (!userId) {
                alert("please log in to add products");
                return;
            }
    
            const res = await api.post(`/cart/add`, { userId, productId });
    
            const total = res.data.cart.items.reduce(
                (sum, item) => sum + item.productId.price * item.quantity, 0
            );
            localStorage.setItem("cartCount", total)
            window.dispatchEvent(new Event("cartUpdated"))
        }
    

    return(
        <div>
            {
                searchedQuery && (
                    <h1 className='text-2xl font-bold mb-3 text-center'>{searchedQuery}</h1>
                )
            }

            <div className='p-6 max-w-3xl mx-auto border  rounded shadow hover:shadow-lg transition'>
        <img src={product.image} alt={product.title} className='w-full h-40 object-contain bg-white rounded'/>
        <h1 className='text-2xl font-bold mt-4'>{product.title}</h1>
        <p className='text-gray-700 mt-2'>{product.description}</p>
        <p className='text-xl font-semibold mt-4'>{product.price}</p>


        <button onClick={() => addToCart(product._id)} className='mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500'>
            Add to Cart
        </button>
        </div>
        </div>
    )
}