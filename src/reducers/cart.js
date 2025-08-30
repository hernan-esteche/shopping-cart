export const initialState = JSON.parse(localStorage.getItem('cart')) || [];

export const CARD_ACTION_TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	CLEAR_CART: 'CLEAR_CART',
};

const updateLocalStorage = (state) => {
	localStorage.setItem('cart', JSON.stringify(state));
};

export const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CARD_ACTION_TYPES.ADD_TO_CART: {
			const { id } = payload;
			const productInCart = state.find((item) => item.id === id);

			if (productInCart) {
				const newState = state.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
				);
				updateLocalStorage(newState);
				return newState;
			} else {
				const newState = [...state, { ...payload, quantity: 1 }];
				updateLocalStorage(newState);
				return newState;
			}
		}
		case CARD_ACTION_TYPES.REMOVE_FROM_CART: {
			const { id } = payload;
			const newState = state.filter((item) => item.id !== id);
			updateLocalStorage(newState);
			return newState;
		}
		case CARD_ACTION_TYPES.CLEAR_CART: {
			updateLocalStorage([]);
			return [];
		}
		default:
			return state;
	}
};
