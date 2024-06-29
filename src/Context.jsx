import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const MyContext=createContext()
export const MyProvider=({children})=>{
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    
    const fetchProduct = async () =>{
        try{
            const {data}=await axios.get("https://dummyjson.com/products")
            setProducts(data.products)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchProduct()
    },[setProducts])

    const addToCart=(product)=>{
        setCart((prev)=>[product,...prev])
    }
    const removeFromCart=(product)=>{
        setCart((prev)=>prev.filter((item)=>item.id!==product.id))
    }
    const searchProducts = (input) => {
        if(input=="") {
            fetchProduct()
        }else{
            const pdt=products.filter((product)=>product.title.toLowerCase().includes(input.toLowerCase()))
            setProducts(pdt)
        }
        
        console.log(input);
    }
    
    return(
        <MyContext.Provider value={{products,setProducts,cart,setCart,addToCart,removeFromCart,searchProducts}}>
            {children}
        </MyContext.Provider>
    )
}
export const useProducts=()=>{
    return useContext(MyContext)
}