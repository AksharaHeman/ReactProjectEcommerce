import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Context";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products, addToCart } = useProducts();
  const navigate = useNavigate();

  return (
    
    <div style={{ display: "flex", padding: "40px", gap: "12px", background: "#ece5e5", justifyContent:"space-around" }}>
     <Container fluid
        style={{
          width: "100%",
          height: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "20px",
        }}
      > 
        {products.map((product) => {
          return (
            // <div
            //   key={product.id}
            //   style={{
            //     borderRadius: "8px",
            //     boxShadow: "10px 10px rgb(174, 162, 162)",
            //     display: "flex",
            //     flexDirection: "column",
            //     overflow: "hidden",
            //   }}
            // >
            //   <img
            //     style={{ height: "200px", objectFit: "contain" }}
            //     src={product.images[0]}
            //     alt=""
            //   />
            //   <div
            //     style={{
            //       padding: "20px",
            //       display: "flex",
            //       flexDirection: "row",
            //       justifyContent: "space-between",
            //     }}
            //   >
            //     <h1 style={{ fontSize: "25px", fontStyle: "italic" }}>
            //       <a
            //         onClick={() => navigate(`/products/${product.id}`)}
            //         href=""
            //         style={{ textDecoration: "none", color: "black" }}
            //       >
            //         {product.title}
            //       </a>
            //     </h1>
            //     <div
            //       style={{
            //         display: "flex",
            //         flexDirection: "row",
            //         justifyContent: "space-between",
            //       }}
            //     >
            //       <button
            //         onClick={() => addToCart(product)}
            //         style={{
            //           fontSize: "10px",
            //           background: "white",
            //           border: "none",
            //         }}
            //       >
            //         <i
            //           style={{
            //             padding: "10px",
            //             color: "blue",
            //             fontSize: "30px",
            //           }}
            //           className="fa-solid fa-cart-shopping"
            //         ></i>
            //       </button>
            //       <h1
            //         style={{
            //           fontSize: "25px",
            //           fontStyle: "italic",
            //           color: "red",
            //         }}
            //       >
            //         Rs.{product.price}
            //       </h1>
            //     </div>
            //   </div>
            // </div>
            <ProductCard key={product.id} product={product} addToCart={addToCart} page="products"/>
            
          );
        })}
     </Container> 
    </div>
    
  );
};

export default Products;
