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
	pie: "lemon",
	price: 1
},
{
	pie: "pumpkin",
	price: 1
},
{
	pie: "berry",
	price: 1
},
{
  pie: "apple",
  price: 1
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
  console.log( "fifteen seconds start");
	// If the program is running is true
	if( programStatus === true ) {
		// Set a time out to run Change Price again
		setTimeout( updatePrices, 15000 );
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

var runProgram = function () {

  //fiveMinuteTimer();

  fifteenSecondsTimer();

  //calculateInitialPrice();

};

// Get the average price of an inventory item
var getAvgOfInvItem = function ( pieType ) {
  // Create a total var
  var total = 0;

  // Create a count var
  var count = 0;

  // For every item in the inventory
  for( var item in inventory ) {
    // search for the specific pie type
    if( inventory[item].pie === pieType ) {
      // add its price to the total and count it
      total += inventory[item].price;
      count++;
    }
  }
  return Number( total / count );
};

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

      $("#" + market[i].pie + "-price").html( newPrice );

    } else {

      // If all else fails, just error out
      console.error( "Something went wrong. New price is not a number.", newPrice );

    }

  }

  fifteenSecondsTimer();

};

// Count the instances of a specific value in a key in a bunch of objects inside an array
var countItemInObject = function ( arr, key, search ) {
  return arr.filter(function( obj ){
    return obj[key] === search;
  }).length;
};


// var sellOff = function () {
// 	if (running === true) {
// 		//update market close prices
// 		otherVariable
// 		for (var i = 0; i < market.length; i++) {
// 			if otherVariable.pie ==market[i].pie{
// 				totalFunds+= market[i].price
//
// 			}//if
// 		}//for loop

		//alert shopper the market is closed
		//empty pies from bag
		//compare money spent on pies to ending market price on pies

// };


$(document).ready(function(){

  $("#startBtn").on("click", function() {
    console.log( "Start Button Clicked" );

    runProgram();
    });

  updatePrices(); // Will run on Doc ready!

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

      var avgPrice = getAvgOfInvItem( market[i].pie ).toLocaleString( 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 } );

      if( !isNaN( avgPrice ) ) {

        $("#" + market[i].pie + "-average").html( avgPrice );

      } else {

        $("#" + market[i].pie + "-average").html( "--" );

      }

      

      $("#" + market[i].pie + "-count").html( countItemInObject( inventory, "pie", market[i].pie ).toLocaleString( 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) );

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
