import ProductOptions from "../ProductOptions/ProductOptions";
import styles from "./BuyBox.module.css"
import { Rating } from "primereact/rating";

const BuyBox = ({name, reference, rating, price, priceDiscount, description, children}) => {
    return ( 
        <>
          <div className={styles.buyBoxContainer}>
             <h3 className={styles.nameProduct}>{name}</h3>
             <p className={styles.pReference}>{reference}</p>

             <div>
                <div className="card flex gap-2">
                    <Rating value={4} readOnly cancel={false} />
                    <span className={styles.rating}>{rating}</span>
                </div>
             </div>

             

             <span className={styles.prices}>
             <span className={styles.moneySymbol}>R$</span>
                {price &&(
                    <p className={styles.priceOriginal}>{price}</p>
                   
                )}
                   <p className={styles.priceDiscounted}>{priceDiscount}</p>
            </span>
            <p className={styles.descriptionText}>Descrição do produto</p>
            <p className={styles.description}>{description}</p>

            {children}

            <div className={styles.buttonBuyBox}>
              <a href="#" target="_self" rel="noopener noreferrer"
                        className="no-underline p-button border-round-md py-3 px-7">
                          comprar
                 </a>
            </div>
          </div>
        </>
     );
}
 
export default BuyBox;