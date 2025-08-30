import './Cart.css';
import { useId } from 'react';
import { useCart } from '../hooks/useCart.js';
import { CartIcon, ClearCartIcon } from './Icons.jsx';

function CartItem({ thumbnail, title, price, quantity, addToCart }) {
	return (
		<li>
			<img src={thumbnail} alt={title} />
			<div>
				<strong>{title}</strong> - ${price}
			</div>
			<footer>
				<small>Qty: {quantity}</small>
				<button type='button' onClick={addToCart}>
					+
				</button>
			</footer>
		</li>
	);
}

export function Cart() {
	const cartCheckboxId = useId();
	const { cart, addToCart, clearCart } = useCart();

	return (
		<>
			<label htmlFor={cartCheckboxId} className='cart-button'>
				<CartIcon />
			</label>
			<input type='checkbox' id={cartCheckboxId} hidden />

			<aside className='cart'>
				<ul>
					{cart.map((product) => (
						<CartItem
							key={product.id}
							{...product}
							addToCart={() => addToCart(product)}
						/>
					))}
				</ul>
				<footer>
					{cart.length === 0 ? (
						<small>Your cart is empty</small>
					) : (
						<button type='button' onClick={clearCart}>
							<ClearCartIcon />
						</button>
					)}
				</footer>
			</aside>
		</>
	);
}
