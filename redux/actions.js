import { INCREASE_CARDS, RESET_CARDS, BUTTON_PRESSED } from "./actionTypes";

export const increaseCardAction = () =>{
    return{
        type: INCREASE_CARDS
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