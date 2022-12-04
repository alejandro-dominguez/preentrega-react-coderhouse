import { useContext, useState} from 'react';
import { ShopContext } from '../../../cotexts/ShopContext';
import { doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { generateOrderObject } from '../../../services/';

const CartModalForm = ({modalState, setModalState}) => {
    const {products, calculateCartTotal, emptyCart} = useContext(ShopContext)
    const [activeClass, SetActiveClass] = useState(false)
    const [formName, setFormName] = useState("")
    const [formEmail, setFormEmail] = useState("")
    const [formPhone, setFormPhone] = useState(0)
    const navigate = useNavigate()

    const handleClose = () => {
        SetActiveClass(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        confirmPurchase()
        setFormName("")
        setFormEmail("")
        setFormPhone("")
        SetActiveClass(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
        setTimeout(() => {
            navigate("/")
        }, 500)
    }

    const confirmPurchase = () => {
        (async () => {
            try {
                const buyerName = formName
                const buyerEmail = formEmail
                const buyerPhone = formPhone
                
                const generatedOrder = generateOrderObject(
                    buyerName, buyerEmail, buyerPhone, products, calculateCartTotal()
                )
                let productOutOfStock = []
                for (const productInCart of products) {
                    const docRef = doc(db, "products", productInCart.id)
                    const docSnap = await getDoc(docRef)
                    const productInFirebase = {...docSnap.data(), id: doc.id}
                    if (productInCart.quantity > productInFirebase.quantity) {
                        productOutOfStock.push(productInCart)
                        return (
                            alert("compra no valida por falta de stock") //productsOutOfStock.foreach...
                        )
                    }
                }
                if (productOutOfStock.length === 0) {
                    for (const productInCart of products) {
                        const productRef = doc(db, "products", productInCart.id)
                        const docSnap = await getDoc(productRef)
                        const productInFirebase = {...docSnap.data(), id: doc.id}
                        await updateDoc(productRef, {
                            quantity: productInFirebase.quantity - productInCart.quantity
                        })
                    }
                    try {
                        const docRef = await addDoc(collection(db, "orders"), generatedOrder)
                        alert(`Su orden ha sido generada correctamente con el ID: ${docRef.id}.`)
                        emptyCart()
                    } catch (error) {
                        console.log(error)
                    }
                }
                else {
                    alert("Algúno de los productos seleccionados se encuentra fuera de stock.")
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }

    return (
        <>
        {modalState && products.length ?
        <>
        <div className='CartModalFormContainer p-12 bg-slate-500 w-full flex flex-col
        items-center justify-start'>
            <div className={activeClass ? `formContainer active` : `formContainer`}>
                <button type='button' className='text-3xl absolute top-2 right-2 text-[#f63e3e] hover:scale-105
                transition-transform' onClick={() => handleClose()}>
                        <IoMdCloseCircle />
                </button>
                <form onSubmit={handleSubmit} className="grid place-items-start gap-4 py-3">
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col items-start justify-center gap-3'>
                            <label htmlFor="formName" className='font-semibold'>
                                Nombre Completo
                            </label>
                            <input required placeholder="Tu nombre" name="formName" type="text"
                            className='bg-white/90 rounded-md p-2 shadow-sm'
                            onChange={(e) => setFormName(e.target.value)}/>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-3'>
                            <label htmlFor="formEmail" className='font-semibold'>
                                Email
                            </label>
                            <input required placeholder="Tu email" name="formEmail" type="email"
                            className='bg-white/90 rounded-md p-2 shadow-sm'
                            onChange={(e) => setFormEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-center gap-3'>
                        <label htmlFor="formPhone" className='font-semibold'>
                            Teléfono
                        </label>
                        <input required placeholder="Tu teléfono" name="formPhone" type="tel"
                        className='bg-white/90 rounded-md p-2 shadow-sm'
                        onChange={(e) => setFormPhone(e.target.value)}/>
                    </div>
                    <button type="submit" className='justify-self-center px-6 py-3 bg-[#1a66ff] rounded-full
                    mt-8 text-white font-bold tracking-wide shadow-sm'>
                        Realizar la orden
                    </button>
                </form>
            </div>
        </div>
        </>
        : null}
        </>
    )
}

export default CartModalForm;