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
