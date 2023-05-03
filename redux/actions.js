import { RESET_CARDS, BUTTON_PRESSED, DECREASE_CARDS,SET_BET_AMOUNT, SET_BET_CHOICE } from "./actionTypes";

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