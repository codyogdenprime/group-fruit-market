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