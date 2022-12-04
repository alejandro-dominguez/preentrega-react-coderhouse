import { useState, useContext } from 'react';
import { CartItem, CartModalForm } from '../../components/';
import { ShopContext } from './../../cotexts/ShopContext';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo-error.svg";

const CartContainer = () => {
    const {products} = useContext(ShopContext)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        {!showModal && products.length ?
        <div className='cartItemContainer p-12 bg-slate-500 w-full flex flex-col items-center justify-start'>
            <div className='bg-slate-200 rounded-md py-6 px-10 mt-10 grid place-items-center'>
                {products.map(product => {
                    return <CartItem key={product.id} item={product} />
                })}
                <button type='button' className='bg-[#1a66ff] px-10 py-4 rounded-full text-white text-lg
                tracking-wide font-bold shadow-sm hover:bg-[#ff7c1a] hover:shadow-md transition-all'
                onClick={() => setShowModal(true)}>
                    Formulario de compra
                </button>
            </div>
        </div>
        : showModal && products.length ?
        <CartModalForm modalState={showModal} setModalState={setShowModal} />
        :
        <div className='cartItemContainer p-12 bg-slate-500 w-full flex flex-col items-center justify-start'>
            <div className='bg-slate-200 grid place-items-center rounded-md py-6 px-10 mt-10'>
                <div className="grid place-items-center gap-10">
                    <div className="w-52">
                        <img src={logo} alt="Geekommerce sad logo" className='w-full block object-contain
                        object-center drop-shadow-md' />
                    </div>
                    <h1 className='text-center text-xl max-w-[15rem] -mt-4 cartH1'>
                        Aún no hay productos en el carrito
                    </h1>
                    <Link to="/">
                        <p className='px-6 py-3 bg-[#1a66ff] text-white font-bold tracking-wider rounded-full
                        shadow-sm hover:bg-[#ff7c1a] hover:shadow-md transition-all'>
                            Volver al inicio
                        </p>
                    </Link>
                </div>
            </div>
        </div>}
        </>
    )
}

export default CartContainer;