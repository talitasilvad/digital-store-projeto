const Header = () => {
    return ( 
        <>
          <header>
                <img className="logo" src="/src/assets/img/logo-header.svg" alt="Logo Digital Store" />
                <input type="text" name="buscar" id="buscar" />
                <a className="register" href="#">Cadastre-se</a>
                
            <button type="button">Entrar</button>
            <img src="/src/assets/img/mini-cart.svg" alt="Carrinho de compra" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
            </nav>
          </header>
        </>
     );
}
 
export default Header;