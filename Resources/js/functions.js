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
}
