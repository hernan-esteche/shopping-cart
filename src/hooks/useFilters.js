import { useContext } from 'react';
import { FiltersContext } from '../context/filters.jsx';

export const useFilters = () => {
	const { filters, setFilters } = useContext(FiltersContext);

	const filterProducts = (products) =>
		products.filter(
			(product) =>
				product.price > filters.minPrice &&
				(filters.category === 'all' || product.category === filters.category),
		);

	return { filterProducts, setFilters, filters };
};
