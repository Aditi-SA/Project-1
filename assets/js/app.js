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
	characterId: "1009610"
};

var q2 = {
	question: "Which planet is Superman originally from?",
	option1: "Venus",
	option2: "Beta",
	option3: "Krypton",
	option4: "Achermon",
	answer: "Krypton",
	characterId: "1009220"
};

var q3 = {
	question: "Identify the superhero?",
	option1: "Hawkeye",
	option2: "Iron Man",
	option3: "Captain America",
	option4: "Falcon",
	answer: "Captain America",
	characterId: "1009652"
};

var q4 = {
	question: "What superhero team is The Flash affiliated with?",
	option1: "The Avengers",
	option2: "Guardians of the Galaxy",
	option3: "Fantastic Four",
	option4: "The Justice League",
	answer: "The Justice League",
	characterId: "1009368"
};

var q5 = {
	question: "What is Wonderwoman's lasso called",
	option1: "Truth revealer",
	option2: "Lasso of verda",
	option3: "Truth Giver",
	option4: "Lasso of truth",
	answer: "Lasso of Truth",
	characterId: "1009524"
};

var q6 = {
	question: "Which of the following is NOT associated with Batman?",
	option1: "Wayne Enterprise",
	option2: "Batmobile",
	option3: "Ra's al ghul",
	option4: "Daily Planet",
	answer: "Daily Planet",
	characterId: "1009297"
};

var q7 = {
	question: "Who is the name of the person who united The Avengers together?",
	option1: "Nick Fury",
	option2: "Thanos",
	option3: "Iron Man",
	option4: "Maria Hill",
	answer: "Nick Fury",
	characterId: "1009697"
};

var q8 = {
	question: "Name the actress who played Black Widow in Marvel's Avengers series?",
	option1: "Emma Watson",
	option2: "Gwyneth Paltrow",
	option3: "Scarlett Johansson",
	option4: "Elizabeth Olsen",
	answer: "Scarlett Johansson",
	characterId: "1009187"
};

var q9 = {
	question: "What is Loki's alternate name?",
	option1: "God of Mischief",
	option2: "God of Strength",
	option3: "God of War",
	option4: "God of Ruling Arbitration",
	answer: "God of Mischief",
	characterId: "1010743"
};

var q10 = {
	question: "Which one of these villains is NOT associated with Spider-Man?",
	option1: "Sandman",
	option2: "Vulture",
	option3: "Dr. Octopus",
	option4: "Scarecrow",
	answer: "Scarecrow",
	characterId: "1009282"
};

// Declare variables
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// Marvel Image API Keys
var PUBLIC_KEY = "a239260af7bd8c5e374e7a05d9affd2b";
var PRIV_KEY = "195700d7088c134a202e57c9fb325dff831799ba";

var time = 30; //time for each question
var Correct = 0;
var Incorrect = 0;
var currentQuestion = 0;
var numtimeout = 0;


function QuestiontoAsk() {
	console.log("A1 Q");
	time = 30;
	cntr = setInterval(runtimer, 1000);
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

function imageToShow() {
	console.log("imageToShow");

	var ts = new Date().getTime();
	var MD5 = function (d) { result = M(V(Y(X(d), 8 * d.length))); return result.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }
	var result = MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

	var marvelQuery = 'https://gateway.marvel.com/v1/public/characters/' + questions[currentQuestion].characterId;

	$.getJSON(marvelQuery, {
        ts: ts,
        apikey: PUBLIC_KEY,
        hash: result,
    })
        .then(function (response) {
            var characterDiv = $("<div>");
            characterDiv.addClass("card");
            characterDiv.attr("style", "float:left; margin: 20px 20px; width:200px;");
            // sort of a long dump you will need to sort through
            console.log(response);
            var path = (response.data.results[0].thumbnail.path);
            var extension = (response.data.results[0].thumbnail.extension);

            var image = $("<img>");
            image.attr("src", path + '.' + extension).attr("height", "100%");
            // image.attr("src", response.url).attr("height", "175");
            image.addClass("card-img-top gif");
            characterDiv.append(image);

            $(".picture").html(characterDiv);

        })
        .fail(function (err) {
            // the error codes are listed on the dev site
            console.log(err);
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
		setTimeout(function () {
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


