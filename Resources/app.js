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

// maak het middelste knopje
var btnMiddle = Ti.UI.createImageView({
	width: 16,
	height: 16,
	top: background.top + 145,
	left: background.left + 64,
	image: 'img/Orange/Button0.gif'
});

// maak het rechterknopje
var btnRight = Ti.UI.createImageView({
	width: 16,
	height: 16,
	top: background.top + 135,
	left: background.left + 90,
	image: 'img/Orange/Button0.gif'
});

// voeg de knopjes aan win1 toe
win1.add(btnLeft);
win1.add(btnMiddle);
win1.add(btnRight);

// maak het "schermpje"

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

//finally, open the window to launch the app
win1.open();

Ti.Gesture.addEventListener('orientationchange', function(e){
	// // resize win1
	// win1.width = Ti.Platform.displayCaps.platformWidth;
	// win1.height = Ti.Platform.displayCaps.platformHeight;
// 	
	// // herpositioneer background
	// background.top = (win1.height / 2) - (backgroundHeight / 2);
	// background.left = (win1.width / 2) - (backgroundWidth / 2);
// 	
	// // herpositioneer alle knoppen
	// btnLeft.top = background.top + 135;
	// btnLeft.left = background.left + 38;
// 	
	// btnMiddle.top = background.top + 145;
	// btnMiddle.left = background.left + 64;
// 	
	// btnRight.top = background.top + 135;
	// btnRight.left = background.left + 90;
	reloadScrn();
});
