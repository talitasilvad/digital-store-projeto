import Gallery from "../components/Gallery/Gallery";
import { homeSlide } from "../components/Gallery/Images";

const HomePage = () => {
    return ( 
        <>
          <div>
             <Gallery 
             images={homeSlide} 
             width="100%" 
             height="auto" 
             className="slideGallery"
             padding="5rem 3rem 1rem 3rem"
             marginTop="5rem"
             
             />
          </div>
        </>
     );
}
 
export default HomePage;