import styles from './Footer.module.css'
import Information, { informationLinks, categoryLinks, contacLinks } from "./Information"; 
import Logo from "./Logo";
import facebookIcon from "../assets/img/facebook.svg";
import instagramIcon from "../assets/img/instagram.svg";
import twitterIcon from "../assets/img/twitter.svg"


const Footer = () => {
    return ( 
          <footer className={styles.footer}>
                <div className={styles.footerContent}>
                  <div className={styles.footercompany}>
                    <Logo variant="footerWhite"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <nav className={styles.navSocial}>
                      <a href="https://www.facebook.com/digitalcollegebr/" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook Digital College" />
                      </a>
                      <a href="https://www.instagram.com/digitalcollegebr/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram Digital College" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter Icon" />
                      </a>
                    </nav>
                  </div>
                  <div className={styles.info}>
                      <Information title="Informações" informations={informationLinks}/>
                      <Information title="Categorias" informations={categoryLinks}/>
                      <Information title="Contato" informations={contacLinks}/>
                  </div>
                </div>
                    <hr />
                <div className={styles.footerbottom}>
                    <p>© 2025 Digital Store</p>
                </div>
          </footer>
     );
}
 
export default Footer;