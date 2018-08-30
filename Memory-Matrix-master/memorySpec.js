//each test suite is grouped together by "describe" and each test spec begins with "it"
describe("createDeck", function() {
  it("should store the value of a deck of cards in an array", function() {
    var userPoints;
    var arrayCards;
    //store the value in an array
    expect([]).toEqual([]);
    arrayCards = [];
  });

});
describe("randomDeck", function(){
  //randomize deck
  it("should randomize the deck of cards", function() {
    expect(randomDeck.pop()).toHaveBeenCalled();
    expect(randomDeck.unshift()).toHaveBeenCalled();
    expect(Math.random()).toHaveBeenCalled();

  });
});

describe("pickTwoCards", function(){

  it("should prompt the user to pick two cards", function(){
    //spec should checks to see if it has been called twice
    //is prompt a function?
    expect(window, 'prompt').toHaveBeenCalledTimes(2);
  });
  it("triggers a card to be turned over when the user clicks on it", function(){
    //may need an html element in the variable name?
    var spyEvent = jasmine.createSpy('#gameboard', 'click')
    //spec spies on the click event to make sure the #gameboard element was triggered
    $('#gameboard').click()
    expect('click').toHaveBeenTriggeredOn('#gameboard')
    expect(spyEvent).toHaveBeenTriggered()

  });

});

describe("compareCards", function(){
  var x;
  var y;

  it("should check index of the array of cards that the user picked & look into the array and compare the two card values to see if they are the same value", function(){
    expect(compareCards(arrayCards[x])).toEqual(arrayCards[y])
});
});

describe("promptWinner", function(){
  it("should prompt when the winner matches all the cards", function(){
    spyOn(window, 'prompt').and.returnValue(true)
  });
});

describe("playGame", function(){
  pickTwoCards = function(){
  };
  compareCards = function(){
  };
  it("should continue to call pickTwoCards & compareCards until the player wins", function(){
    expect(pickTwoCards()).toHaveBeenCalled();
    expect(compareCards()).toHaveBeenCalled();
  });
});
