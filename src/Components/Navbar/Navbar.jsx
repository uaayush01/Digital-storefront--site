import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6"
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
      const[isopen ,setisopen]=useState(false)
      
      const ToggleChange =()=>{
        isopen === false?setisopen(true):setisopen(false)
      }
     
  return (
    <>
      <div>
        <header className=" bg-white border-b border-gray-200 relative">
          <div className="container mx-auto flex justify-between p-5 items-center">
            <div>
              <Link to='/'>
                <h3 className="font-bold text-2xl">
                  Mech<span className="text-red-500">Shop</span>
                </h3>
              </Link>
            </div>
            <div className=" md:block hidden">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
                </Link>
               <Link to="/allproducts"> <li className="mr-5 hover:text-gray-900 cursor-pointer">All Products</li></Link>
               
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Mens</li>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Kids</li>
              </ul>
            </div>
           
              {
                isopen?
                <div className="">
              <ul className="flex flex-col gap-10 w-full text-2xl left-0 h-screen absolute top-[73px] z-10 bg-[red] items-center text-white text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
                </Link>
                
                <li className="mr-5 hover:text-gray-900 cursor-pointer">
      <Link to="/allproducts">All Products</Link>
    </li>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Mens</li>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Kids</li>
              </ul>
              <button className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer" onClick={ToggleChange}><GrClose size={30} /></button>
            </div>:""
              }
              
            <div className="flex justify-center items-center gap-3">
            <Link to="/SignUp">
              <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  font-semibold"> SignUp
              </button>
              </Link>
              <Link to="/login">
              <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  font-semibold"> Login
              </button>
              </Link>
              
              <Link to="/cart"><button><FaCartShopping size={25} /></button></Link>
             {
              isopen?"":
               <button className="md:hidden" onClick={ToggleChange}><GiHamburgerMenu size={25} /></button>
             }
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar
