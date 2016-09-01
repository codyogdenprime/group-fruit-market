var walletFunc = function () {
	var total = 0;
	this.add = function ( num ) {
		total = Number( total + num );
	};
	this.sub = function ( num ) {
		total = Number ( total - num );
	};
	this.total = function () {
		return total;
	};
};

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

var i = 0;
var buyPi = function() {
  console.log('in buyPi');
  //establish pie type
  var piType = market[i].pie;
  console.log('Pie type:', piType);
  // //subtract $$$ from wallet
  total = wallet.sub(market[i].price);
  console.log(total);
  // //add purchased pie to Inventory
  // inventory.push(market[i]);
  //update average purchased price

  //display on DOM
};

console.log(buyPi());

var sellPi = function() {
  //establish pie type

  //add $$$ to wallet

  //remove purchased pie from Inventory

  //update average purchased price

  //display on DOM


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
