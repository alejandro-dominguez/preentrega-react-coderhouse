import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

const ItemCount = ({onAdd, quantity, initial}) => {
    const [count, setCount] = useState(initial)
    const navigate = useNavigate()

    const handleAdd = (count) => {
        onAdd(count)
        navigate("/cart")
    }

    const onPlus = () => {
        if (count < quantity) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }

    return(
        <div className="grid place-items-center gap-4">
            <div className="flex items-center justify-center gap-4">
                <button className="text-[#ff7c1a] hover:text-[#1a66ff] transition-colors"
                onClick={() => onDecrement()}>
                    <IoMdRemoveCircle className="text-[1.25rem] drop-shadow-sm"/>
                </button>
                <span className="text-xl font-OpenSans font-semibold text-[#ff7c1a]
                itemDetailtextShadow min-w-[25px] mb-[0.15rem]">
                    {count}
                </span>
                <button className="text-[#ff7c1a] hover:text-[#1a66ff] transition-colors"
                onClick={() => onPlus()}>
                    <IoMdAddCircle className="text-[1.25rem] drop-shadow-sm"/>
                </button>
            </div>
            <button className="ml-auto py-2 px-6 shadow-md bg-[#1a66ff] rounded-full text-white
            font-bold tracking-wider hover:scale-105 transition-transform" onClick={() => handleAdd(count)}>
                Confirmar
            </button>
        </div>
    )
};

export default ItemCount;