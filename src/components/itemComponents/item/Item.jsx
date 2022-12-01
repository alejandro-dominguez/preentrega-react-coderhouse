import { useNavigate } from 'react-router-dom';
import { useNumberFormater } from './../../../customHooks/';

const Item = ({product, grid}) => {
	const navigate = useNavigate()
	const priceNumber = useNumberFormater(product.price)

	const shortenText = (text, n) => {
		if (text.length > n) {
			const shortenedText = text.substring(0, n).concat("...")
			return shortenedText
		}
		return text
	}

	const navigateDetail = () => {
		navigate(`/detail/${product.id}`)
	}

	return (
		<>
		{grid ? 
		(<div className='itemCard cardGrid flex flex-col justify-center items-center p-4 gap-2 text-center shadow-sm
		bg-slate-50 rounded-md cursor-pointer hover:shadow-xl hover:scale-[1.025]' onClick={navigateDetail}>
			<div>
				<img src={product.img} alt={product.name} className="block cardImg h-36 object-contain mb-4
				w-full object-center" />
			</div>
			<p className='text-xl'>{shortenText(product.name, 18)}</p>
			<span className='font-bold text-xl'>{priceNumber}</span>
		</div>) :
		(<div className='itemCard cardList flex justify-start items-center p-4 gap-2 shadow-sm
		bg-slate-50 rounded-md cursor-pointer hover:shadow-xl hover:scale-[1.0125]' onClick={navigateDetail}>
			<div className='w-2/5 grid place-items-center'>
				<img src={product.img} alt={product.name} className="block cardImg h-44 object-contain
				w-full object-center" />
			</div>
			<div className='flex flex-col w-3/5 gap-4 ml-4'>
				<span className='font-bold text-xl'>{priceNumber}</span>
				<p>{shortenText(product.description, 200)}</p>
				<p className='text-xl'>{product.name}</p>
			</div>
		</div>)}
		</>
	)
}

export default Item;