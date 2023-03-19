import { INCREASE_CARDS, RESET_CARDS, BUTTON_PRESSED } from "./actionTypes";
const initialState ={
    currentDeck: 0,
    currentCard: 0,
    isCardAnimate: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_CARDS:
            return{
            ...state,
            currentCard: state.currentCard++}
            break;
        case RESET_CARDS:
            return{
                ...state,
                currentCard: 0

            }
            break;
        case BUTTON_PRESSED:
            return{
                ...state,
                isCardAnimate: action.payload
            }
        default:
            return state
    }
}
export default reducer;