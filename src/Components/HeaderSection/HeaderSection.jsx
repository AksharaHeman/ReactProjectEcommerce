import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useProducts } from "../../Context";
import { Link } from "react-router-dom";
const HeaderSection = () => {
  const {cart,searchProducts}=useProducts()

  return (
    <div style={{margin:"0",padding:"0"}}>
      <Navbar expand="lg">
        <Container fluid style={{background:"rgb(182, 179, 179)"}}>
            <img src="https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.jpg" width={"70px"} height={"50px"} style={{borderRadius:"8px"}} alt="" />
          <Navbar.Brand href="#" style={{fontSize:"30px",fontStyle:"italic",fontWeight:"bold"}}>shoppify</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link><Link to="/" style={{textDecoration:"none",color:"black"}}>Products</Link></Nav.Link>
              <Nav.Link> <Link style={{textDecoration:"none",color:"black"}} to="cart">Cart({cart.length})</Link></Nav.Link>
              
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                onChange={(e)=>searchProducts(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button type="submit" variant="outline-success" style={{border:"none" }}><i style={{fontSize:"20px"}} className="fa-solid fa-magnifying-glass"></i></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderSection
