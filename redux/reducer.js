import { DECREASE_CARDS, RESET_CARDS, BUTTON_PRESSED, SET_BET_AMOUNT, SET_BET_CHOICE, SET_DECK, RESET_REDUX, SET_OPACITY } from "./actionTypes";
import { RESET_REDUX_ACTION } from "./actions";
import initialState from "./initialState";
const startState = initialState

const reducer = (state = startState, action) => {
    switch (action.type) {
        case SET_DECK:
            return{
                ...state,
                currentDeck: action.payload,
                currentCard: 4
            }
        case DECREASE_CARDS:
            return{
            ...state,
            currentCard: state.currentCard-1
        }
        case RESET_CARDS:
            const isCompleted = state;
            isCompleted.decks[state.currentDeck].isLive = 1;
            isCompleted.decks[state.currentDeck].isCompleted = 1;
            isCompleted.currentCard = 5
            return isCompleted
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
        case SET_OPACITY:
            return{
                ...state,
                cardOpacity: action.payload
            }
        case RESET_REDUX: 
            return{             
                currentDeck: 0,
                currentCard: 4,
                isCardAnimate: 0,
                cardOpacity: 0,
                decks: [
                    {//Raptors v Celtics
                        id: 0,
                        league: 'NBA',
                        isCompleted: 0,
                        score: [71,64],
                        teams: ["TOR Raptors","BOS Celtics"],
                        teamLogos: [require('../assets/leagueImages/NBA/toronto-raptors-logo-transparent.png'),require('../assets/leagueImages/NBA/boston-celtics-logo-transparent.png')],
                                    time:"Q3 2:52",
                        leagueImg: require('../assets/leagueImages/nba.png'),
                        cardData: [{
                            image: require('../assets/Cards/NBA/1000.png'),
                            bottomText: "Scottie Barnes to make his next shot",
                            betAmount: "",
                        },
                        {
                        image: require('../assets/Cards/NBA/1001.png'),
                        bottomText: "Raptors to lead at the end of the 3rd QTR",
                        betAmount: "",
                        },
                        {
                        image: require('../assets/Cards/NBA/1002.png'),
                        bottomText: "The next shot attempt be a 3-pointer",
                        betAmount: "",
                    },
                    {
                        image: require('../assets/Cards/NBA/1003.png'),
                        bottomText: "Jayson Tatum over 7.5 points in 3rd QTR",
                        betAmount: "",
                    },
                    {
                        image: require('../assets/Cards/NBA/1004.png'),
                        bottomText: "Celtics to win the game",
                        betAmount: "",
                    }],
                        userData: [0,0,0,0,0],//stores users swipe decision || yes = 1, no = -1, undecided = 0
                        betData: [1,-1,1,-1,1]
                    },
                    {//Heat vs Jazz
                        id: 1,
                        league: 'NBA',
                        isCompleted: 0,
                        score: [0,0],
                        teams: ["MIA Heat","UTA Jazz"],
                        teamLogos: [require('../assets/leagueImages/NBA/Miami_Heat.png'),require('../assets/leagueImages/NBA/UTAJazz.png')],
                        time:"Q3 2:52",
                        leagueImg: require('../assets/leagueImages/nba.png'),
                        cardData: [{
                            image: require('../assets/Cards/NBA/1005.png'),
                            bottomText: "Heat to win the game",
                            betAmount: "",
                        
                        },
                        {
                        image: require('../assets/Cards/NBA/1006.png'),
                        bottomText: "Jimmy Butler to lead scoring of all players in game",
                        betAmount: "",
                        },
                        {
                        image: require('../assets/Cards/NBA/1007.png'),
                        bottomText: "Jazz to score first basket of the game",
                        betAmount: "",
                    },
                    {
                        image: require('../assets/Cards/NBA/1008.png'),
                        bottomText: "Both teams to score over 210 points combined in game",
                        betAmount: "",
                    },
                    {
                        image: require('../assets/Cards/NBA/1009.png'),
                        bottomText: "Tyler Herro to score over 16 points and over 7 assists",
                        betAmount: "",
                    }],
                        userData: [0,0,0,0,0],//stores users swipe decision || yes = 1, no = -1, undecided = 0
                        betData: [1,1,1,1,1]
                    },
                    {//Patriots vs Cowboys
                        id: 2,
                        league: 'NFL',
                        isCompleted: 0,
                        score: [24,24],
                        teams: ["NE Patriots","DAL Cowboys"],
                        teamLogos: [require('../assets/leagueImages/NBA/New-England-Patriots.png'),require('../assets/leagueImages/NBA/DALCowboys.png')],
                        time:"Q3 2:52",
                        leagueImg: require('../assets/leagueImages/nfl.png'),
                        cardData: [{
                            image: require('../assets/Cards/NBA/1010.png'),
                            bottomText: "Patriots convert a 1st down on current drive",
                            betAmount: "",
                        
                        },
                        {
                        image: require('../assets/Cards/NBA/1011.png'),
                        bottomText: "Dallas gets a sack by end of game",
                        betAmount: "",
                        },
                        {
                        image: require('../assets/Cards/NBA/1012.png'),
                        bottomText: "Davente Parker to get a catch on current drive",
                        betAmount: "",
                    },
                    {
                        image: require('../assets/Cards/NBA/1013.png'),
                        bottomText: "Possession ends with a field goal",
                        betAmount: "",
                    },
                    {
                        image: require('../assets/Cards/NBA/1014.png'),
                        bottomText: "Patriots win the game",
                        betAmount: "",
                    }],
                        userData: [0,0,0,0,0],//stores users swipe decision || yes = 1, no = -1, undecided = 0
                        betData: [1,0,0,1,1]
                    },
                    {//PLACEHOLDER, Jays vs Astros
                        id: 3,
                        isCompleted: 1,
                        score: [2,3],
                        teams: ["TOR Blue Jays","HOU Astros"],
                        teamLogos: [require('../assets/leagueImages/NBA/TORBluejays.png'),require('../assets/leagueImages/NBA/HOUAstros.png')],
                        sport: "",
                        time:"",
                        leagueImg: require('../assets/leagueImages/mlb.png'),
                        cardData: [{
                            image: require('../assets/Cards/NBA/GaryTrent.jpg'),
                            bottomText: "Patriots convert a 1st down on current drive",
                            betAmount: "",
                        
                        },
                        {
                        image: require('../assets/Cards/NBA/GaryTrent.jpg'),
                        bottomText: "Dallas gets a sack by end of game",
                        betAmount: "",
                        },
                        {
                        image: require('../assets/Cards/NBA/GaryTrent.jpg'),
                        bottomText: "Davente Parker to get a catch on current drive",
                        betAmount: "",
                    },
                    {
                        image: require('../assets/Cards/NBA/GaryTrent.jpg'),
                        bottomText: "Possession ends with a field goal",
                        betAmount: "",
                    },
                    {
                        image: require('../assets/Cards/NBA/GaryTrent.jpg'),
                        bottomText: "Patriots win the game",
                        betAmount: "",
                    }],
                        userData: [0,0,0,0,0],//stores users swipe decision || yes = 1, no = -1, undecided = 0
                        betData: [1,-1,0,0,1]
                    },
                ]
            }
        default:
            return state
    }
}
export default reducer;