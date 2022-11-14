import { Item } from '../../';

const ItemList = ({products}) => {
	return (
		products.map(product => {
			return(
				<div className="pt-[60.797px]">
					<Item key={product.id} product={product} />
				</div>
			)
		})
	)
}

export default ItemList;