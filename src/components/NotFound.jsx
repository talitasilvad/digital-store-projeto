import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
          <div className="flex flex-column align-items-center justify-content-center gap-2 bg-pink-50 min-h-screen">
                  <h2 className="text-pink-600">Página não encontrada</h2>
                    <Link to={"/"} className="text-pink-600 font-bold text-xl hover:text-pink-800">
                      Clique aqui para voltar à página inicial
                    </Link>
          </div>
        </>
     );
}
 
export default NotFound;