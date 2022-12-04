import { useContext, useState } from "react";
import { ShopContext } from "../../../cotexts/ShopContext";
import { ItemCount } from "../../";

const ItemDetail = ({product}) => {
    const {addProduct} = useContext(ShopContext)
    const [quantityItemDetail, setQuantityItemDetail] = useState(1)

    const confirmPurchase = (quantity) => {
        addProduct({...product, quantity})
        setQuantityItemDetail(quantity)
    }

    return (
        <div className="itemDetailContainer bg-slate-500 flex flex-col items-center justify-start">
            <div className="cardItemDetail flex w-11/12 bg-slate-200 p-8 items-center gap-5
            rounded-md shadow-lg mt-24 mb-8">
                <div className="w-72 aspect-square">
                    <img src={product.img} alt={product.name} className="block cardImg w-full object-contain mb-4
                    h-full object-center" />
                </div>
                <div className="h-[300px] w-[3px] bg-[#cbd5e1] rounded-full"/>
                <div className="grid place-items-start w-1/2 self-start">
                    <h1 className="text-2xl text-[#ff7c1a] itemDetailH1">{product.name}</h1>
                    <p className="mt-3">{product.description}</p>
                </div>
                <div className="h-[300px] w-[3px] bg-[#cbd5e1] rounded-full"/>
                {quantityItemDetail ?
                <div className="ml-auto self-end">
                    <ItemCount onAdd={confirmPurchase} initial={1} quantity={product.quantity} />
                </div>
                : null }
            </div>
        </div>
    )
};

export default ItemDetail;