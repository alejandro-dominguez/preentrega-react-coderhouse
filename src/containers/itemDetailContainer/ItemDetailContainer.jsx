import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/";

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    console.log(product)

    useEffect(() => {
        const getProductDetail = async () => {
            const response = await fetch(`https://636d185791576e19e31f7480.mockapi.io/products?id=${id}`)
            const responseProduct = await response.json()
            setProduct(responseProduct[0])
        }
        getProductDetail()
    }, [id])

    return (
        <ItemDetail product={product}/>
    )
};

export default ItemDetailContainer;