import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
	const navigate = useNavigate()

	const navigateDetail = () => {
		navigate(`/detail/${product.id}`)
	}
 
	return (
		<div onClick={navigateDetail}>
			<img src={product.img} alt={product.name}/>
			<p key={product.id}>{product.name}, stock: {product.stock}</p>
		</div>
	)
}

export default Item;