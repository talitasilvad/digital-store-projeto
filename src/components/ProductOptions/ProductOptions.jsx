import styles from "./ProductOptions.module.css"

const ProductOptions = ({options, radius, shape= "square", type = "color"}) => {
    return ( 
        <>
          <div className="flex">
            {options.map((option, index) => (
                 <div key={index}>
                    {option}
                 </div>
            ))}
            </div>
        </>
     );
}
 
export default ProductOptions;