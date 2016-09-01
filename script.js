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
var calculatePrice = function () {
	return Number( ( (Math.random() * 9.99) + 0.5 ).toFixed(2) );
};

var randomNum = function () {
	var price = calculatePrice();
	if ( price > 9.99 || price < 0.5 || price === undefined ) {
		randomNum();
	} else {
		return price;
	}
	for (var i = 0; i < market.length; i++) {
		market[i].price = price;
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
  displayPies();

}); //doc ready
// $('<h2 />')
// variable.html(string)
