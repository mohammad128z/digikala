import {ADD_CARD, DELETE_CARD} from './Card/types'
import {ADD_TOKEN, REMOVE_TOKEN} from './Token/types'

const initialState = {
    productOfCard: [],
    Token: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                productOfCard: [...state.productOfCard, action.payload.data],
            }
        case DELETE_CARD:
            return {
                ...state,
                productOfCard: state.productOfCard.filter(
                    (product) => product.id !== action.payload.id,
                ),
            }
        case ADD_TOKEN:
            return {
                ...state,
                Token: localStorage.getItem(action.payload.key),
            }
        case REMOVE_TOKEN:
            return {
                ...state,
                Token: '',
            }
        default:
            return state
    }
}

export default reducer
