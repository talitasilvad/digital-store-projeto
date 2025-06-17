import Gallery from "../components/Gallery/Gallery";
import { homeSlide } from "../components/Gallery/ImagesData";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing"
import styles from "./HomePage.module.css"
import { produtosAlta } from "../components/ProductListing/ProductsData";
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

             <Section
               title="Produtos em alta"
               titleAlign="left"
             >
                <ProductListing products={produtosAlta} />
             </Section>
          </div>
          {/* FINAL DA HOMEPAGE */}
          <div className={styles.endHomePage}>
            <div className={styles.endImgs}>
               <img className={styles.shoesImg} src="/public/produtosImg/Laye-1-homeImg.png" alt="" />
               <div className={styles.divImgBackg}><img className={styles.imgBackground} src="/public/produtosImg/Laye-2-homeImg.png" alt="" /></div>
            </div>
            <div className={styles.endOffer}>
               <p className={styles.endP}>Oferta especial</p>
               <h2>Air Jordan edição de colecionador</h2>
               <p className={styles.endPtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
               <a href="#" target="_self" rel="noopener noreferrer"
                      className="buttonEnd no-underline p-button border-round-md py-3 px-7 hover:bg-pink-500">
                        Ver Ofertas
               </a>
            </div>
          </div>
        </>
     );
}
 
export default HomePage;