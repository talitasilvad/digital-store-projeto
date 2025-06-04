import styles from "./Section.module.css"

const Section = ({title, titleAlign = "left", link, children}) => {
    const alignText = titleAlign === "center" ? styles.center : styles.left
    return ( 
        <>
          <section>
               <div className={`${styles.divSection} ${alignText}`}>
                  <h4 className={styles.title}>{title}</h4>
                  {link && (
                    <a className={styles.link} href={link.href}>{link.text} 
                    <i className="pi pi-arrow-right" style={{ marginLeft: '1rem' }}></i></a>
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
