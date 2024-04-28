import Gallery from '../../Components/Gallery/Gallery'
import Herosection from '../../Components/Herosection/Herosection'
import Layout from '../../Components/Layout/Layout'
import Service from '../../Components/Service/Service'
const home = () => {
  return (
      <Layout>
       <Herosection/>
       <Service/>
       <Gallery/>
      </Layout>
  )
}


export default home
