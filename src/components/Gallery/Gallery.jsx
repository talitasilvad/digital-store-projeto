import styles from "./Gallery.module.css"
import { Galleria } from 'primereact/galleria';

const Gallery = ({images, showThumbs, width, height, padding, marginTop, radius, className}) => {

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
        return <img src={item.src} alt="Imagem do produto" style={{ width: width, height: height, borderRadius: radius, padding: padding, marginTop: marginTop, display: 'block' }} />;
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
              thumbnail={thumbnailTemplate} />
          </div>
        </>
     );
}
 
export default Gallery;