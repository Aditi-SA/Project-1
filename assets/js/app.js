var timer;
var time = 10
var TOTAL_GAME_TIME = 30
var currentGameTime = 0
var END_INTERVAL = 0
var START_INTERVAL = 10;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLIgK7r7rGIlTqGvgCzYFJHGRDqUTudSQ",
    authDomain: "superhero-showdown-2d04e.firebaseapp.com",
    databaseURL: "https://superhero-showdown-2d04e.firebaseio.com",
    projectId: "superhero-showdown-2d04e",
    storageBucket: "",
    messagingSenderId: "82987652913"
};

firebase.initializeApp(config);

var database = firebase.database()

document.getElementById('wins-losses-1').style.display = "none"
document.getElementById('wins-losses-2').style.display = "none"
document.getElementById('name-join-2').style.display = "none"

// $("#startgame").css("display", "none");
document.getElementById('startgame').style.display = "none"

// Text field for player 1
document.getElementById('join').addEventListener('click', function () {

    database.ref('/players').once('value', function (snapshot) {
        if (snapshot.hasChild('1')) {
            var name2 = document.getElementById('name').value
            database.ref('/players').child('2').set({
                name: name2,
                losses: 0,
                wins: 0,
                ready: false,
            })
            playerSlot = 2
            document.getElementById('name-join-2').style.display = "none";
            localStorage.setItem("player2", name2);
        } else {
            var name = document.getElementById('name').value
            database.ref('/players').child('1').set({
                name: name,
                losses: 0,
                wins: 0,
                ready: false,
            })
            playerSlot = 1
            document.getElementById('name-join-1').style.display = "none";
            localStorage.setItem("player1", name);
            location.reload();
        }
    })
})

// Text Field for Player 2
document.getElementById('join2').addEventListener('click', function () {

    database.ref('/players').once('value', function (snapshot) {
        if (snapshot.hasChild('1')) {
            var name2 = document.getElementById('name2').value
            database.ref('/players').child('2').set({
                name: name2,
                losses: 0,
                wins: 0,
                ready: false,
            })
            playerSlot = 2
            document.getElementById('name-join-2').style.display = "none";
            localStorage.setItem("player2", name2);
        } else {
            var name = document.getElementById('name').value
            database.ref('/players').child('1').set({
                name: name,
                losses: 0,
                wins: 0,
                ready: false,
            })
            playerSlot = 1
            document.getElementById('name-join-1').style.display = "none";
            localStorage.setItem("player1", name);

        }
    })
})


document.getElementById('questionDisplay').style.display = "none";

// Reset Game function
document.getElementById('reset').addEventListener('click', function () {
    database.ref('/players').child('1').remove()
    database.ref('/players').child('2').remove()
    database.ref('/questions').child('2').remove()
    database.ref('/start-game').set({
        gameStarted: false
    })
    database.ref('/show-question').set({
        show: false
    })
    localStorage.clear();
    location.reload();
})

// If player 1 is in the game, show their username and stats
database.ref('/players').on('value', function (snapshot) {
    if (snapshot.hasChild('1')) {
        if (localStorage.getItem("player1") === null) {
            document.getElementById('name-join-2').style.display = "block"
        }
        document.getElementById('name-join-1').style.display = "none"
        database.ref('/players').child('1').on('value', function (snap) {
            document.getElementById('wins-losses-1').style.display = "block"
            document.getElementById('player-1-name').innerHTML = snap.val().name
            document.getElementById('player-1-wins').innerHTML = snap.val().wins
            document.getElementById('player-1-losses').innerHTML = snap.val().losses
        })
    }
})

// If player 2 is in the game, show their username and stats
database.ref('/players').on('value', function (snapshot) {
    if (snapshot.hasChild('2')) {
        document.getElementById('name-join-2').style.display = "none"
        database.ref('/players').child('2').on('value', function (snap) {
            document.getElementById('wins-losses-2').style.display = "block"
            document.getElementById('player-2-name').innerHTML = snap.val().name
            document.getElementById('player-2-wins').innerHTML = snap.val().wins
            document.getElementById('player-2-losses').innerHTML = snap.val().losses
        })
    }

    // If both players are in game run all of this
    if (snapshot.hasChild('1') && snapshot.hasChild('2')) {
        console.log('both players are present');
        loadNextQuestion(currentQuestion);

        // Questions written to database
        database.ref('/questions').set({
            q1: {
                question: "What is Spiderman's real name?",
                option1: "Bruce Banner",
                option2: "Tony Stark",
                option3: "Peter Parker",
                option4: "Clark Kent",
                answer: "Peter Parker",
                characterId: "1009610",
                whosRight: 0
            },

            q2: {
                question: "Which planet is Superman originally from?",
                option1: "Venus",
                option2: "Beta",
                option3: "Krypton",
                option4: "Achermon",
                answer: "Krypton",
                characterId: "1009220",
                whosRight: 0
            },

            q3: {
                question: "Identify the superhero?",
                option1: "Hawkeye",
                option2: "Iron Man",
                option3: "Captain America",
                option4: "Falcon",
                answer: "Captain America",
                characterId: "1009652",
                whosRight: 0
            },

            q4: {
                question: "What superhero team is The Flash affiliated with?",
                option1: "The Avengers",
                option2: "Guardians of the Galaxy",
                option3: "Fantastic Four",
                option4: "The Justice League",
                answer: "The Justice League",
                characterId: "1009368",
                whosRight: 0
            },

            q5: {
                question: "What is Wonder Woman's lasso called?",
                option1: "Truth revealer",
                option2: "Lasso of verda",
                option3: "Truth Giver",
                option4: "Lasso of Truth",
                answer: "Lasso of Truth",
                characterId: "1009524",
                whosRight: 0
            },

            q6: {
                question: "Which of the following is NOT associated with Batman?",
                option1: "Wayne Enterprise",
                option2: "Batmobile",
                option3: "Ra's al ghul",
                option4: "Daily Planet",
                answer: "Daily Planet",
                characterId: "1009297",
                whosRight: 0
            },

            q7: {
                question: "Who is the name of the person who united The Avengers together?",
                option1: "Nick Fury",
                option2: "Thanos",
                option3: "Iron Man",
                option4: "Maria Hill",
                answer: "Nick Fury",
                characterId: "1009697",
                whosRight: 0
            },

            q8: {
                question: "Name the actress who played Black Widow in Marvel's Avengers series?",
                option1: "Emma Watson",
                option2: "Gwyneth Paltrow",
                option3: "Scarlett Johansson",
                option4: "Elizabeth Olsen",
                answer: "Scarlett Johansson",
                characterId: "1009187",
                whosRight: 0
            },

            q9: {
                question: "What is Loki's alternate name?",
                option1: "God of Mischief",
                option2: "God of Strength",
                option3: "God of War",
                option4: "God of Ruling Arbitration",
                answer: "God of Mischief",
                characterId: "1010743",
                whosRight: 0
            },

            q10: {
                question: "Which one of these villains is NOT associated with Spider-Man?",
                option1: "Sandman",
                option2: "Vulture",
                option3: "Dr. Octopus",
                option4: "Scarecrow",
                answer: "Scarecrow",
                characterId: "1009282",
                whosRight: 0
            }
        })
    }
})


function setTimer() {
    //every 1 sec check db for score updates and increment timer
    timer = setInterval(updatetimer, 1000)
    console.log("setting timer")
}

function updatetimer() {
    //STOP THE GAME IF TOTAL GAME TIME is Up
    if (TOTAL_GAME_TIME === currentGameTime) {
        console.log("Game Over")
        clearInterval(timer)
        return
    }

    console.log("current time", time)
    currentGameTime++
    console.log("Current Game Time", currentGameTime)
    $(".timer").html("<h2>" + time + "<h2>");
    if (time === END_INTERVAL) {
        ///////////////check out/////////////////////
        //Note:line 368-371: no change observed when added 
        ////////////////////////////////////
        currentQuestion++;
        var ref = firebase.database().ref("/questions/");
        ref.once("value")
            .then(function (snapshot) {
                var numberOfQuestions = snapshot.numChildren();
                //check if its the last question
                if (currentQuestion === numberOfQuestions) {
                    //setTimeout(endgame, 4000);
                    endgame();
                } else {
                    // setTimeout(loadNextQuestion(currentQuestion), 5000);
                    loadNextQuestion(currentQuestion);
                }
            });

    } else {
        //time = seconds for each question
        time--;
    }
}

var currentQuestion = 1
var currentQuest = 'q' + currentQuestion

// initial load next question function
//loadNextQuestion(1)

function loadNextQuestion(nextQuestNum) {
    clearInterval(timer);
    console.log("loading next question");
    setTimer();
    time = START_INTERVAL;

    var nextQuest = 'q' + nextQuestNum;
    console.log("Inside loadNextQuestion:- ");
    console.log("nextQuest: " + nextQuest);
    database.ref('/show-question').set({
        show: true
    });

    database.ref('/questions/' + nextQuest).on("value", function (snapshot) {

        database.ref('/show-question').on("value", function (snapshot) {
            showQuestion = snapshot.val().show;
        })
        if (showQuestion === true) {
            document.getElementById('questionDisplay').style.display = "block";
            //cntr = setInterval(runtimer, 1000);    
            console.log("inside load question time=: " + time)       
            //$(".timer").html("<h2>" + time + "<h2>");
            $(".question").html(snapshot.val().question);
            $(".Ch1").html(snapshot.val().option1);
            $(".Ch2").html(snapshot.val().option2);
            $(".Ch3").html(snapshot.val().option3);
            $(".Ch4").html(snapshot.val().option4);           
        }
    })
    // updatedb()
    // updateDOM() 
} //end of function loadNextQuestion

/* setTimeout(testCancelafter5, 5e3)
function testCancelafter5() {
    console.log("canceling after 5 sec")
    loadNextQuestion()
} */

//function handleoptionlick() {
    //checks wrong/right
    // Clicking on a multiple choice answer.
    $(".choice").on("click", function () {
        
        database.ref('/show-question').set({
            show: false
        });

        var picked = $(this).text();

        database.ref('/questions/' + currentQuest).on("value", function (snapshot) {
            currentQuestion++;
            if (picked === snapshot.val().answer) {
                rightanswer();
            } else {
                wronganswer();
                // stop();
            }
        })
    });
// }

function wronganswer() {
    stoptimer(); 
    
    if (localStorage.getItem("player1") !== null) {
		var ref = firebase.database().ref('/players').child('1').child('losses');
		ref.transaction(function (currentClicks) {
			// If node/clicks has never been set, currentRank will be `null`.
			var newValue = (currentClicks || 0) + 1;

			return newValue;
        });
    } else if (localStorage.getItem("player2") !== null) {
		var ref = firebase.database().ref('/players').child('2').child('losses');
		ref.transaction(function (currentClicks) {
			// If node/clicks has never been set, currentRank will be `null`.
			var newValue = (currentClicks || 0) + 1;

			return newValue;
		});        
	}
    loadNextQuestion(currentQuestion);
}

function rightanswer() {
    stoptimer();
    if (localStorage.getItem("player1") !== null) {
		var ref = firebase.database().ref('/players').child('1').child('wins');
		ref.transaction(function (currentClicks) {
			// If node/clicks has never been set, currentRank will be `null`.
			var newValue = (currentClicks || 0) + 1;

			return newValue;
        });
    } else if (localStorage.getItem("player2") !== null) {
		var ref = firebase.database().ref('/players').child('2').child('wins');
		ref.transaction(function (currentClicks) {
			// If node/clicks has never been set, currentRank will be `null`.
			var newValue = (currentClicks || 0) + 1;

			return newValue;
		});        
	}
    loadNextQuestion(currentQuestion);
}

function stoptimer(){
    clearInterval(timer);
}