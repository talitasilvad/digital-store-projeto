import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductListing = ({products}) => {
    return ( 
        <>
          <section className="flex justify-content-start ml-6 flex-wrap overflow-hidden gap-6">
            {products.map((product) => (
                   <Link to={`/product/${product.id}` } key={product.id} className="no-underline">
                     <ProductCard
                        imagem={product.imagem}
                        category={product.category}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                     />
                   </Link>
            ))}
            </section>
        </>
     );
}
 
export default ProductListing;