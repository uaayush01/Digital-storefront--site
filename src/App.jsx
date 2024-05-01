import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home/home"
import Cart from "./pages/Cart/cart"
import AllProducts from "./Components/AllProducts/AllProducts"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import { useState } from "react"
const App = () => {
  const [cart,setCart]=useState([])
    const AddToCart=(product)=>{
    setCart([...cart,product])
    }
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/cart" element={ <Cart cart={cart}/>}></Route>
        <Route path="/allproducts" element={ <AllProducts AddToCart={AddToCart}/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
        <Route path="/SignUp" element={ <SignUp/>}></Route>
              </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
