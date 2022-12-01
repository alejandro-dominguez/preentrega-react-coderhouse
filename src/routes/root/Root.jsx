import { Outlet, ScrollRestoration } from 'react-router-dom';
import { NavBar, Footer } from '../../components/';

const Root = () => {
    return (
        <div className='overflow-x-hidden'>
            <NavBar/>
            <div className='xlContainer'>
                <Outlet/>
                <Footer/>
                <ScrollRestoration />
            </div>
        </div>
    )
}

export default Root;