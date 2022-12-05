import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { ShopContext } from './../../../cotexts/ShopContext';

const CartWidget = () => {
	const {calculateCartQuantity} = useContext(ShopContext)
	const navigate = useNavigate()

	return (
		<div className="cursor-pointer" onClick={() => navigate("/cart")}>
			<span className={calculateCartQuantity() > 0 ? `absolute -top-3 -right-4 bg-[#1a66ff] grid
			place-items-center text-white py-[0.45rem] px-[0.65rem] text-xs font-bold rounded-full shadow-sm
			z-10 scale-95` : "hidden"}>
				{calculateCartQuantity() === 0 ? null : `${calculateCartQuantity()}`}
			</span>
			<IoCartSharp size={35} className="cartIconShadow text-[#ff7c1a]" />
		</div>
	)
}

export default CartWidget;