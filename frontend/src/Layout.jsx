    import React from "react";
    import NavBar2 from "./components/navbar2";
    import Footer from "./components/footer";
    import { Outlet } from "react-router-dom";
    function Layout(){
        return(
            <>
            <NavBar2/>
            <Outlet/>
            <Footer/>
            </>
        )
        
        }
        
        export default Layout;