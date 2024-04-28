import model1 from "../../assets/GalleryImages/model1.jpg"
import model2 from "../../assets/GalleryImages/model2.jpg"
import model3 from "../../assets/GalleryImages/model3.jpg"
import electronics from "../../assets/GalleryImages/electronics.jpg"
import products from "../../assets/GalleryImages/products.jpg"
import shoes from "../../assets/GalleryImages/shoes.jpeg"
const Gallery = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto flex flex-wrap">
    
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={model3}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={electronics}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={model1}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={model2} sizes="20px"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={products}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={shoes}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Gallery
