var wallet = function () {
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

var inventory = []; // User's Inventory ( of objects )

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
};
