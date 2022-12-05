import { Item } from '../../';
import { useState } from 'react';
import { IoGrid } from "react-icons/io5"; 
import { FaListUl } from "react-icons/fa"; 

const ItemList = ({products}) => {
	const [grid, setGrid] = useState(true)

	return (
	<div className="bg-slate-200 rounded-md p-6 w-full flex justify-between mt-[4.5rem] md:mt-10 mb-4 md:mb-0">
		<div className="flex flex-col w-full">
			<div className="flex mb-6 w-fit justify-between">
				<div className="flex gap-4">
					<IoGrid size={22} className={grid ? 'text-[#ff7c1a] cursor-pointer'
					: 'text-slate-700 hover:text-[#1a66ff] cursor-pointer transition-colors'}
					onClick={() => setGrid(true)} />
					<FaListUl size={24} className={!grid ? 'text-[#ff7c1a] cursor-pointer'
					: 'text-slate-700 hover:text-[#1a66ff] cursor-pointer transition-colors'}
					onClick={() => setGrid(false)} />
				</div>
			</div>
			<div className={grid ? "girdItemListContainer" : "flex flex-col gap-6"}>
				{products.map(product => {
					return(
						<div key={product.id}>
							<Item product={product} grid={grid} />
						</div>
					)
				})}
			</div>
		</div>
	</div>
	)
}

export default ItemList;
