$(document).ready( runfun(3,4) );

function runfun(a,b) {
	return (a+b);
}

Card = {value:[2,3,4,5,6,7,8,9,10,"J","Q","K","A"] , suit:["diamonds","clubs","spades","hearts"] }

var deck = [];
function Deck() {

	
    var k = 0;
	for(var i =0;i<Card.value.length;i++)
	{
		for(var j =0;j<Card.suit.length;j++)
		{
		  if(k < 52){
		  	 deck[k]= "c"+Card.value[i]+Card.suit[j];
             k++;
		  }
         
		}
	}
	
console.log("deck of cards:",deck);
}

Deck();

var rndNum;
function randomNum(a,b){
	  
	 rndNum = Math.floor((Math.random() * b) + a);
     return rndNum;
     console.log(rndNum);
}


var hand = [];
function Hand() {
	
	for(var i=0;i<5;i++)
	{
		var r = randomNum(1,53);
		hand[i] = deck[r];

	}
	console.log("hand of cards:",hand)
}

Hand();

//Shuffle cards
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
var shufDeck = shuffle(deck);

console.log("shuffled deck:",shufDeck);



