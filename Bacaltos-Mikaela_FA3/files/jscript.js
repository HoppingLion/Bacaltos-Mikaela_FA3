
var n1, n2, n3;
var hrate
var type
var tmMin, tmHr;
var letter;

function rndm(){
	n1 = Math.ceil(Math.random()*20);
	document.getElementById("rck").innerHTML = n1;

	n2 = Math.ceil(Math.random()*20);
	document.getElementById("ppr").innerHTML = n2;

	n3 = Math.ceil(Math.random()*20);
	document.getElementById("scssr").innerHTML = n3;   
	compare();

}

function compare(){
	hrate = n1;
	if(hrate < n2){
		hrate = n2;
	}
	if(hrate < n3){
		hrate = n3;
	}
}

function choose(){
	if(hrate == n1){
		type = "Rock";
	}
	else if(hrate == n2){
		type = "Paper";
	}
	else if(hrate == n3){
		type = "Scissors";
	}
	document.getElementById("mostUse").innerHTML = ("The most used is " + type);
}

function user(){
	letter = alphabet[n1-1];
	document.getElementById("mostWin").innerHTML = ("The most recent winner's first name letter was '" + letter + "'");
}

function tmTook(){
	tmMin = n2 * n3;
    tmHr = Math.round((tmMin/60)*1000);
	tmHr = tmHr/1000;
	document.getElementById("nameWin").innerHTML = n2;
	document.getElementById("nameWin").innerHTML = ("The total time the game was played " + type + " is " + tmMin + " minutes, or approximately " + tmHr + " hours.");
}

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];