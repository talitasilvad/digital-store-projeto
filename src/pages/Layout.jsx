import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "./HomePage";

const Layout = () => {
    return ( 
        <>
          <Header/>
          <HomePage/>
          {/* <Outlet/>           */}
          <Footer/>
        </>
     );
}
 
export default Layout;