$(document).ready( runfun(3,4) );

function runfun(a,b) {
	return (a+b);
}

Card = {value:[2,3,4,5,6,7,8,9,10,"J","Q","K","A"] , suit:["diamonds","clubs","spades","hearts"] }

function Deck() {

	var deck = [];
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
	console.log(deck)

}

Deck();



