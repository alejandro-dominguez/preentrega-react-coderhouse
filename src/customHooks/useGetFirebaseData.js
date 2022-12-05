import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const useGetFirebaseData = (categoryId) => {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                let q
                if (categoryId) {
                    q = query(collection(db, "products"), where("category", "==", categoryId))
                } else {
                    q = query(collection(db, "products"))
                }
                const querySnapshot = await getDocs(q)
                const productosFirebase = []
                querySnapshot.forEach((doc) => {
                    productosFirebase.push({...doc.data(), id: doc.id})
                })
                setData(productosFirebase)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [categoryId])

    return [data, error, loading]
}

export default useGetFirebaseData;
