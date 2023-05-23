import { RESET_CARDS, BUTTON_PRESSED, DECREASE_CARDS,SET_BET_AMOUNT, SET_BET_CHOICE, SET_DECK, RESET_REDUX, SET_OPACITY } from "./actionTypes";

export const decreaseCardAction = () =>{
    return{
        type: DECREASE_CARDS
    }
}
export const resetCardsAction = () => {
    return {
        type: RESET_CARDS
    }
}
export const BUTTON_PRESSED_ACTION = (parameter) =>{
    return {
        type: BUTTON_PRESSED,
        payload: parameter
    }
}
export const SET_BET_AMOUNT_ACTION = (parameter) => {
return{
    type: SET_BET_AMOUNT,
    payload: parameter
}
}
export const SET_BET_CHOICE_ACTION = (parameter) => {
    return{
        type: SET_BET_CHOICE,
        payload: parameter
    }
}
export const SET_DECK_ACTION = (parameter) => {
    return{
        type: SET_DECK,
        payload: parameter
    }
}
export const SET_OPACITY_ACTION = (parameter) =>{
    return{
        type: SET_OPACITY,
        payload: parameter
    }
}
export const RESET_REDUX_ACTION = () => {
    return{
        type: RESET_REDUX,
    }
}