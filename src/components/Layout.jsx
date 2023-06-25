import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";



export default function Layout() {



    return (
        <div className="site-wrapper">
            <Header 
               
            />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}