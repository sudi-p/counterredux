import ActionTypes from '../constants/actionTypes';

const addCounterAction = () => (dispatch) => {
	console.log("Hello From action")
	dispatch({
		type: ActionTypes.ADD_COUNTER,
	})
}

export const subtractCounterAction = () => (dispatch) => {
	dispatch({
		type: ActionTypes.SUBTRACT_COUNTER
	})
}

export const addCounterByAction = (number) => (dispatch) => {
	console.log(number)
	dispatch({
		type: ActionTypes.ADD_COUNTER_BY,
		payload: number
	})
}

export default addCounterAction;