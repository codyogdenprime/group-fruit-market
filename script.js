$(document).ready(function(){
  console.log('script.js sourced');

var walletFunc = function () {
  var totalFunds = 100;
	this.add = function ( num ) {
		totalFunds = Number( totalFunds + num );
		return totalFunds;
	};
	this.sub = function ( num ) {
		totalFunds = Number ( totalFunds - num );
		return totalFunds;
	};
	this.total = function () {
		return totalFunds;
	};
};

var i = 0;

var wallet = new walletFunc();
var inventory = []; // User's Inventory ( of objects )
var programStatus = true;


var market = [
{
	pie: "Apple",
	price: 1,
	photo: "http://placehold.it/100"
}
];


// Five minute timer function
// Run this function when the program starts
var fiveMinuteTimer = function () {
	// Shut Down and Sell Off after 5 minutes
	setTimeout( shutdownFunction, 300000);
};

// Fifteen seconds timer function
// Run this function every fifteen seconds
var fifteenSecondsTimer = function () {
	// If the program is running is true
	if( programStatus === true ) {
		// Set a time out to run Change Price again
		setTimeout( changePrice(), 15000 );
	}

};

// var market = [ { pie: "Apple", price: 1, photo: "http://placehold.it/100" },{ pie: "Apple", price: 1, photo: "http://placehold.it/100" },{ pie: "Apple", price: 1, photo: "http://placehold.it/100" } ];


  var displayPies = function () {
    var toDom='#outputDiv';
    console.log('in displayPies');
    $(toDom).textContent="";
    for (var i = 0; i < market.length; i++) {
      var newHeader= $('<h2 />');
      var newParagraph=$('<p />');
      var pic= $('<img />');





      newHeader.html(market[i].pie);
      newParagraph.html(market[i].price);
      pic.attr('src',market[i].photo);



      $(toDom).append(newHeader);
      $(toDom).append(pic);
      $(toDom).append(newParagraph);
      // console.log(newHeader);
      // console.log(pic);
      // console.log(newParagraph);

    }//end for loop


  };//end displayPies

  var buyPi = function() {
    console.log('in buyPi');
    //establish pie type and price
    var piType = market[i].pie;
    console.log('Pie type:', piType);
    var piPrice = market[i].price;
    console.log('Purchase Price: $' + piPrice);
    // //subtract $$$ from wallet
    // wallet(piPrice);
    console.log('In wallet: $' + wallet.sub(piPrice));
    // //add purchased pie to Inventory
    inventory.push(market[i]);
    console.log('Current Inventory:', inventory);
    //update average purchased price
    var avgPrice = inventory[i].price / inventory.length;
    console.log('Average Purchased Price: $' + avgPrice);
    //display on DOM
    displayPies();
  };

  console.log(buyPi());

  var sellPi = function() {
    console.log('in sellPi');
    //establish pie type
    var piType = market[i].pie;
    console.log('Pie type:', piType);
    var piPrice = market[i].price;
    console.log('Sell Price: $' + piPrice);
    //add $$$ to wallet
    console.log('In wallet: $' + wallet.add(piPrice));
    //remove purchased pie from Inventory
    var removedPi = inventory.shift();
    console.log("removed:", removedPi);
    console.log('Current Inventory:', inventory);
    //update average purchased price
    if(inventory.length == 0){
      console.log('Nothing In Inventory');
    }else{
    var avgPrice = inventory[i].price / inventory.length;
    console.log('Average Purchased Price: $' + avgPrice);
    //display on DOM
    displayPies();
    }
  };
  console.log(sellPi());


})//end doc ready
