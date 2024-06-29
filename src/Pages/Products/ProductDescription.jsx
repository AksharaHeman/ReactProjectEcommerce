import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Content } from "antd/es/layout/layout";

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    try {
        const { data } = await axios.get(`https://dummyjson.com/product/${id}`);
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
  };
  useEffect(() => {
    fetchProduct()
}, [id]);

  return (
    <Content
        style={{
          padding: '0 48px',
        }}
      >
    <div>
      
      {product?.images && product.images[0] ?<img src={product?.images[0]} width={"250px"} alt="" /> : ""}
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <h1><i style={{fontSize:"20px"}} className="fa-solid fa-indian-rupee-sign"></i>{product?.price}</h1>
    </div>
    </Content>
  );
};
export default ProductDescription;
