import { createContext, useReducer } from 'react';
import { CARD_ACTION_TYPES, initialState, reducer } from '../reducers/cart.js';

export const CartContext = createContext();

const useCartReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addToCart = (product) => {
		dispatch({ type: CARD_ACTION_TYPES.ADD_TO_CART, payload: product });
	};

	const removeFromCart = (id) => {
		dispatch({ type: CARD_ACTION_TYPES.REMOVE_FROM_CART, payload: { id } });
	};

	const clearCart = () => {
		dispatch({ type: CARD_ACTION_TYPES.CLEAR_CART });
	};

	return { state, addToCart, removeFromCart, clearCart };
};

export function CartProvider({ children }) {
	const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

	return (
		<CartContext.Provider
			value={{ cart: state, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
}
