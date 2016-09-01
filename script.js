
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

})//doc ready
// $('<h2 />')
// variable.html(string)
