import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from './../';

const Root = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Root;