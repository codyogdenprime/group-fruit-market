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


var programStatus = true;

var running = function () {
	//timmer that counts down if 5 minutes has elapsed
};

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

var start = function () {
		//generate random price for each pie price
		var calculatePrice = function () {
	  return Number( ( (Math.random() * 9.99) + 0.5 ).toFixed(2) );
	}

	var randomNum = function () {
	  var price = calculatePrice();
	  if ( price > 9.99 || price < 0.5 || price === undefined ) {
	    randomNum();
	  } else {
	    return price;
	  }
	};
		for (var i = 0; i < market.length; i++) {
			market[i].price = price;ben
		}
}

console.log( 'randomNum function price output:', randomNum() );

			market[i].price = cost;
		}
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
var market = [ { pie: "Apple", price: 1, photo: "http://placehold.it/100" },{ pie: "Apple", price: 1, photo: "http://placehold.it/100" },{ pie: "Apple", price: 1, photo: "http://placehold.it/100" } ];

console.log('sourced');


$(document).ready(function(){


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
    //displays Pies, just like the name says
  var displayPies = function () {
    var toDom='#outputDiv';
    console.log('in displayPies');
    $(toDom).textContent="";
    for (var i = 0; i < market.length; i++) {
        //create html elements
      var newHeader= $('<h2 />');
      var newParagraph=$('<p />');
      var pic= $('<img />');
        //add object elements to html
      newHeader.html(market[i].pie);
      newParagraph.html(market[i].price);
      pic.attr('src',market[i].photo);
        //append objects to Dom
      $(toDom).append(newHeader);
      $(toDom).append(pic);
      $(toDom).append(newParagraph);
    }//for loop
  };//displayPies

  var displayWallet= function(){
      $(".pie-" + market[i].pie ).html( market[i].price );
    }//for loop
  };//displayWallet

var displayWallet
  displayPies();

})//doc ready
// $('<h2 />')
// variable.html(string)
