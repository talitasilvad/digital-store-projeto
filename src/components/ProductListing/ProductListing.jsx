import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductListing = ({products}) => {
    return ( 
        <>
          <section className="ml-2 md:ml-6 overflow-hidden">
            <div className="grid">
              {products.map((product) => (
                  <div key={product.id} className="col-6 md:col-4 lg:col-3 p-2">
                    <Link to={`/product/${product.id}`} className="no-underline">
                      <ProductCard
                        imagem={product.imagem}
                        category={product.category}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                      />
                    </Link>
                  </div>
              ))}
            </div>
            </section>
        </>
     );
}
 
export default ProductListing;