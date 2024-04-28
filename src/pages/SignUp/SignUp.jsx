import Layout from "../../Components/Layout/Layout"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <Layout>
    <div>
      <div className="container px-5 py-24 mx-auto flex items-center justify-center">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col  w-full mt-8 md:mt-0  shadow-md">
      <h2 className="text-gray-900 text-5xl mb-1 font-medium title-font">SignUp </h2>
      
      <div className="relative mb-4">
        <label htmlFor="text" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="email" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Sign Up </button>
      <p className="text-xs text-gray-500 mt-5">Already  have a account ?{" "}
      <Link to="/login">
      <button className='cursor-pointer hover:text-blue-500'>Login</button>
      </Link>
     </p>
    </div>
  </div>
     </div>
     </Layout>
  )
}

export default SignUp
