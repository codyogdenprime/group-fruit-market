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

//generate random price for each pie price
var calculateInitialPrice = function () {
	var currentPrice = Number( ( (Math.random() * 9.99) + 0.5 ).toFixed(2) );
  if ( currentPrice > 9.99 || currentPrice < 0.5 || currentPrice === undefined ) {
    for (var i = 0; i < market[i].length; i++) {
      market[i].price = currentPrice;
      return true;
};

// Get New Price Function
var getNewPrice = function ( ) {

  // Get a new price every time we run the function
  var newPrice = Number( ( (Math.random() * 9.99) + 0.5 ).toFixed(2) );

  // Find the absolute value of the price
  var abs = Math.abs( newPrice - currentPrice );

  // Check that new price absolute value is within 50 cents and meets
  // market price constraints
  if( abs <= .5 && newPrice <= 9.99 && newPrice >= 0 ) {

  	console.log( "New Price:", newPrice );

  	// Send the price back to where it was called as a number
  	return newPrice;

  // If the number does not work, let us try again! Tally ho!
  } else {

  	// The function will recursively call itself and run again
  	return getNewPrice();

  }
};

var start = function () {



	// calculatePrice();
  // displayPies();
};





var sellOff = function () {
	if (running === true) {
		//update market close prices
	} else {
		//alert shopper the market is closed
		//empty pies from bag
		//compare money spent on pies to ending market price on pies
	}
};


$(document).ready(function(){


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
      console.log(newHeader);
      console.log(pic);
      console.log(newParagraph);

    }//for loop


  };//displayPies
  // displayPies();

  // Whenever a button with class .buy is clicked
  $("button.buy").on( "click", function () {

    // Get the fruit type from the element's data
    var fruitType = $( this ).data("fruit");

    // For every item in the market
    for( var i = 0; i < market.length; i++ ) {

      // If the market fruit matches the clicked fruit
      if( market[i].pie === fruitType ) {

        // Subtract the current price of the fruit from the wallet
        // If that returns true
        if( wallet.sub( market[i].price ) ) {

          // Create a new inventory object
          var newInventory = {
            pie: market[i].pie,
            price: market[i].price
          };

          // Push the new object to the inventory
          inventory.push( newInventory );

          console.log( "Inventory:", inventory );

        } else {

          // Else alert the user there is not enough funding!
          alert("Not enough funding!");

        }

      }

    }

  } );

  $("button.sell").on( "click", function () {

    // Get the fruit type from the element's data
    var fruitType = $( this ).data("fruit");

    // Get an array of pieTypes from the market
    var pieTypes = market.map( function( obj ) {
      return obj.pie;
    } );

    // Create empty array to count each type of pie in inventory
    var pieTypeCount = [];

    console.log( "Pie Types:", pieTypes );

    // For each type of pie
    for( var i = 0; i < pieTypes.length; i++ ) {

      // Add an object to the pieTypeCount array { pieType: Number }
      pieTypeCount[pieTypes[i]] = countItemInObject( inventory, "pie", pieTypes[i] );

    }

    // If the count of each pie type is less than or equal to zero
    if( pieTypeCount[fruitType] <= 0 ) {

      // Alert the user they don't have enough inventory to sell
      alert( "You cannot sell what you do not have." );

      // Prevent the user from selling inventory they do not have
      return false;

    }

  } );
}); //doc ready
// $('<h2 />')
// variable.html(string)
