import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from './../';
import { ScrollRestoration } from "react-router-dom";

const Root = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
            <ScrollRestoration />
        </>
    )
}

export default Root;