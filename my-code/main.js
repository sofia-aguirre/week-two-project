var cerealsArray = [
{	name: 'Cheerios',
	img: './images/cereal/cheerios.jpg'},
{	name: 'Captain Crunch',
	img: './images/cereal/crunch.jpg'},
{	name: 'Grape Juice',
	img: './images/cereal/fruit-loops.jpg'},
{	name: 'Choco Puffs',
	img: './images/cereal/puffs.jpg'},
{	name: 'Raisin Bran',
	img: './images/cereal/raisin-bran.jpg'}
];


var juicesArray = [
{	name: 'Apple Juice',
	img: './images/juice/apple-juice.jpg'},
{	name: 'Carrot Juice',
	img: './images/juice/carrot-juice.jpg'},
{	name: 'Grape Juice',
	img: './images/juice/grape-juice.jpg'},
{	name: 'Orange Juice',
	img: './images/juice/Orange-juice.jpg'},
{	name: 'Tomato Jiuce',
	img: './images/juice/tomato-juice.jpg'}
];


var sweetsArray = [ 
{	name: 'Kit-Kat',
	img: './images/candy/kit-kat.jpg'},
{	name: 'M&Ms',
	img: './images/candy/m&ms.jpg'},
{	name: 'Skittles',
	img: './images/candy/skittles.jpg'},
{	name: 'Snickers',
	img: './images/candy/snickers.jpg'},
{	name: 'Twix',
	img: './images/candy/twix.jpg'}
];

//empty array to hold shopping cart items (those) are probably
	//going to be appended to the array with push or
	//maybe appended using an add child method?
var shoppingCart = [];
var categoryCLICKED;

//ACTIONS
//function to make the category text into clickable buttons
	//once the window loads! (apparently this is a thing!?)
window.onload=function(){
    var cerealClick = document.getElementById("cerealsButton");
		cerealClick.addEventListener("click", function () {categoryCLICKED = this.id}, populateItem);
		// cerealClick.addEventListener("click", function () {console.log(categoryCLICKED)});
		var juicesClick = document.getElementById("juicesButton");
		juicesClick.addEventListener("click", function () {categoryCLICKED = this.id});
		// juicesClick.addEventListener("click", function () {console.log(categoryCLICKED)});
		var sweetsClick = document.getElementById("sweetsButton");
		sweetsClick.addEventListener("click", function () {categoryCLICKED = this.id});
		// sweetsClick.addEventListener("click", function () {console.log(categoryCLICKED)});
}

//function to check which button was clicked
//if ____ is clicked, then store that ID in a 
// variable and THEN execute populateItem (___)

//function to populete items when category name is clicked, 
	//depending on category 
	//there's probably a dryer way of doing this...
	//had to make it into a switch, but still getting undefined!

	function populateItem (categoryCLICKED) {
	

	var galleryItems = [];

	switch (categoryCLICKED) {
		case "cerealsButton":
			// galleryItems = cerealsArray;
			console.log('hey-o sanity check-o');
			break;
		case "juicesButton":
			galleryItems = juicesArray;
			break;
		case "sweetsButton":
			galleryItems = sweetsArray;
			break;
		default:
	}
	
	var galleryItemsArray = [];
		for (var i = 0; i < galleryItems.length; i++) {
			
			// galleryItemsArray.push(`<div><img src="${galleryItems[i].img}"><p>${galleryItems[i].name}</p></div>`);

		}
		document.getElementById("gallery").append(galleryItemsArray);
};

//function to put selected item text in a list below in the shopping area
	//to append to list as <p>
function addToBasket (clickedItem) {
		var addedToBasket = document.getElementById("basket");
		addedToBasket.append(`<p>${clickedItem}</p>`);
	}//i think this is going to work, how do i test it?


//making populated items clickable and add them to page
var itemReadyToBeAdded;
function itemToCart() {
	cerealClick.addEventListener("click", populateShoppingCart);
}

function populateShoppingCart () {

}
