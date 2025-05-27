import styles from "./Gallery.module.css"
import { Galleria } from 'primereact/galleria';

const Gallery = ({images, showThumbs, width, height, padding, radius, className}) => {

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {

        if (item.custom) {
        return (
            <div className={styles.customSlide}>
                <div className={styles.slideContainer}>
                    <div>
                        <p className={styles.slideAdvertising}>Melhores ofertas personalizadas</p>
                        <div className={styles.title}>
                            <h2>Queima de estoque Nike</h2>
                            <img className={styles.emojiFire} src="/public/produtosImg/firemoji.png" alt="" />
                        </div>
                        <p className={styles.slideText}>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <a href="#" target="_self" rel="noopener noreferrer"
                      className="no-underline p-button border-round-md py-3 px-7">
                        Ver Ofertas
                      </a>
                    </div>
                      <div className={styles.imgsContatiner}>
                          <img className={styles.slideShoes} src="/public/produtosImg/White-Sneakers-PNG-Clipart 1.png" alt="" />
                          <img className={styles.ornament} src="/public/produtosImg/Ornament 11.png" alt="" />
                      </div>
                </div>
            </div>
        );
    }
        return <img src={item.src} alt="Imagem do produto" style={{ width: width, height: height, borderRadius: radius, padding: padding, display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.src} alt="Imagem em miniatura do produto" style={{width: width, height: height, borderRadius: radius, display: 'block' }} />;
    }

    return ( 
        <>
          <div>
              <Galleria 
              value={images} 
              responsiveOptions={responsiveOptions}
              numVisible={5} circular className={styles[className]}
              showItemNavigators showThumbnails={!!showThumbs} 
              item={itemTemplate} 
              thumbnail={thumbnailTemplate} 
              />
          </div>
        </>
     );
}
 
export default Gallery;