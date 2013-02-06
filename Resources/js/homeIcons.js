var currentIcon = 0;

function setHomeIcon(iconNumber) {
	switch(iconNumber) {
		case 1:
		homeIcon.image = 'img/extra/TamIcon0.gif';
		homeIcon.top =  background.top + 50;
		homeIcon.left = background.left + 35;
		homeIcon.visible = true;
		currentIcon = 1;
		break;
		
		case 2:
		homeIcon.image = 'img/extra/TamIcon1.gif';
		homeIcon.top =  background.top + 50;
		homeIcon.left = background.left + 52;
		currentIcon = 2;
		break;
		
		case 3:
		homeIcon.image = 'img/extra/TamIcon2.gif';
		homeIcon.top =  background.top + 50;
		homeIcon.left = background.left + 70;
		currentIcon = 3;
		break;
		
		case 4:
		homeIcon.image = 'img/extra/TamIcon3.gif';
		homeIcon.top =  background.top + 50;
		homeIcon.left = background.left + 90;
		currentIcon = 4;
		break;
		
		case 5:
		homeIcon.image = 'img/extra/TamIcon4.gif';
		homeIcon.top =  background.top + 102;
		homeIcon.left = background.left + 34;
		currentIcon = 5;
		break;
		
		case 6:
		homeIcon.image = 'img/extra/TamIcon5.gif';
		homeIcon.top =  background.top + 102;
		homeIcon.left = background.left + 51;
		currentIcon = 6;
		break;
		
		case 7:
		homeIcon.image = 'img/extra/TamIcon6.gif';
		homeIcon.top =  background.top + 102;
		homeIcon.left = background.left + 70;
		currentIcon = 7;
		break;
		
		default:
		homeIcon.visible = false;
		currentIcon = 0;
	}
}

function setNextHomeIcon () {
	setHomeIcon((currentIcon == 7) ? 1 : currentIcon + 1);
}
