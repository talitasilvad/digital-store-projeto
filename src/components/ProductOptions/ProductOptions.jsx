import { useState } from "react";
import styles from "./ProductOptions.module.css"

const ProductOptions = ({options, shape= "square", type = "color"}) => {
  const [selected, setSelected]= useState(null)
  const format = shape === "circle" ? styles.colorsOptions : styles.sizesOptions
  const titleClass = type === "text" ? styles.sizes : styles.colors

    return (

        <>
        {type === "text" && (<p className={titleClass}>Tamanho</p>)}

          <div className="flex gap-2">
            {options.map((option, index) => (
                 <div key={index} 
                      className={`${format} ${selected === option ? styles.active : ""}`}
                      onClick={() => setSelected(option)} 
                      style={type === "color" ? { backgroundColor: option } : {}}
                      >
                        {type === "text" ? option : ""}   
                 </div>
            ))}
            </div>
        </>

     );
}
 
export default ProductOptions;