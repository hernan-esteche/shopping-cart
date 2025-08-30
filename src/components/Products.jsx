import './Products.css';
import { useCart } from '../hooks/useCart.js';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';

function Products({ products }) {
	const { addToCart, removeFromCart, cart } = useCart();

	const checkProduct = (product) => {
		return cart.some((item) => item.id === product.id);
	};

	return (
		<main className='products'>
			<ul>
				{products.map((product) => {
					const { id, title, price, thumbnail } = product;
					const isProductInCart = checkProduct(product);

					return (
						<li key={id}>
							<img src={thumbnail} alt={title} />
							<div>
								<strong>
									{title} ${price}
								</strong>
							</div>
							<div>
								<button
									type='button'
									style={isProductInCart ? { backgroundColor: 'red' } : null}
									onClick={() =>
										isProductInCart ? removeFromCart(id) : addToCart(product)
									}
								>
									{isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
export default Products;
