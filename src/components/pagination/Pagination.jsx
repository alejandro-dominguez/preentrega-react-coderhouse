import { useState } from 'react';

const Pagination = ({currentPage, setCurrentPage, productsPerPage, totalProducts}) => {
	const pageNumbers = []
	const totalPages = totalProducts / productsPerPage
	const [pageNumberLimit] = useState(5)
	const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
	const [minPageNumberLimit, setminPageNumberLimit] = useState(0)
	
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber)
	}
	
	const paginateNext = () => {
		setCurrentPage(currentPage + 1)
		if (currentPage + 1 > maxPageNumberLimit) {
			setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
			setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
		}
	}

	const paginatePrev = () => {
		setCurrentPage(currentPage - 1)
		if ((currentPage - 1) % pageNumberLimit === 0) {
			setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
			setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
		}
	}
  
	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
	  pageNumbers.push(i)
	}
  
	return (
		<ul className="">
			<li onClick={paginatePrev} className={currentPage === pageNumbers[0] ? "hidden" : null}>
				Prev
			</li>
			{pageNumbers.map((number) => {
				if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
					return (
						<li key={number} onClick={() => paginate(number)}
						className={currentPage === number ? "active" : null}>
							{number}
						</li>
					)
				}
			})}
			<li onClick={paginateNext}
			className={currentPage === pageNumbers[pageNumbers.length - 1] ? "hidden" : null}>
				Next
			</li>
			<p>
				<b className="">{`page ${currentPage}`}</b>
					<span>{` of `}</span>
				<b>{`${Math.ceil(totalPages)}`}</b>
			</p>
		</ul>
	)
};
  
export default Pagination;