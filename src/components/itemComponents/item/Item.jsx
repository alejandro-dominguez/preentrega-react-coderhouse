import { useNavigate } from 'react-router-dom';
import { numberFormater, shortenText } from '../../../utils/';

const Item = ({product, grid}) => {
	const navigate = useNavigate()
	const priceNumber = numberFormater(product.price)

	const navigateDetail = () => {
		navigate(`/detail/${product.id}`)
	}

	return (
		<>
		{grid ? 
		(<div className='itemCard min-h-[310px] flex flex-col justify-center items-center p-4 gap-2 text-center
		shadow-sm bg-slate-50 rounded-md cursor-pointer hover:shadow-xl hover:scale-[1.025] w-[225px]'
		onClick={() => navigateDetail()}>
			<div>
				<img src={product.img} alt={product.name} className="block cardImg h-36 object-contain mb-4
				w-full object-center" />
			</div>
			<div className='gridCardLine transition-colors'/>
			<p className='text-xl transition-all font-OpenSans'>{shortenText(product.name, 20)}</p>
			<span className='font-bold text-xl transition-colors'>{priceNumber}</span>
		</div>) :
		(<div className='itemCard listCard' onClick={() => navigateDetail()}>
			<div className='listCardImg grid place-items-center'>
				<img src={product.img} alt={product.name} className="block cardImg h-44 object-contain
				w-full object-center" />
			</div>
			<div className='listCardLine transition-colors'/>
			<div className='listCardInfo flex flex-col gap-4 ml-4 pr-4'>
				<span className='font-bold text-xl transition-colors'>{priceNumber}</span>
				<p>{shortenText(product.description, 200)}</p>
				<p className='text-xl transition-all font-OpenSans'>{product.name}</p>
			</div>
		</div>)}
		</>
	)
}

export default Item;
