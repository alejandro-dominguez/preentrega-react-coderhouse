import { Item, ItemFilter, ItemSearch, Pagination } from '../../';
import { useState } from 'react';
import { IoGrid } from "react-icons/io5"; 
import { FaListUl } from "react-icons/fa"; 
import Select from 'react-select';

const options = [
	{value: 'latest', label: 'Más reciente'},
	{value: 'lowestPrice', label: 'Precio más bajo'},
	{value: 'highestPrice', label: 'Precio más alto'},
	{value: 'aZ', label: 'A - Z'},
	{value: 'zA', label: 'Z - A'}
]

const ItemList = ({products}) => {
	const [grid, setGrid] = useState(true)

	return (
	<div className="bg-slate-200 rounded-md p-6 w-full flex justify-between mt-10">
		<ItemFilter/>
		<div className="flex flex-col w-4/5 pl-6">
			<div className="flex mb-6 w-full justify-between">
				<div className="flex gap-4">
					<IoGrid size={22} className='text-slate-700 hover:text-[#ff7c1a] cursor-pointer'
					onClick={() => setGrid(true)} />
					<FaListUl size={24} className='text-slate-700 hover:text-[#ff7c1a] cursor-pointer'
					onClick={() => setGrid(false)} />
				</div>
				<div className='px-8'>
					<ItemSearch/>
				</div>
				<div className='flex items-center gap-4'>
					<label className='font-bold text-lg'>Ordenar por:</label>
					<Select placeholder="Más reciente" options={options} className="w-44" />
				</div>
			</div>
			<div className={grid ? "grid grid-cols-3 gap-6" : "flex flex-col gap-6"}>
				{products.map(product => {
					return(
						<div key={product.id}>
							<Item product={product} grid={grid} />
						</div>
					)
				})}
			</div>
			<Pagination/>
		</div>
	</div>
	)
}

export default ItemList;