import { useContext } from 'react';
import { IoMdTrash } from "react-icons/io";
import { ShopContext } from './../../../cotexts/ShopContext';
import { numberFormater, shortenText } from '../../../utils';

const CartItem = ({item}) => {
    const {removeProduct} = useContext(ShopContext)
    const priceNumber = numberFormater((item.quantity * item.price))

    const handleRemove = () => {
        removeProduct(item.id)
    }
    
    return (
        <div className='flex justify-start items-center gap-2 mb-10 relative'>
            <div className='w-20'>
                <img src={item.img} alt={item.name} className="w-full block aspect-square object-contain
                bg-center cardImg" />
            </div>
            <div className='w-[3px] h-[85px] bg-[#cbd5e1] rounded-full mx-4'/>
            <div className='flex flex-col items-start min-w-[23rem]'>
                <h3 className='font-bold tracking-wide'>Detalle:</h3>
                <h4 className='font-OpenSans font-bold'>{shortenText(item.name, 30)}</h4>
                <p className='font-bold mt-[0.15rem]'>
                    Cantidad:&nbsp;&nbsp;
                    <span className='font-normal'>
                        {item.quantity}
                    </span>
                </p>
                <p className='font-bold mt-[0.15rem]'>
                    Total:&nbsp;&nbsp;
                    <span className='font-normal'>
                        {priceNumber}
                    </span>
                </p>
            </div>
            <div className='w-[3px] h-[85px] bg-[#cbd5e1] rounded-full absolute right-10'/>
            <IoMdTrash className='absolute bottom-0 -right-3 text-[#f63e3e] cursor-pointer text-3xl
            drop-shadow-md transition-transform hover:scale-105'
            onClick={() => handleRemove()} />
        </div>
    )
}

export default CartItem;