import styles from "./ProductCard.module.css"

const ProductCard = ({imagem, name, category, price, priceDiscount}) => {
    return ( 
        <>
          <section>
              <div className={styles.divCard}>
                  <div className={styles.divCardImg}>
                     <img className={styles.cardImg} src={imagem} alt="" />
                  </div>
                    <h6 className={styles.cardCategory}>{category}</h6>
                    <h5 className={styles.cardName}>{name}</h5>
                    <span className={styles.prices}>

                        {priceDiscount &&(
                            <p className={styles.priceDiscounted}>{priceDiscount}</p>
                        )}
                        <p className={styles.priceOriginal}>{price}</p>
                    </span>
              </div>
          </section>
        </>
     );
}
 
export default ProductCard;