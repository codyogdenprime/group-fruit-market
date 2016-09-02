var walletFunc = function () {
	var totalFunds = 100;
	this.add = function ( num ) {
		totalFunds = Number( totalFunds + num );
		$("#wallet-total").html( totalFunds.toFixed(2) );
		return totalFunds;
	};
	this.sub = function ( num ) {
		if( Number( totalFunds - num ) >= 0 ) {
			totalFunds = Number ( totalFunds - num );
			$("#wallet-total").html( totalFunds.toFixed(2) );
			return totalFunds;
		} else {
			return false;
		}
	};
	this.total = function () {
		return totalFunds.toFixed(2);
	};
};

var wallet = new walletFunc();
var inventory = []; // User's Inventory ( of objects )
var programStatus = true;

var market = [
{
	pie: "Apple",
	price: 5,
	photo: "http://placehold.it/100"
},
{
	pie: "Grape",
	price: 4,
	photo: "http://placehold.it/100"
}
];

var updatePrices = function () {

	// For every fruit in the market
	for ( var i = 0; i < market.length; i++ ) {

		// Get a new price 
		var newPrice = getNewPrice( market[i] );

		// If the new price data type is a number
		if( typeof newPrice === "number" ) {

			// Update the price for that paritcular fruit
			market[i].price = newPrice;

			// Add the new Price to the DOM

			$("#apple-price").html( newPrice );

		} else {

			// If all else fails, just error out
			console.error( "Something went wrong. New price is not a number.", newPrice );

		}

	}

};

// Fifteen seconds timer function
// Run this function every fifteen seconds
var fifteenSecondsTimer = function () {
	// If the program is running is true
	if( programStatus === true ) {

		// Every 15 seconds, do the stuff in this scope

		// Update the prices internally and on the DOM
		updatePrices();

		// Set a time out to run Change Price again
		setTimeout( fifteenSecondsTimer, 15000 );
	}
};

// Get New Price Function
var getNewPrice = function ( fruitObj ) {

  var currentPrice = Number( fruitObj.price );
  
  // Get a new price every time we run the function
  var newPrice = Number( ( (Math.random() * 9.99) + 0.5 ).toFixed(2) );
  
  // Find the absolute value of the price
  var abs = Math.abs( newPrice - currentPrice );
  
  // IF
  // the absolute value of the price is less than or equal to .5
  // AND IF
  // the newPrice is less than or equal to max price (9.99)
  // AND IF
  // the newPrice is greater than or equal to 0
  if( abs <= 0.5 && newPrice <= 9.99 && newPrice >= 0.5 ) {
  	
  	// console.log( "New Price:", newPrice );
  	
  	// Send the price back to where it was called as a number
  	return newPrice;
  
  // If the number does not work, let us try again! Tally ho!	
  } else {
  	
  	// The function will recursively call itself and run again
  	// Essentially, we want to force this function to give a real answer
  	return getNewPrice( fruitObj );
  	
  }
};

$( document ).ready( function () {

	$("button.buy").on( "click", function () {

		var fruitType = $( this ).data("fruit");

		for( var i = 0; i < market.length; i++ ) {

			if( market[i].pie === fruitType ) {

				if( wallet.sub( market[i].price ) ) {

					var newInventory = {
						pie: market[i].pie,
						price: market[i].price
					};

					inventory.push( newInventory );

					console.log( "Inventory:", inventory );

				} else {

					alert("Not enough funding!");

				}

			}

		}

	} );

	$("button.sell").on( "click", function () {

		var fruitType = $( this ).data("fruit");

		var pieTypes = market.map( function( obj ) {
			return obj.pie;
		} );

		var pieTypeCount = [];

		console.log( "Pie Types:", pieTypes );

		for( var i = 0; i < pieTypes.length; i++ ) {

			pieTypeCount[pieTypes[i]] = countItemInObject( inventory, "pie", pieTypes[i] );

		}

		if( pieTypeCount[fruitType] <= 0 ) {
			console.log( "You cannot sell what you do not have." );
		}

	} );

	fifteenSecondsTimer();

});

var countItemInObject = function ( arr, item, search ) {
	return arr.filter(function( obj ){
		return obj[item] === search;
	}).length;
};