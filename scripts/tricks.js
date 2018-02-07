document.getElementById("trickGenerator").addEventListener("click", generateTricks);

	function generateTricks() {
		const tricks = ["Kickflip", "Heelflip", "360 Flip", "Hardflip", "Varial Heelflip", "Pop Shove It", "360 Shove It", "Backside Flip", "Frontside Flip", "Backside Bigspin","Frontside Bigspin","Laser Flip","Backside 180","Frontside 180","Backside 360","Frontside 360","Frontside Half Cab","Half Cab","Fakie Bigspin","Frontside Half Cab Flip","Half Cab Flip","Nollie","Nollie Frontside 180","Nollie Backside 180","Nollie Backside Flip","Nollie Frontside Flip","Nollie Heelfllip","Nollie Backside Heelflip","Nollie Frontside Heelflip","Nollie Backside Bigspin","Nollie Big Heel","Nollie Cab","Nollie Backside 360","Fakie Bigspin","Fakie Big Flip","Full Cab","Cab Flip","Switch Flip","Switch Heelflip","Switch 360 Flip","Switch Hardflip","Switch Varial Heelflip","Switch Backside Flip","Switch Frontside Flip","Switch Backside Bigspin","Switch Frontside Bigspin","Switch Backside 180","Switch Frontside 180","Switch Big Flip","Switch Backside Heelflip","Switch Frontside Heelflip","Backside Heelflip","Frontside Heelflip"];

	var tricksRender = document.getElementById('tricks-container');

	var generatedTrick = tricks[Math.floor(Math.random() * tricks.length)];

	var trickLabel = document.getElementById('trick-label');

	trickLabel.innerHTML = generatedTrick; 

	document.getElementById('tricks-container').style.visibility = 'visible';
	}

	document.getElementById("clear").addEventListener('click', clearTrick);

	function clearTrick() {
		document.getElementById('tricks-container').style.visibility = 'hidden';
	}