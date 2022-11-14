import { useEffect, useState } from 'react';
import { ItemList } from '../../components/';
import { useParams } from 'react-router-dom';

export default function ItemListContainer () {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=> {
        (async () => {
            try {
                let response
                if (categoryId) {
                    response = await fetch(`https://636d185791576e19e31f7480.mockapi.io/products?category=${categoryId}`)
                } else {
                    response = await fetch(`https://636d185791576e19e31f7480.mockapi.io/products`)
                }
                const data = await response.json()
                if (data) setProducts(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [categoryId])
    
    return (
        <div>
            <ItemList products={products}/>
        </div>
    )
}