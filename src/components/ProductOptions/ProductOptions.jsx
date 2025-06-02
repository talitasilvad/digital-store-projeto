import { useState } from "react";
import styles from "./ProductOptions.module.css"

const ProductOptions = ({options, radius, shape= "square", type = "color"}) => {
  const [selected, setSelected]= useState(null)
    return ( 
        <>
        <p className={styles.sizes}>Tamanho</p>
          <div className="flex gap-2">
            {options.map((option, index) => (
                 <div key={index} className={`${styles.sizesOptions} ${selected === option ? styles.active : ""}`}
                      onClick={() => setSelected(option)}>
                    {option}   
                 </div>
            ))}
            </div>
        </>
     );
}
 
export default ProductOptions;