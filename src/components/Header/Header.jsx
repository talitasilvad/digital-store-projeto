import styled from 'styled-components';
import styles from './Header.module.css'
import cartIcon from '../../assets/img/mini-cart.svg';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Logo from "../Logo";

const Nav = styled.nav`
margin: 2rem 1rem 0 0;
`

const NavList = styled.ul`
display: flex;
flex-direction: row;
align-content: center;
list-style: none;
gap: 1.5rem;
`

const StyledNavLink = styled(NavLink)`
    font-family: var(--font-principal);
    font-weight: 500;
    letter-spacing: 0.75px;
    position: relative;
    text-decoration: none;
    color: var(--color-dark-gray-2);
    border-bottom: 2px solid transparent;
    transition: color 0.3s ease, font-size 0.3s ease;
    &.active, &:hover{
      font-family: var(--font-principal);
      font-weight: 700;
      letter-spacing: 0.75px;
      color: var(--color-primary);
    
    }
    &::after{
      content: '';
      position: absolute;
      bottom: -0.3rem;
      left: 0;
      width: 0;
      height: 0.2rem;
      background-color: var(--color-primary);
      border-radius: 3px;
      transition: all 0.3s ease;
    }
    &.active::after, &:hover::after{
      width: 100%;
    }
`

const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // SIDEBAR
  const [visible, setVisible] = useState(false);
  const closeSidebar = () => setVisible(false);

  const handleSearch = () => {
    const searchTerm = search.trim(); 

    if (searchTerm !== '') {
      navigate(`/produtos?filter=${searchTerm}`); 
    } else {
      navigate('/produtos');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
    return ( 
        <>
        <header className={styles.header}>
              <div className={styles.headerContainer}>
                <div className={styles.headerContent}>
                  {/* MENU MOBILE */}
                  <Button className={styles.buttonIcon} icon="pi pi-bars" onClick={() => setVisible(true)} />
                    {/* MENU MOBILE */}
                      <div className={styles.logoHeader}>
                        <Logo variant="headerPink"/>
                      </div>
                    <div className={styles.headerSearch}>
                    <IconField iconPosition="right">
                      <InputIcon className="pi pi-search" onClick={handleSearch} />
                      <InputText
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Pesquisar produto..."
                      />
                    </IconField>
                  </div>
                      <div className={`${styles.desktopActions} flex align-items-center gap-3`}>
                        <NavLink to={"/cadastro"} className={styles.register}>
                          Cadastre-se
                        </NavLink>
                        <div className={styles.buttonLogin}>
                          <a href="#" target="_self" rel="noopener noreferrer"
                          className="no-underline p-button border-round-md py-2 px-4 hover:bg-pink-500">
                            Entrar
                          </a>
                        </div>
                          <div className={styles.cartDesktop}>
                            <div className="relative">
                            <img className={styles.cartImg} src={cartIcon} alt="Carrinho de compra" />
                            <span className="text-white text-xs font-bold border-circle px-2 py-1 absolute"
                                  style={{right: "-37%", backgroundColor: "var(--color-error)"}}>2</span>
                              </div>
                          </div>
                      </div>
                        <div className={styles.mobileActions}>
                          <IconField iconPosition="right">
                              <div>
                                <InputIcon className="pi pi-search" onClick={handleSearch} />
                              </div>
                          </IconField>
                            <div className="relative">
                              <img className={styles.cartImg} src={cartIcon} alt="Carrinho de compra" />
                              <span className="text-white text-xs font-bold border-circle px-2 py-1 absolute"
                                    style={{right: "-37%", backgroundColor: "var(--color-error)"}}>2</span>
                            </div>  
                        </div>
                  </div>
                  <Nav className={styles.navDesktop}>
                      <NavList>
                        <li><StyledNavLink to={"/"}>Home</StyledNavLink></li>
                        <li><StyledNavLink to={"/produtos"}>Produtos</StyledNavLink></li>
                        <li><StyledNavLink to={"/categorias"}>Categorias</StyledNavLink></li>
                        <li><StyledNavLink to={"/pedidos"}>Meus Pedidos</StyledNavLink></li>
                      </NavList>
                  </Nav>
              </div>
          </header>
          {/* SIDEBAR MOBILE */}
          <div className={styles.sideBar}>
              <Sidebar visible={visible} onHide={() => setVisible(false)}>
                  <div className={styles.sidebarNav}>
                    <h2>Páginas</h2>
                    <Nav>
                        <NavList>
                          <li><StyledNavLink to={"/"} onClick={closeSidebar}>Home</StyledNavLink></li>
                          <li><StyledNavLink to={"/produtos"} onClick={closeSidebar}>Produtos</StyledNavLink></li>
                          <li><StyledNavLink to={"/categorias"} onClick={closeSidebar}>Categorias</StyledNavLink></li>
                          <li><StyledNavLink to={"/pedidos"} onClick={closeSidebar}>Meus Pedidos</StyledNavLink></li>
                        </NavList>
                    </Nav>
                  </div>
                  <div className={styles.mobileRegisterLogin}>
                      <NavLink to={"/cadastro"} className={styles.register}>
                      Cadastre-se
                    </NavLink>
                    <div className={styles.buttonLogin}>
                      <a href="#" target="_self" rel="noopener noreferrer"
                      className="no-underline p-button border-round-md py-2 px-8 hover:bg-pink-500">
                        Entrar
                      </a>
                    </div>
                  </div>
              </Sidebar>
          </div>
        </>
     );
}
 
export default Header;