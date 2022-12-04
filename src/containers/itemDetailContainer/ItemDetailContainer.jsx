import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProductDetail = async () => {
            const docRef = doc(db, "products", id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setProduct({ ...docSnap.data(), id: docSnap.id })
            } else {
                console.log("No such document!")
            }
            }
        getProductDetail()
    }, [id])

    return (
        <ItemDetail product={product}/>
    )
};

export default ItemDetailContainer;