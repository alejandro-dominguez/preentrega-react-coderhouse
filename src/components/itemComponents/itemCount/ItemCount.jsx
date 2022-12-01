import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ItemCount = ({onAdd, stock, initial}) => {
    const [count, setCount] = useState(initial)
    const navigate = useNavigate()

    const handleAdd = (count) => {
        onAdd(count)
        navigate("/cart")
    }

    const onPlus = () => {
        if (count < stock) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }

    return(
        <div className="grid place-items-center gap-4">
            <span className="font-bold" >stock: {stock}</span>
            <div className="flex items-center justify-center">
                <button className="text-3xl mr-4 font-bold text-[#ff7c1a] itemDetailtextShadow
                hover:text-[#1a66ff] transition-colors" onClick={onDecrement}>
                    -
                </button>
                <span className="text-xl text-[#ff7c1a] itemDetailtextShadow min-w-[25px]">{count}</span>
                <button className="text-2xl ml-3 font-bold text-[#ff7c1a] itemDetailtextShadow
                hover:text-[#1a66ff] transition-colors" onClick={onPlus}>
                    +
                </button>
            </div>
            <button className="ml-auto py-2 px-6 shadow-md bg-[#1a66ff] rounded-full text-white font-bold
            tracking-wider hover:scale-105 transition-transform" onClick={() => handleAdd(count)}>
                Confirmar
            </button>
        </div>
    )
};

export default ItemCount;