var cerealsArray = [
{	name: 'Cheerios',
	img: './images/cereal/cheerios.jpg',},
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
	img: './images/juice/apple-juice.jpg',},
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
	img: './images/candy/kit-kat.jpg',},
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

//ACTIONS
//function to make the category text into clickable buttons
	//once the window loads! (apparently this is a thing!?)
window.onload=function(){
    var cerealClick = document.getElementById("cerealsButton");
		cerealClick.addEventListener("click", populateItem);
	var juicesClick = document.getElementById("juicesButton");
		juicesClick.addEventListener("click", populateItem);
	var sweetsClick = document.getElementById("sweetsButton");
		sweetsClick.addEventListener("click", populateItem);
}

//function to populete items when category name is clicked, 
	//depending on category 
	//there's probably a dryer way of doing this...(also not working!)
function populateItem (category) {
	var theGallery = document.getElementsByClassName("gallery");
	if (category = "cerealsButton") {
		for (var i = 0; i < cerealsArray.length; i++) {
			theGallery.append(`<img src="${cerealsArray[i].img}"><p>${cerealsArray[i].name}</p>`);
		} }else if (category == "juicesButton") {
		for (var i = 0; i < juicesArray.length; i++) {
			theGallery.append(`<img src="${juicesArray[i].img}"><p>${juicesArray[i].name}</p>`);
		} }else if (category = "sweetsButton") {
		for (var i = 0; i < sweetsArray.length; i++) {
			theGallery.append(`<img src="${sweetsArray[i].img}"><p>${sweetsArray[i].name}</p>`);
		} }
};

//function to put selected item text in a list below in the shopping area
	//to append to list as <p>
function addToBasket (clickedItem) {
	var addedToBasket = document.getElementById("basket");
	addedToBasket.append(`<p>${clickedItem}</p>`);
}

