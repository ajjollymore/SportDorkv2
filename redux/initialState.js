const initialState ={
    currentDeck: 0,
    currentCard: 4,
    isCardAnimate: 0,
    cardOpacity: 0,
    decks: [
        {//Raptors v Celtics
            id: 0,
            league: 'NBA',
            isLive: 0,
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
            betData: [1,0,-1,0,0],
            status: ['Yes','TOR 80 - BOS 78', 'Layup', '5','TOR 80 - BOS 78'],
            oddsData:[[2.6,1.82],[1.19,2.55],[3.91,1.19],[1.02,2.05],[3.04,1.49], [0.25,2.21]]//[[y,n],[y,n],...]
        },
        {//Heat vs Jazz
            id: 1,
            league: 'NBA',
            isLive: 0,
            isCompleted: 0,
            score: [35,30],
            teams: ["MIA Heat","UTA Jazz"],
            teamLogos: [require('../assets/leagueImages/NBA/Miami_Heat.png'),require('../assets/leagueImages/NBA/UTAJazz.png')],
            time:"Q2 9:21",
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
            betData: [1,1,1,1,1],
            oddsData:[[2.09,1.79],[2.24,1.9],[1.13,3.28],[1.04,1.16],[1.15,2.11], [0.25,2.21]]
        },
        {//Patriots vs Cowboys
            id: 2,
            league: 'NFL',
            isLive: 0,
            isCompleted: 0,
            score: [24,24],
            teams: ["NE Patriots","DAL Cowboys"],
            teamLogos: [require('../assets/leagueImages/NBA/New-England-Patriots.png'),require('../assets/leagueImages/NBA/DALCowboys.png')],
            time:"Q4 2:00",
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
            betData: [1,0,0,1,1],
            oddsData:[[3.71,1.98],[3.33,1.66],[1.26,2.97],[3.98,1.44],[2.25,1.78], [0.25,2.21]]
        },
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 1,
            score: [2,3],
            teams: ["TOR Blue Jays","HOU Astros"],
            teamLogos: [require('../assets/leagueImages/NBA/TORBluejays.png'),require('../assets/leagueImages/NBA/HOUAstros.png')],
            sport: "",
            time:"Final",
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
        //NBA Placeholders
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'NBA',
            score: [22,31],
            teams: ["DEN Nuggets","LA Lakers"],
            teamLogos: [require('../assets/leagueImages/NBA/DEN.png'),require('../assets/leagueImages/NBA/LAL.png')],
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
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'NBA',
            score: [22,31],
            teams: ["PHX Suns","PHI 76ers"],
            teamLogos: [require('../assets/leagueImages/NBA/PHX.jpeg'),require('../assets/leagueImages/NBA/PHI.jpeg')],
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
        //NFL Placeholders
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'NFL',
            score: [3,5],
            teams: ["KC Chiefs","AZ Cardinals"],
            teamLogos: [require('../assets/leagueImages/NBA/KC.jpeg'),require('../assets/leagueImages/NBA/AZ.png')],
            sport: "",
            time:"Q1 2:05",
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
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'NFL',
            score: [0,3],
            teams: ["LV Raiders","LA Chargers"],
            teamLogos: [require('../assets/leagueImages/NBA/LV.png'),require('../assets/leagueImages/NBA/LA.png')],
            sport: "",
            time:"Q3 1:02",
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
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'NFL',
            score: [1,5],
            teams: ["TB Buccaneers","CIN Bengals"],
            teamLogos: [require('../assets/leagueImages/NBA/TB.png'),require('../assets/leagueImages/NBA/DA.jpeg')],
            sport: "",
            time:"Q1 2:02",
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
        //MLB Placeholders
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'MLB',
            score: [2,2],
            teams: ["White Sox","Guardians"],
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
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'MLB',
            score: [2,3],
            teams: ["Dodgers","Braves"],
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
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'MLB',
            score: [2,3],
            teams: ["Cardinals","Reds"],
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
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'MLB',
            score: [2,3],
            teams: ["Diamondbacks","Phillies"],
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
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'MLB',
            score: [2,3],
            teams: ["Rangers","Pirates"],
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

        //NHL PLACEHOLDERS
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'NHL',
            score: [1,6],
            teams: ["Stars","Golden Knights"],
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
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 0,
            league: 'NHL',
            score: [0,4],
            teams: ["Panthers","Hurricanes"],
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
        //COMPLETED GAMES PLACEHOLDERS
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 1,
            league: 'NFL',
            score: [3,7],
            teams: ["TB Buccaneers","CIN Bengals"],
            teamLogos: [require('../assets/leagueImages/NBA/TB.png'),require('../assets/leagueImages/NBA/CIN.jpeg')],
            sport: "",
            time:"Final",
            leagueImg: require('../assets/leagueImages/nfl.png'),
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
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 1,
            league: 'NFL',
            score: [0,3],
            teams: ["LV Raiders","LA Chargers"],
            teamLogos: [require('../assets/leagueImages/NBA/LV.png'),require('../assets/leagueImages/NBA/LA.png')],
            sport: "",
            time:"Final",
            leagueImg: require('../assets/leagueImages/nfl.png'),
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
        {//PLACEHOLDER, Jays vs Astros
            id: 3,
            isLive: 0,
            isCompleted: 1,
            league: 'NBA',
            score: [22,31],
            teams: ["DEN Nuggets","LA Lakers"],
            teamLogos: [require('../assets/leagueImages/NBA/DEN.png'),require('../assets/leagueImages/NBA/LAL.png')],
            sport: "",
            time:"Final",
            leagueImg: require('../assets/leagueImages/nba.png'),
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
export default initialState