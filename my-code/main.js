var cereals = [
{	cerealName: 'Cheerios',
	img: './images/cereal/cheerios.jpg',},
{	cerealName: 'Captain Crunch',
	img: './images/cereal/crunch.jpg'},
{	cerealName: 'Grape Juice',
	img: './images/cereal/fruit-loops.jpg'},
{	cerealName: 'Choco Puffs',
	img: './images/cereal/puffs.jpg'},
{	cerealName: 'Raisin Bran',
	img: './images/cereal/raisin-bran.jpg'}
];


var juices = [
{	juiceName: 'Apple Juice',
	img: './images/juice/apple-juice.jpg',},
{	juiceName: 'Carrot Juice',
	img: './images/juice/carrot-juice.jpg'},
{	juiceName: 'Grape Juice',
	img: './images/juice/grape-juice.jpg'},
{	juiceName: 'Orange Juice',
	img: './images/juice/Orange-juice.jpg'},
{	juiceName: 'Tomato Jiuce',
	img: './images/juice/tomato-juice.jpg'}
];


var sweets = [ 
{	sweetName: 'Kit-Kat',
	img: './images/candy/kit-kat.jpg',},
{	sweetName: 'M&Ms',
	img: './images/candy/m&ms.jpg'},
{	sweetName: 'Skittles',
	img: './images/candy/skittles.jpg'},
{	sweetName: 'Snickers',
	img: './images/candy/snickers.jpg'},
{	sweetName: 'Twix',
	img: './images/candy/twix.jpg'}
];

//empty array to hold shopping cart items (those) are probably
	//going to be appended to the array with push or
	//maybe appended using an add child method?
var shoppingCart = [];

//ACTIONS
//function to put selected item text in a list below in the shopping area
	//probably to append to list, make them buttons?
//function to show items when category name is clicked, 
	//depending on category