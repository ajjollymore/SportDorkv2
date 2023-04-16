import { DECREASE_CARDS, RESET_CARDS, BUTTON_PRESSED, SET_BET_AMOUNT } from "./actionTypes";
const initialState ={
    currentDeck: 0,
    currentCard: 3,
    isCardAnimate: 0,
    decks: [
        {
            id: 0,
            score: "",
            teams: ["",""],
            sport: "",
            time:"",
            cardData: [{
                image: "",
                bottomText: "",
                betAmount: "",

            },{},{},{}],
            userData: [0,0,0,0],//yes = 1, no = -1, undecided = 0
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DECREASE_CARDS:
            return{
            ...state,
            currentCard: state.currentCard-1
        }
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
        case SET_BET_AMOUNT:
            return{
                ...state,
            } 
        default:
            return state
    }
}
export default reducer;