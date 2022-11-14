import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from './../';
import { ScrollRestoration } from "react-router-dom";

const Root = () => {
    return (
        <div className='overflow-x-hidden'>
            <NavBar/>
            <Outlet/>
            <Footer/>
            <ScrollRestoration />
        </div>
    )
}

export default Root;