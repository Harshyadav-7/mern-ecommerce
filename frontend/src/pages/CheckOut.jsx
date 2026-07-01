import {useState, useEffect} from "react";
import api from "../api/axios";

export default function CheckOut(){
    const userId = localStorage.getItem("userId");
    const [address, setAddress] =useState([]);
    const [cart, setCart] =useState(null);


    useEffect(() => {
        api.get(`/cart/${userId}`).then((res) => setCart(res.data));
        api.get(`/address/${userId}`).then((res)=> setAddress(res.data))
    }, []);

    if(!cart){
        return <div>Loading....</div>
    }
}

