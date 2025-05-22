import Gallery from "../components/Gallery/Gallery";
import { homeSlide } from "../components/Gallery/Images";

const HomePage = () => {
    return ( 
        <>
          <div>
             <Gallery 
             images={homeSlide} 
             width="100%" 
             height="661px" 
             className="slideGallery"
             padding="5rem 10rem"      
             />
          </div>
        </>
     );
}
 
export default HomePage;