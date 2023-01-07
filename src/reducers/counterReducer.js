import ActionTypes from '../constants/actionTypes';

const initialState = {
	count: 0,
}

export default function(state=initialState, action) {
	const {type, payload} = action;

	switch (type) {
		case ActionTypes.ADD_COUNTER:
			return {
				count: state.count + 1,
			}
		case ActionTypes.SUBTRACT_COUNTER:
			return {
				count: state.count - 1,
			}
		case ActionTypes.ADD_COUNTER_BY:
			return {
				count: state.count + payload,
			}
		default:
			return state;
	}
}