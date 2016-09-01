
var inventory = []; // User's Inventory ( of objects )

var market = [
{
	pie: "Apple",
	price: 1,
	photo: "http://placehold.it/100"
}
];

console.log('sourced');

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
  console.log('in displayPies');
  console.log('in local array',piesArray);
  $('#outputDiv p').textContent="";
  for (var i = 0; i < piesArray.length; i++) {
    var newHeader= document.createElement('h2');
    var newParagraph=document.createElement('p')

    newHeader.textContent= piesArray[i].first_name+' '+piesArray[i].last_name;
    newParagraph.textContent= piesArray[i].info;

    $('#outputDiv').append(newHeader);
    $('#outputDiv').append(newParagraph);

  }//for loop


};//displayPies
displayPies();
