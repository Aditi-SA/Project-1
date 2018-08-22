var config = {
	apiKey: "AIzaSyBlVizWSXvvDmu07S6rDKI5TiB7FG513Bs",
	authDomain: "musicgame-7e818.firebaseapp.com",
	databaseURL: "https://musicgame-7e818.firebaseio.com",
	projectId: "musicgame-7e818",
	storageBucket: "",
	messagingSenderId: "35355710350"

};

firebase.initializeApp(config);

var database = firebase.database()

var playerSlot = 0

document.getElementById('wins-losses-1').style.display = "none"
document.getElementById('wins-losses-2').style.display = "none"

document.getElementById('join').addEventListener('click', function () {

	database.ref('/players').once('value', function (snapshot) {
		if (snapshot.hasChild('1')) {
			var name = document.getElementById('name').value
			database.ref('/players').child('2').set({
				name: name,
				losses: 0,
				wins: 0,
				ready: false,
			})
			playerSlot = 2
			document.getElementById('name-join').innerHTML = ""
		} else {
			var name = document.getElementById('name').value
			database.ref('/players').child('1').set({
				name: name,
				losses: 0,
				wins: 0,
				ready: false,
			})
			playerSlot = 1
			$("#name-join").html("You are player 1. Give your opponent this URL to join the game:")
			//document.getElementById('player-slot').innerHTML = "You are player 1. Give your opponent this URL to join the game:"
			//document.getElementById('name-join').innerHTML = ""
		}
	})
})


//////////////////////TRIAL//////////////////////////////////////

//Note
//issue1: update "ready" in startgame for player 1 only when player 1 hits #startgame
//			: update "ready" in startgame for player 2 only when player 2 hits #startgame
//issue2: start counter only when both (player 1) AND (player 2) "ready" parameter in firebase is true
// issue3 both players shd face the same question
document.getElementById('startgame').addEventListener('click', function () {

	database.ref('/players').once('value', function (snapshot) {
		//if (snapshot.hasChild('1')) {			
		
			var newPostKey = firebase.database().ref().child('/players/ready').push().key;
			//firebase.database().ref().child('/players/1/' + newPostKey)
			firebase.database().ref().child('/players/1/')
				.update({ ready: "true" });		

			document.getElementById('name-join').innerHTML = ""
		//} 
		// else {		
				
				//firebase.database().ref().child('/players/ready' + newPostKey)
				firebase.database().ref().child('/players/2/')
				.update({ ready: "true" });
			
			$("#name-join").html("You are player 1. Give your opponent this URL to join the game:")

		//}
	})
})
/////////////////////////TRIAL ENDS////////////////////////////////////


document.getElementById('reset').addEventListener('click', function () {
	database.ref('/players').child('1').remove()
	database.ref('/players').child('2').remove()
	location.reload()
})


database.ref('/players').on('value', function (snapshot) {
	if (snapshot.hasChild('1')) {
		database.ref('/players').child('1').on('value', function (snap) {
			document.getElementById('wins-losses-1').style.display = "block"
			document.getElementById('player-1-name').innerHTML = snap.val().name
			document.getElementById('player-1-wins').innerHTML = snap.val().wins
			document.getElementById('player-1-losses').innerHTML = snap.val().losses
		})
	}
})


database.ref('/players').on('value', function (snapshot) {
	if (snapshot.hasChild('2')) {
		database.ref('/players').child('2').on('value', function (snap) {
			document.getElementById('wins-losses-2').style.display = "block"
			document.getElementById('player-2-name').innerHTML = snap.val().name
			document.getElementById('player-2-wins').innerHTML = snap.val().wins
			document.getElementById('player-2-losses').innerHTML = snap.val().losses
		})
	}
})






// window.onbeforeunload = closingCode;
// function closingCode(){
//     database.ref().set()
//    return null;
// }
//
//
// window.onbeforeunload = function(e) {
//   var dialogText = 'Dialog text here';
//   e.returnValue = dialogText;
//   return dialogText;
// };


// $( window ).unload(function() {
//   console.log('Handler for .unload() called.');
//   return
// });


var q1 = {
	question: "What is Wolverines real name?",
	option1: "James Howlett AKA Logan",
	option2: "Bruce Wayne",
	option3: "Hank Pym",
	option4: "Harley Quinn",
	answer: "James Howlett AKA Logan",	
	characterId: "717"
};

var q2 = {
	question: "Which planet is Superman originally from?",
	option1: "Venus",
	option2: "Beta",
	option3: "Krypton",
	option4: "Achermon",
	answer: "Krypton",	
	characterId: "644"
};

var q3 = {
	question: "Identify the superhero?",
	option1: "Hawkeye",
	option2: "Iron Man",
	option3: "Captain America",
	option4: "Falcon",
	answer: "Captain America",	
	characterId: "149"
};

var q4 = {
	question: "What superhero team is The Flash affiliated with?",
	option1: "The Avengers",
	option2: "Guardians of the Galaxy",
	option3: "Fantastic Four",
	option4: "The Justice League",
	answer: "The Justice League",	
	characterId: "265"
};

var q5 = {
	question: "What is Wonderwoman's lasso called",
	option1: "Truth revealer",
	option2: "Lasso of verda",
	option3: "Truth Giver",
	option4: "Lasso of truth",
	answer: "Lasso of Truth",
	characterId: "720"
};

var q6 = {
	question: "Which of the following is NOT associated with Batman?",
	option1: "Wayne Enterprise",
	option2: "Batmobile",
	option3: "Ra's al ghul",
	option4: "Daily Planet",
	answer: "Daily Planet",
	characterId: "70"
};

var q7 = {
	question: "Who is the name of the person who united The Avengers together?",
	option1: "Nick Fury",
	option2: "Thanos",
	option3: "Iron Man",
	option4: "Maria Hill",
	answer: "Nick Fury",
	characterId: "489"
};

var q8 = {
	question: "Name the actress who played Black Widow in Marvel's Avengers series?",
	option1: "Emma Watson",
	option2: "Gwyneth Paltrow",
	option3: "Scarlett Johansson",
	option4: "Elizabeth Olsen",
	answer: "Scarlett Johansson",
	characterId: "107"
};

var q9 = {
	question: "What is Loki's alternate name?",
	option1: "God of Mischief",
	option2: "God of Strength",
	option3: "God of War",
	option4: "God of Ruling Arbitration",
	answer: "God of Mischief",
	characterId: "414"
};

var q10 = {
	question: "Which one of these villains is NOT associated with Spider-Man?",
	option1: "Sandman",
	option2: "Vulture",
	option3: "Dr. Octopus",
	option4: "Scarecrow",
	answer: "Scarecrow",
	characterId: "620"
};

// Declare variables
 var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
// SuperHero API Key
var superHeroApikey = "10160799108715343";
var time = 30; //time for each question
var Correct = 0;
var Incorrect = 0;
var currentQuestion = 0;
var numtimeout = 0;


function QuestiontoAsk() {
	console.log("A1 Q");
	time = 30;
	cntr = setInterval(runtimer, 500);
	$(".timer").html("<h2> Countdown: " + time + "<h2>");
	$(".question").html(questions[currentQuestion].question);
	$(".Ch1").html(questions[currentQuestion].option1);
	$(".Ch2").html(questions[currentQuestion].option2);
	$(".Ch3").html(questions[currentQuestion].option3);
	$(".Ch4").html(questions[currentQuestion].option4);
	$(".info").empty();
	//Note: imageToShow(); insert the pics from imageToShow
	imageToShow();
}

function imageToShow(){
		console.log("imageToShow");

		var marvelQuery = "https://superheroapi.com/api.php/" + superHeroApikey + "/" + questions[currentQuestion].characterId + "/image";
	
		// Creating an AJAX call for the specific movie button being clicked
		$.ajax({
		  url: marvelQuery,
		  method: "GET"
		}).then(function (response) {
	
			var characterDiv = $("<div>");
			characterDiv.addClass("card");
			characterDiv.attr("style", "float:left; margin: 20px 20px; width:200px;");
	
	
			var image = $("<img>");
			image.attr("src", response.url).attr("height", "175");
			image.addClass("card-img-top gif");
			characterDiv.append(image);
			
			$(".picture").html(characterDiv);
	
		  
		}).catch(function (error) {
		  console.log(error);
		});
	
	  }

function runtimer() {
	console.log("A2 timer");
	time--;
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>")
	if (time == 0) {
		timeout();
		TimerStop();
		$(".choice").empty();
	}
	else if (time < 5) {
		$(".timer").addClass("red");
		setTimeout(function(){
			$(".timer").removeClass("red")
		}, 500)
	};
}

//function to stop timer when an option is selected
//note: aditi: Needs to be modified for multiplayer - check later
function TimerStop() {
	console.log("currentQuestion: " + currentQuestion)
	clearInterval(cntr);
	currentQuestion++;
	if (currentQuestion == questions.length) {
		setTimeout(endgame, 3000);
	} else {
		setTimeout(QuestiontoAsk, 3000);
	}
}

function timeout() {
	$(".question").html("<p>Time's up!! <br> The correct answer was: " + questions[currentQuestion].answer + "</p>");
}

//function for correct answer
function rightanswer() {
	$(".question").html("<p>Correct!</p>");
	Correct++;
	TimerStop();
}

//function for incorrect answer
function wronganswer() {
	Incorrect++;
	$(".question").html("<p>WRONG! <br> The correct answer was: " + questions[currentQuestion].answer + "</p>");
	TimerStop();
}

function endgame() {
	$(".question").html("<h2>You got " + Correct + " answers correct!</h2>"
	+ "<h2>You got " + Incorrect + " wrong!</h2>" + "<h2>You didn't answer " + numtimeout + " questions!</h2>");
	$(".choice").html("Game ends!!!!!!!!!");
	currentQuestion = 0;
	Correct = 0;
	Incorrect = 0;
	numtimeout = 0;
	$("#startgame").show();
	//$("button").show();
}

//Function that starts game when "Start Game" is clicked
$("#startgame").on("click", function () {
	//Aditi: try putting firebase function
	console.log("A1");	
	//$(".middle").html("<h2> Countdown: " + time + "<h2>");
	QuestiontoAsk();
	$("#startgame").hide();
	$("#player-name-and-reset-container").hide();
	//$(".quiz").hide();
	//$("#player-slot").hide(); //redundant
});

// Clicking on a multiple choice answer.
$(".choice").on("click", function () {
	console.log(questions[currentQuestion].answer);

	console.log(this);
	if ($(this).text() === questions[currentQuestion].answer) {
		Correct++;
		rightanswer();
		stop();
	}
	else {
		wronganswer();
		stop();
	};

	$(".choice").empty();
});


