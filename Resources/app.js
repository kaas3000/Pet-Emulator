Ti.include('js/functions.js');
Ti.include('js/homeIcons.js');

//create the win1dow
var win1 = Titanium.UI.createWindow({
	width: Ti.Platform.displayCaps.platformWidth,
	height: Ti.Platform.displayCaps.platformHeight,
	backgroundColor: 'black'
});

// Benodigde variabelen
var pet;
var sick = false;
var dirty = 0;
var hungry = false;
var age = 1;
var imgSkull;
var imgDung;
var intRandom;
var intRandDirty;

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

// Maak de homeicoontjes alvast aan
var homeIcon = Ti.UI.createImageView({
	width: 18,
	height: 18
});

win1.add(homeIcon);


// maak het linkerknopje
var btnLeft = Ti.UI.createButton({
	width: 16,
	height: 16,
	top: background.top + 135,
	left: background.left + 38,
	backgroundImage: 'img/Orange/Button0.gif',
	backgroundSelectedImage: 'img/Orange/Button1.gif'
});

// Voeg een als-erop-geklikt-word-event toe
btnLeft.addEventListener('click', function(e){
	setNextHomeIcon();
});


// maak het middelste knopje
var btnMiddle = Ti.UI.createButton({
	width: 16,
	height: 16,
	top: background.top + 145,
	left: background.left + 64,
	backgroundImage: 'img/Orange/Button0.gif',
	backgroundSelectedImage: 'img/Orange/Button1.gif'
});

// Voeg een als-erop-geklikt-word-event toe
btnMiddle.addEventListener('click', function(e){
	switch(currentIcon) {
		case 1:
		break;
		
		case 2:
		break;
		
		case 3:
			dirty = 1;
			makeDirty();
		break;
		
		case 4:
			removeIllness();
		break;
		
		case 5:
			makeClean();
		break;
		
		case 6:
		break;
		
		case 7:
		break;
		
		default:
	}
});

// maak het rechterknopje
var btnRight = Ti.UI.createButton({
	width: 16,
	height: 16,
	top: background.top + 135,
	left: background.left + 90,
	backgroundImage: 'img/Orange/Button0.gif',
	backgroundSelectedImage: 'img/Orange/Button1.gif'
});

// Voeg een als-erop-geklikt-word-event toe
btnRight.addEventListener('click', function(e){
	setHomeIcon(0);
});


// voeg de knopjes aan win1 toe
win1.add(btnLeft);
win1.add(btnMiddle);
win1.add(btnRight);

// Teken het huisdier
drawPet();

// open win1, zodat de gebruiker ook wat te zien krijgt
win1.open();

// laat random een actie gebeuren, zoals ziek worden of hongerig etc.
intRandom = Math.floor(Math.random()*30000);
(function loopIll(){
	setTimeout((function(){
		makeIll();
	}), intRandom);
}());

// laat het beest steeds viezer worden
intRandDirty = 1000;
(function loopDirty(){
	setInterval((function(){
		dirty += .1;
		if (dirty > 1) {
			makeDirty();
		}
	}), intRandDirty);
}());

// verander elke dag(=86400000ms) het poppetje en de leeftijd
setInterval(function(){
	age++;
	if (age < 9) {
		celebrateBirthday(age); // verandert het poppetje ;)
	}
	
	// geef een notificatie met een felicitatie. dan kun je ook gelijk zijn leeftijd zien ;)
	var notification = Ti.Android.createNotification({
		contentTitle: 'Gefeliciteerd!',
		contentText: 'Je huisdier is jarig. Hij is ' + age + ' jaar geworden.',
		tickerText: 'Het is feest',
		when: new Date().getTime()
	});
	Ti.Android.NotificationManager.notify(2, notification);
}, 10000);

Ti.Gesture.addEventListener('orientationchange', function(e){
	reloadScrn(); // zie js/functions.js
});
