import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [search, setSearch] = useState('');
    return ( 
        <>
        <header>
              <div className="flex align-items-center justify-content-between">
                  <img className="header-logo" src="/src/assets/img/logo-header.svg" alt="Logo Digital Store" />
                  <div className="header-search">
                  <IconField iconPosition="right">
                    <InputIcon className="pi pi-search" />
                    <InputText
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Pesquisar produto..."
                    />
                  </IconField>
                </div>
                
                    <NavLink to={"/cadastro"} className="register">Cadastre-se</NavLink>
                    <a href="#" target="_self" rel="noopener noreferrer" className="no-underline p-button border-round-md py-2 px-4">Entrar</a>

                      <div className='relative'>
                      <img className="header-cart" src="/src/assets/img/mini-cart.svg" alt="Carrinho de compra" />
                      <span className="text-white text-xs font-bold border-circle px-2 py-1 absolute"
                            style={{right: "-37%", backgroundColor: "var(--color-error)"}}>2</span>
                    </div>
                </div>
                <nav className='header-nav'>
                    <ul className='flex align-content-center flex-row'>
                      <li><NavLink to={"/"}>Home</NavLink></li>
                      <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
                      <li><NavLink to={"/categorias"}>Categorias</NavLink></li>
                      <li><NavLink to={"/pedidos"}>Meus Pedidos</NavLink></li>
                    </ul>
                </nav>
          </header>
        </>
     );
}
 
export default Header;