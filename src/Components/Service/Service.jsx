import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";

const Service = () => {
  return (
    <>
    <div className=" container mx-auto px-5 flex pt-20 gap-10 itema-center justify-center flex-wrap">
        
    <div className=" bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500">
        <FaShippingFast  size={30}/>
        <p>FREE SHIPPING</p>
    </div>
    
    <div className=" bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500">
    <FaOpencart />
        <p>AUTHENTIC PRODUCTS</p>
    </div>

    <div className=" bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500">
    <BsCurrencyExchange />
        <p>EASY RETURN </p>
    </div>

    <div className=" bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500">
    <MdPayment />
        <p>SECURE PAYMENT</p>
    </div>
    </div>
    
    </>
  )
}

export default Service
