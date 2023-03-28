import { ADD_POSIITON } from './position-actions';

export const positionReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_POSIITON: {
			return action.positions;
		}
		default: {
			return state;
		}
	}
};
