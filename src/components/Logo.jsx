import logoHeader from "../assets/img/logo-header.svg"
import logoFooter from "../assets/img/logo-footer.svg"

const Logo = ({ variant = "headerPink", width = 253, height = 44}) =>{
    const logoSrc = variant === 'footerWhite' ? logoFooter :logoHeader;
    return(
        <img src={logoSrc} alt="Logo Digital Store" 
        width={width}
        height={height}
        />
    )
}

export default Logo;
