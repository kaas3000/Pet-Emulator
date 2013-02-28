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
		image: 'img/extra/Angel0.png'
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
		} else {
			animateMove.left = background.left + 74;
		}
		
		pet.animate(animateMove);
	});
}

function makeIll() {
	sick = true;
	imgSkull = Ti.UI.createImageView({
		width: 15,
		height: 15,
		top: pet.top,
		left: background.left + 90,
		image: 'img/extra/Skull.gif'
	});
	win1.add(imgSkull);
}

function removeIllness() {
	sick = false;
	win1.remove(imgSkull);
	imgSkull = null;
}
