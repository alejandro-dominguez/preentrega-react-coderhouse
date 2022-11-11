import { useContext, useState } from "react";
import { Shop } from "../../../cotexts/Shop";
import { ItemCount } from "../../";

const ItemDetail = ({product}) => {
    const {addProduct} = useContext(Shop)
    const [quantityItemDetail, setQuantityItemDetail] = useState(0)

    const confirmPurchase = (quantity) => {
        addProduct({...product, quantity})
        setQuantityItemDetail(quantity)
    }

    return (
        <div>
            <img src={product.img} width={450} alt={product.name} />
            <div>
                <h1>{product.name}</h1>
                {quantityItemDetail ? <button>Go to cart</button>
                : <ItemCount onAdd={confirmPurchase} initial={1} stock={product.stock} />}
            </div>
        </div>
    )
};

export default ItemDetail;