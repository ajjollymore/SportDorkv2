import { DECREASE_CARDS, RESET_CARDS, BUTTON_PRESSED, SET_BET_AMOUNT, SET_BET_CHOICE } from "./actionTypes";
const initialState ={
    currentDeck: 0,
    currentCard: 4,
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
                bottomText: "Will Gary Trent Jr. Make His Next Shot",
                betAmount: "",

            },
            {
            image: "",
            bottomText: "Will the Raptors win the game",
            betAmount: "",
            },
            {
            image: "",
            bottomText: "Will Pascal Siakam make over 6.5 rebounds by end of Q3",
            betAmount: "",
        },
        {
            image: "",
            bottomText: "Will the next Field Goal made be a 3-pointer",
            betAmount: "",
        },
        {
            image: "",
            bottomText: "Will Jayson Tatum have Over 2.5 assists By End Of Q3",
            betAmount: "",
        }],
            userData: [0,0,0,0,0],//stores users swipe decision || yes = 1, no = -1, undecided = 0
            betData: [1,-1,0,0,1]
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
        case SET_BET_CHOICE:
            const x = state;
            x.decks[state.currentDeck].userData[4-state.currentCard-1] = action.payload;
            return x;
                
        default:
            return state
    }
}
export default reducer;