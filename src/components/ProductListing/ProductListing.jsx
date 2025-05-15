import ProductCard from "../ProductCard/ProductCard";

const ProductListing = ({products}) => {
    return ( 
        <>
          <section className="flex flex-wrap justify-content-center">
            {products.map((product, index) => (
                 <ProductCard
                    key={index}
                    imagem={product.imagem}
                    category={product.category}
                    name={product.name}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                 />
            ))}
            </section>
        </>
     );
}
 
export default ProductListing;