
var inventory = []; // User's Inventory ( of objects )

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
