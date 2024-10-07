import {ADD_TOKEN, REMOVE_TOKEN} from './types'

export const addToken = (key) => {
    return {
        type: ADD_TOKEN,
        payload: {key},
    }
}
export const removeToken = () => {
    return {
        type: REMOVE_TOKEN,
    }
}
