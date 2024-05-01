import { useEffect, useState } from "react"
import Layout from "../Layout/Layout"
import axios from "axios"
import allpro from '..//../assets/allpro.jpeg'


const AllProducts = ({AddToCart}) => {
  const [allCategory, setAllCategory] = useState([])
  const [selectProducts, setSelectProducts] = useState("")
  const [allProducts, setAllProducts] = useState([])
  const [originalProducts,setOriginalProducts]=useState([])
 
  // to show all products
  useEffect(() => {
    const AllProducts = async () => {
      const res = await axios("https://dummyjson.com/products")
      setAllProducts(res.data.products)
      setOriginalProducts(res.data.products)
      // console.log(res.data.products)
    }
    AllProducts();
  }, [])



  useEffect(() => {
    const getAllProductscategory = async () => {
      try {

        const res = await axios("https://dummyjson.com/products/categories")
        setAllCategory(res.data)
        // console.log(res.data);
      } catch (error) {
        console.log(error)
      }

    }
    getAllProductscategory();
  }, [])


  const filterProducts = (selectcategory) => {
    setSelectProducts(selectcategory)
    const data = selectcategory? originalProducts.filter((filterItem)=>filterItem.category===selectcategory):originalProducts;
    setAllProducts(data)
    // console.log(allProducts)

  }
  return (
    <>
      <Layout>
        <div className="relative">
          <img src={allpro} alt="loading" className="object-cover w-full object-center h-[200px] mt-5" />
          {/* <div className="w-full h-[200px] bg-black absolute top=0 left-0 opacity-[.4] "></div> */}
          <h2 className="absolute top-[40%] left-[6%] text-white font-semibold text-3xl md:tex-5xl">All Products</h2>
        </div>
        <div className=" flex gap-3 flex-wrap ">
          <select name="" id="" onChange={(e) => filterProducts(e.target.value)}>
            <option value="">Filter By Category</option>

            {
              allCategory.filter((filterItem) => !["motorcycle", "automotive"].includes(filterItem)).map((item, index) => (

                <option value={item}> {item}</option>


              ))}
          </select>
        </div>

                {/* All Products */}
        <div className="flex flex-wrap gap-10 justify-center">
          {
            allProducts.map((AllItems, index) => (
              <div key={index} className="border ">
                <img src={AllItems.thumbnail} alt="" className="object-cover object-cover " />
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> Brand:{AllItems.title}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Ratings:{AllItems.rating}</h2>
                  <p className="mt-1">Price:{AllItems.price}$</p>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=> AddToCart(AllItems)}>Add to cart</button>
                </div>
              </div>
            ))
          }
        </div>






      </Layout>
    </>
  )
}

export default AllProducts
