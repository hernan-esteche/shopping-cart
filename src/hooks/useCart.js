import { useContext } from 'react';
import { CartContext } from '../context/cart.jsx';

export const useCart = () => {
	const { addToCart, removeFromCart, clearCart, cart } =
		useContext(CartContext);

	return { addToCart, removeFromCart, clearCart, cart };
};
