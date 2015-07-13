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
     
}



function Hand() {
	var hand = [];
	for(var i=0;i<5;i++)
	{
		var r = randomNum(1,51);
		hand[i] = deck[r];

	}
	
	return hand;
	
}

//generate 4 different hands
var hand1 = Hand();
var hand2 = Hand();
var hand3 = Hand();
var hand4 = Hand();

console.log("HAND 1",hand1);
console.log("HAND 2",hand2);
console.log("HAND 3",hand3);
console.log("HAND 4",hand4);





//Shuffle cards
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
var shufDeck = shuffle(deck);

console.log("shuffled deck:",shufDeck);

    //  Check for a flush
    var isFlushVal = false;

    function isFlush (hand) {
    	for(var i=0; i < 4;i++)
    	{
    		if( hand[i].slice(2,5) === hand[i+1].slice(2,5) )
    		{
                isFlushVal = true;
    		}
    		else
    		{
    			isFlushVal = false;
    			break;
    		}	
    	}
        return(isFlushVal);
    	console.log("isFlushVal:",isFlushVal)
    }

//isFlush(hand);

 //check for isStright
var tempHand = [];
var isStright = 0;
var isStrightFlag = false;

 function isStrightFun (hand) {

        for(var i=0; i < 4;i++)
    	{
           tempHand[i] =  Number( hand[i].slice(1,2) );
    	}


    	for(var j=0; j < 4;j++)
    	{
            for(var k=0; k < 4;k++)
    		{
    			if(tempHand[j] === tempHand[k] + 1)
    			{
                  
                   isStright++;

    			}
    		}
    	}

    	if(isStright === 4)
    	{
    		isStrightFlag = true;
    	}

    	return(isStrightFlag);
    	console.log("isStrightFlag:",isStrightFlag)

 	
 }

//isStrightFun(hand);



console.log("isFlush HAND 1",isFlush(hand1));
console.log("isFlush HAND 2",isFlush(hand2));
console.log("isFlush HAND 3",isFlush(hand3));
console.log("isFlush HAND 4",isFlush(hand4));


console.log("isStright HAND 1",isStrightFun(hand1));
console.log("isStright HAND 2",isStrightFun(hand2));
console.log("isStright HAND 3",isStrightFun(hand3));
console.log("isStright HAND 4",isStrightFun(hand4));






