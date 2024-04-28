
import banner1 from "../../assets/banner1.jpg"
const Herosection = () => {
  return (
   <>
   <div className="relative">
      <div>
        <img src={banner1} alt="" className='w-full object-cover object-center' />
      </div>
    </div>
    <div className='absolute top-[40%] right-[50%]'>
        <h1 className='text-5xl font-bold text-[red] sm:tect-2xl md:text-3xl lg: text-5xl '>Discover  Your Next Adventure</h1>
        <p className="text-[10px] lg:text-2xl nt-2 lg:mt-5 font-semibold"> Shop Our Latest Arrival & Unleash Your Style</p>
    </div>
    </>
  )
}

export default Herosection
