import { useEffect, useState } from 'react';
import { ItemList } from '../../components/';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = (Props) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        (async () => {
            try {
                let response
                if (categoryId) {
                    response = await
                    fetch(`https://636d185791576e19e31f7480.mockapi.io/products?category=${categoryId}`)
                } else {
                    response = await fetch(`https://636d185791576e19e31f7480.mockapi.io/products`)
                }
                const data = await response.json()
                if (data) setProducts(data)
                /* let q
                if (categoryId) { 
                    q = query(collection(db, "products"), where("category" === categoryId))
                } else { q = query(collection(db, "products"))
                }
                const firebaseProducts = []
                const querySnapshot = await getDocs(q)
                
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data())
                    firebaseProducts.push({ ...doc.data(), id: doc.id })
                })
                setProducts(firebaseProducts) */
            } catch (error) {
                console.log(error)
            }
        })()
    }, [categoryId])
    
    return (
        <div className='p-12 bg-slate-500 w-full item-list-container' ref={Props.refProp}>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;