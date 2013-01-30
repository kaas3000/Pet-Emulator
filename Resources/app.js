Ti.include('js/functions.js');

//create the win1dow
var win1 = Titanium.UI.createWindow({
	width: Ti.Platform.displayCaps.platformWidth,
	height: Ti.Platform.displayCaps.platformHeight,
	backgroundColor: 'black',
	title: 'Bier is lekker!'
});

// het plaatje van de tamagotchi
var backgroundWidth = 140;
var backgroundHeight = 170;

var background = Titanium.UI.createImageView({
	width: backgroundWidth,
	height: backgroundHeight,
	image: 'img/Orange/Front.gif',
	top: (win1.height / 2) - (backgroundHeight / 2),
	// top: 0,
	left: (win1.width / 2) - (backgroundWidth / 2),
});

// voeg het plaatje gelijk aan het scherm toe
win1.add(background);


// maak het linkerknopje
var btnLeft = Ti.UI.createImageView({
	width: 16,
	height: 16,
	top: background.top + 135,
	left: background.left + 38,
	image: 'img/Orange/Button0.gif'
});

btnLeft.addEventListener('touchstart', function(e){
	btnLeft.image = 'img/Orange/Button1.gif';
});
btnLeft.addEventListener('touchend', function(e){
	btnLeft.image = 'img/Orange/Button0.gif';
});

// maak het middelste knopje
var btnMiddle = Ti.UI.createImageView({
	width: 16,
	height: 16,
	top: background.top + 145,
	left: background.left + 64,
	image: 'img/Orange/Button0.gif'
});

btnMiddle.addEventListener('touchstart', function(e){
	btnMiddle.image = 'img/Orange/Button1.gif';
});
btnMiddle.addEventListener('touchend', function(e){
	btnMiddle.image = 'img/Orange/Button0.gif';
});

// maak het rechterknopje
var btnRight = Ti.UI.createImageView({
	width: 16,
	height: 16,
	top: background.top + 135,
	left: background.left + 90,
	image: 'img/Orange/Button0.gif'
});

btnRightr.addEventListener('touchstart', function(e){
	btnRight.image = 'img/Orange/Button1.gif';
});
btnRight.addEventListener('touchend', function(e){
	btnRight.image = 'img/Orange/Button0.gif';
});

// voeg de knopjes aan win1 toe
win1.add(btnLeft);
win1.add(btnMiddle);
win1.add(btnRight);

// maak het "schermpje" van de tamagotchi

/** 
 * Let op: het schermpje hoeft niet verder
 * gepositioneerd te worden, omdat het altijd
 * in het midden zit, waar Titanium Studio
 * alles standaart plaatst.
 */

var screen = Ti.UI.createImageView({
	image: 'img/extra/TamScr.gif'
});

// voeg het schermpje toe
win1.add(screen);

// open win1, zodat de gebruiker ook wat te zien krijgt
win1.open();

Ti.Gesture.addEventListener('orientationchange', function(e){
	reloadScrn(); // zie js/functions.js
});
