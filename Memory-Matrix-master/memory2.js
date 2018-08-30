"use strict";
var userPoints = 0;
var arrayCards = [];
for(var i = 0; i < 12; i++){
  arrayCards.push(i,i)
  $("#memoryBoard").append('<div class = "tile">')
  $("#memoryBoard").append('<div class = "tile">')
}
//number of cards face up to the user
var numCards = 0;
var cardPair = [];

$(document).ready(function() {

  //defining click event
  $(".tile").on("click", pickCard);
  //i need to make a
  //user picks size of their board and picks difficulty
  $("#buttonThatIHaveNotMadeYet").on("click", pickBoardSize);
});


//it should store the value of a deck of cards in an array
var easy;
var intermediate;
var hard;
function pickBoardSize() {
  if($(this))

}

function pickCard () {
  //allows user to keep picking cards until two cards are face up
  if (!($(this).hasClass('disabled'))) {
    if (numCards < 2){
    // var divIndex = $('div div div').index($(this));
      var divIndex = $('#memoryBoard .tile').index($(this));
    // console.log($('#memoryBoard .tile'))
      cardPair.push(divIndex);
      $(this).html(arrayCards[divIndex]).css('text-align','center').addClass('flip');
    // console.log(divIndex, arrayCards[divIndex]);
    // console.log("Div index: " + divIndex)
    //adds two the number of cards face up to the user
      numCards++;
      if(numCards === 2){
        setTimeout(function(){
          $(".flip").html('');
        }, 1000);
        compareCards();
      }

    } else {
    //if the card has been flipped & not a match, unflip

      console.log('here!');
      $('.flip').html("").removeClass('flip');
      numCards = 0;
    //get rid of the two cards already stored in cardPair
      cardPair.pop();
      cardPair.pop();
    }
  }
}
//need to do something to the CSS to active/deactive the CSS
//eventually add a timer to have them flip back
function compareCards () {
  // if(arrayCards[cardPair[0]] != arrayCards[cardPair[1]]){
  if(arrayCards[cardPair[0]] === arrayCards[cardPair[1]]){
    userPoints++;
    $('.flip').removeClass('flip');

    console.log(userPoints);
    //    numCards = 0;
  }
  // }
  // $('.flip').html("").delay(300);
  var autoFlipCards = setTimeout(function(){
    $(".flip").html('');
  }, 300);


}

//This function will randomize the order of cards of an input array
function randomDeck (arrayCards) {
  var newArray = [];
  //make a random number
  for(var j = 0; j < 5; j++){
    for(var i = 0; i < 24; i++){
      var temp = arrayCards.pop();
      if(Math.random() > .5){
        //if the number is bigger than .5, push to new array
        newArray.push(temp);
      }
      //else unshift to new array
      else{
        newArray.unshift(temp);
      }
    }
    //at the end of the outside loop, put the cards back newArray to shuffle it again
    arrayCards = newArray;
    newArray = [];
  }

  console.log(newArray);
  console.log(arrayCards);
  return arrayCards;
}



function promptWinner() {
  alert('You win!');


}

function playGame () {

  arrayCards = randomDeck(arrayCards);

  // console.log('last' + arrayCards);

}
