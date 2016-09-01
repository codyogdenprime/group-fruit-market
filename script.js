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
  //establish pie type and price
  var piType = market[i].pie;
  console.log('Pie type:', piType);
  var piPrice = market[i].price;
  console.log('Purchase Price: $' + piPrice);
  // //subtract $$$ from wallet
  // wallet(piPrice);
  console.log('In wallet: $' +wallet.sub(piPrice));
  // //add purchased pie to Inventory
  inventory.push(market[i]);
  console.log(inventory);
  //update average purchased price

  //display on DOM
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
  console.log(inventory);
  //update average purchased price

  //display on DOM
};
console.log(sellPi());

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
