import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Context";
const { Meta } = Card;

const ProductCard = ({ product, addToCart, page }) => {
  const { removeFromCart } = useProducts();
  const navigate = useNavigate();
  console.log(page); 
  const showProduct = () => {
    navigate(`/products/${product.id}`);
  };
  const getActions = () => {
    if (page == "products") {
      return [<ShoppingCartOutlined onClick={() => addToCart(product)} />];
    } else {
      return [<button onClick={()=>removeFromCart(product)}>Remove Cart</button>];
    }
  };
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img height={"250px"} alt="example" src={product.images[0]} />}
      actions={getActions()}
    >
      <Meta
        onClick={showProduct}
        title={product.title}
        description={product.price}
      />
    </Card>
  );
};
export default ProductCard;
