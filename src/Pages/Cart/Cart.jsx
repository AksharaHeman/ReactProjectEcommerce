import { Container } from "react-bootstrap"
import { useProducts } from "../../Context"
import { Button } from 'antd';
import ProductCard from "../Products/ProductCard";
const Cart=()=>{
    const {cart,removeFromCart}=useProducts()
    console.log(cart);
    return(
        <div style={{background: "#ece5e5"}}>
            <Container>
            <h3 style={{textAlign:"center"}}>Your Cart</h3>
            {
                cart.map((product)=>{
                    return(
                        //  <div key={product.id} style={{background:"gray",margin:"10px"}}>
                        //     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        //         <ul>
                        //             <li><h4>{product.title}</h4>
                        //             <h4>{product.price}</h4></li>
                        //         </ul>
                                
                        //     </div> 
                        //      <Button type="primary" onClick={()=>removeFromCart(product)}>Remove from Cart</Button>
                        //  </div>
                        <ProductCard product={product} page="cart"></ProductCard>
                    )
                })
            }
            </Container>
        </div>
    )
}

export default Cart