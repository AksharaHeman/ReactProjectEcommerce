import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeaderSection from "../Components/HeaderSection/HeaderSection"
import Products from "../Pages/Products/Products"
import ProductDescription from "../Pages/Products/ProductDescription"
import Cart from "../Pages/Cart/Cart"

const Router=()=>{
    return(
        <BrowserRouter>
            <HeaderSection />
            <Routes>
                <Route path="/" Component={Products} />
                <Route path="/cart" Component={Cart} />
                <Route path="/products/:id" Component={ProductDescription} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router