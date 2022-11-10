import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/";

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getProductDetail = async () => {
            const response = await fetch(`https://636d185791576e19e31f7480.mockapi.io/products/${id}`)
            const responseProduct = await response.json()
            console.log(responseProduct)
            setProduct(responseProduct)

        }
        getProductDetail()
    }, [id])

    return (
        <ItemDetail product={product}/>
    )
};

export default ItemDetailContainer;