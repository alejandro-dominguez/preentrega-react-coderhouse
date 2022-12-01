import { useContext, useState } from "react";
import { Shop } from "../../../cotexts/Shop";
import { ItemCount } from "../../";

const ItemDetail = ({product}) => {
    const {addProduct} = useContext(Shop)
    const [quantityItemDetail, setQuantityItemDetail] = useState(1)


    const confirmPurchase = (quantity) => {
        addProduct({...product, quantity})
        setQuantityItemDetail(quantity)
    }

    return (
        <div className="item-detail-container bg-slate-500">
            <div className="cardItemDetail flex justify-center items-center w-11/12 gap-10 bg-slate-200 p-8
            rounded-md shadow-lg mt-8">
                <div className="w-72 aspect-square">
                    <img src={product.img} alt={product.name} className="block cardImg w-full object-contain mb-4
                    h-full object-center" />
                </div>
                    <div className="grid place-items-start w-1/2 ml-2 self-start">
                        <h1 className="text-2xl text-[#ff7c1a] itemDetailH1">{product.name}</h1>
                        <p className="mt-3">{product.description}</p>
                    </div>
                {quantityItemDetail ?
                <div className="ml-auto self-end">
                    <ItemCount onAdd={confirmPurchase} initial={1} stock={product.stock} />
                </div>
                : null }
            </div>
        </div>
    )
};

export default ItemDetail;