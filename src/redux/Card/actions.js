import {ADD_CARD, DELETE_CARD} from './types'

export const addCard = (data) => {
    return {
        type: ADD_CARD,
        payload: {data},
    }
}
export const deleteCard = (id) => {
    return {
        type: DELETE_CARD,
        payload: {id},
    }
}
