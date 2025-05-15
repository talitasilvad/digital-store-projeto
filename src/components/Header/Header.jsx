import styled from 'styled-components';
import styles from './Header.module.css'
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
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
    return ( 
        <>
        <header className={styles.header}>
              <div className={styles.headerContainer}>
                <div className="flex align-items-center justify-content-between">
                    <Logo variant="headerPink"/>
                    <div className={styles.headerSearch}>
                    <IconField iconPosition="right">
                      <InputIcon className="pi pi-search" />
                      <InputText
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Pesquisar produto..."
                      />
                    </IconField>
                  </div>
                
                      <NavLink to={"/cadastro"} className={styles.register}>
                        Cadastre-se
                      </NavLink>
                      <a href="#" target="_self" rel="noopener noreferrer"
                      className="no-underline p-button border-round-md py-2 px-4">
                        Entrar
                      </a>
                        <div className="relative">
                        <img className={styles.cartImg} src="/src/assets/img/mini-cart.svg" alt="Carrinho de compra" />
                        <span className="text-white text-xs font-bold border-circle px-2 py-1 absolute"
                              style={{right: "-37%", backgroundColor: "var(--color-error)"}}>2</span>
                      </div>
                  </div>
                  <Nav>
                      <NavList>
                        <li><StyledNavLink to={"/"}>Home</StyledNavLink></li>
                        <li><StyledNavLink to={"/produtos"}>Produtos</StyledNavLink></li>
                        <li><StyledNavLink to={"/categorias"}>Categorias</StyledNavLink></li>
                        <li><StyledNavLink to={"/pedidos"}>Meus Pedidos</StyledNavLink></li>
                      </NavList>
                  </Nav>
              </div>
          </header>
        </>
     );
}
 
export default Header;