import styles from "./Section.module.css"
import { Link } from 'react-router-dom';

const Section = ({title, titleAlign = "left", link, children}) => {
    const alignText = titleAlign === "center" ? styles.center : styles.left
    return ( 
        <>
          <section>
               <div className={`${styles.divSection} ${alignText}`}>
                  <h4 className={styles.title}>{title}</h4>
                  {link && (
                    <Link className={styles.link} to={link.href}>{link.text} 
                    <i className="pi pi-arrow-right" style={{ marginLeft: '1rem' }}></i>
                    </Link>
                  )}
               </div>
               <div>
                  {children}
               </div>
          </section>
        </>
     );
}
 
export default Section;
