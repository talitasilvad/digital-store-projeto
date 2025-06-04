import BuyBox from "../components/BuyBox/BuyBox";
import Gallery from "../components/Gallery/Gallery";
import { producImage } from "../components/Gallery/ImagesData";
import ProductOptions from "../components/ProductOptions/ProductOptions";
import { colorsOptions, sizesOptions } from "../components/ProductOptions/ProductOptionsData";
import Section from "../components/Section/Section"
import ProductListing from "../components/ProductListing/ProductListing"
import { produtosAlta, produtosRelacionados } from "../components/ProductListing/ProductsData";

const ProductViewPage = () => {
    return ( 
        <>
          <div className="flex">
              <Gallery
              images={producImage}
              showThumbs
              width="700px"
              height="570px"
              radius="4px"
              className="viewGallery"
              />
              <BuyBox
               name="Tênis Nike Revolution 6 Next Nature Masculino"
               reference="Casual | Nike | REF:38416711"
               rating="(90 avalições)"
               price="219,00"
               priceDiscount="300,00"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              >
                <ProductOptions options={sizesOptions} type="text"/>
                <ProductOptions options={colorsOptions} shape="circle"/>
              </BuyBox>
          </div>
          <Section 
               title="Produtos relacionados"
               titleAlign="left"
                link={{ href: "/produtos", text: "Ver todos" }}
              >
                <ProductListing products={produtosRelacionados}/>
              </Section>
        </>
     );
}
 
export default ProductViewPage;