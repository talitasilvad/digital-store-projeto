import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import NotFound from "../components/NotFound";

const Paths = () => {
    return ( 
        <>
          <BrowserRouter>
               <Routes>
                   <Route path="/" element={<Layout/>}>
                   <Route index element={<HomePage/>} />
                   <Route path="/produtos" element={<ProductListingPage/>}/>
                   <Route path="/product/:id" element={<ProductViewPage/>}/>
                   </Route>
                   <Route path="*" element={<NotFound/>}/>
               </Routes>
          </BrowserRouter>
        </>
     );
}
 
export default Paths;