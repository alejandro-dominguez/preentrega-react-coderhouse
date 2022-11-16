import { Item } from '../../';

const ItemList = ({products}) => {
	return (
	<div className="bg-slate-700 grid-cols-3">
		{products.map(product => {
			return(
				<div key={product.id} className="pt-[60.797px]">
					<Item product={product} />
				</div>
			)
		})}
	</div>
	)
}

export default ItemList;