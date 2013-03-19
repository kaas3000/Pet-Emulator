function reloadScrn() {
	// resize win1
	win1.width = Ti.Platform.displayCaps.platformWidth;
	win1.height = Ti.Platform.displayCaps.platformHeight;
	
	// herpositioneer background
	background.top = (win1.height / 2) - (backgroundHeight / 2);
	background.left = (win1.width / 2) - (backgroundWidth / 2);
	
	// herpositioneer alle knoppen
	btnLeft.top = background.top + 135;
	btnLeft.left = background.left + 38;
	
	btnMiddle.top = background.top + 145;
	btnMiddle.left = background.left + 64;
	
	btnRight.top = background.top + 135;
	btnRight.left = background.left + 90;
	
	drawPet();
	
	imgSkull.top = pet.top;
	imgSkull.left = background.left + 90;
}

function drawPet() {
	// just in case...
	win1.remove(pet);
	
	pet = Ti.UI.createImageView({
		width: 32,
		height: 32,
		top: background.top + 70,
		left: background.left + 35,
		image: 'img/android/android1.png'
	});
	
	win1.add(pet);
	
	var animateMove = Ti.UI.createAnimation({
		duration: 3000,
		left: 40,
		autoreverse: true
	});
	
	pet.animate(animateMove);
	
	animateMove.addEventListener('complete', function(e){
		if (sick == true){
			animateMove.left = background.left + 59;
			win1.add(imgSkull);
		} else {
			animateMove.left = background.left + 74;
		}
		
		pet.animate(animateMove);
	});
}

function makeIll() {
	sick = true;
	intRandom = Math.floor(Math.random()*30000);
	
	// voeg het "zieke" plaatje toe
	imgSkull = Ti.UI.createImageView({
		width: 15,
		height: 15,
		top: pet.top,
		left: background.left + 90,
		image: 'img/extra/Skull.gif'
	});
	
	// zorg voor de notificatie
	var notification = Ti.Android.createNotification({
		contentTitle: 'Je huisdier is ziek!',
		contentText: 'Ga snel naar tamagotchi toe en maak hem beter',
		tickerText: 'Je huisdier heeft je hulp nodig, en snel!',
		ledARGB: 1,
		when: new Date().getTime() + intRandom
	});
	Ti.Android.NotificationManager.notify(1, notification);
	
	setTimeout((function(){
		makeIll();
	}), intRandom);
}

function removeIllness() {
	sick = false;
	win1.remove(imgSkull);
	imgSkull = null;
}

function celebrateBirthday (age) {
  switch (age) {
  	case 2:
  		pet.image = 'img/android/android2.png';
	break;
	
	case 3:
		pet.image = 'img/android/android3.png';
	break;
	
	case 4:
		pet.image = 'img/android/android4.png';
	break;
	
	case 5:
		pet.image = 'img/android/android5.png';
	break;
	
	case 6:
		pet.image = 'img/android/android6.png';
	break;
	
	case 7:
		pet.image = 'img/android/android7.png';
	break;
	
	case 8:
		pet.image = 'img/android/android8.png';
	break;
	
	default:
		pet.image = 'img/android/android1.png';
  }
}