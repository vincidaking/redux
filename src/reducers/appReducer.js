
import { ADD, EDIT, DELETE } from '../actions/appActions'



export const appReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case EDIT:
            return state.map(x => {
                if (x.id !== action.payload) {
                    return x;
                }

                return ({
                    author: action.payload.author,
                    comment: action.payload.comment,
                    rate: action.payload.rate,
                    id: x.id
                })
            })
        case DELETE:
            return state.filter(x => x.id !== action.payload.id);
        default: console.warn("nie mamy akcji ")
    }
    return state;
}