import Gallery from "../components/Gallery/Gallery";
import { homeSlide } from "../components/Gallery/Images";
import Section from "../components/Section/Section";
import styles from "./HomePage.module.css"
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

             <Section
               title="Coleções em destaque"
               titleAlign ="left"
             >
                <div className={styles.homeCollections}>
                    <div className={styles.homeCard}>
                       <span className={styles.homeSale}>30% OFF</span>
                       <img src="/public/produtosImg/collection-1.png" alt="" />
                       <a href="#" target="_self" rel="noopener noreferrer"
                         className="no-underline p-button border-round-md py-3 px-5">
                           Comprar
                         </a>
                    </div>

                    <div className={styles.homeCard}>
                       <span className={styles.homeSale}>30% OFF</span>
                       <img src="/public/produtosImg/collection-2.png" alt="" />
                       <a href="#" target="_self" rel="noopener noreferrer"
                         className="no-underline p-button border-round-md py-3 px-5">
                           Comprar
                         </a>
                    </div>

                    <div className={styles.homeCard}>
                       <span className={styles.homeSale}>30% OFF</span>
                       <img src="/public/produtosImg/collection-3.png" alt="" />
                       <a href="#" target="_self" rel="noopener noreferrer"
                         className="no-underline p-button border-round-md py-3 px-5">
                           Comprar
                         </a>
                    </div>
                </div>
             </Section>

             <Section
               title="Produtos disponíves"
               titleAlign="center"
             >
               <div className={styles.homeIconsContainer}>
                  <div className={styles.homeIcons}>
                     <div className={styles.iconWrapper}>
                        <img src="/public/produtosImg/Frame-1.svg" alt="" />
                     </div>
                     <p>Camisetas</p>
                  </div>

                  <div className={styles.homeIcons}>
                     <div className={styles.iconWrapper}>
                        <img src="/public/produtosImg/Frame-2.svg" alt="" />
                     </div>
                     <p>Calças</p>
                  </div>

                  <div className={styles.homeIcons}>
                     <div className={styles.capIcon} >
                        <img className={styles.homeIconsCap} src="/public/produtosImg/Frame-3.png" alt="" />
                     </div>
                     <p className={styles.pCap}>Bonés</p>
                  </div>

                  <div className={styles.homeIcons}>
                     <div className={styles.iconWrapper}>
                        <img src="/public/produtosImg/Frame-4.svg" alt="" />
                        </div>
                     <p>Headphones</p>
                  </div>

                  <div className={styles.homeIcons}>
                     <div className={styles.iconWrapper}>
                        <img src="/public/produtosImg/Frame-5.svg" alt="" />
                        </div>
                     <p>Tênis</p>
                  </div>
               </div>

             </Section>
          </div>
        </>
     );
}
 
export default HomePage;