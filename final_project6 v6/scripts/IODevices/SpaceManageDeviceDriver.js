function checkSpace(space_needed) {	
	if ((available_Space - space_needed) >= 0) {
		return true;
	} else {

		return false;
	}
}

function releaseSpace(releaseS) {
	if ((releaseS + available_Space) <= MAX_SPACE) {
		available_Space = available_Space + releaseS;
		console.log ("   Available Space after release: " + available_Space);
	} else {
		console.log("   ERROR!! Space Overflow");
	}
}

function spaceRequest(space_needed) {
	if (checkSpace(space_needed)) {
		available_Space = available_Space - space_needed;
		console.log ("   Available Space after request : " + available_Space);
		return true;
	} else {
		console.log("   ERROR!! The OS doesn't have enough space.");
		return false;
	}
}