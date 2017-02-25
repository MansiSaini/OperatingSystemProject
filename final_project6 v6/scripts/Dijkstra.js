var chopstick = [true, true, true, true, true];
var p1 = [false, false];
var p2 = [false, false];
var p3 = [false, false];
var p4 = [false, false];
var p5 = [false, false];
var philosophers = [p1, p2, p3, p4, p5];
var initialT;
var endingT;

function resetDinning(){
	for (var i = 0; i < philosophers.length; i++) {
		philosophers[i][0] = false;
		philosophers[i][1] = false;
		chopstick[i] = true;
	}
}
function diningPhilosophers() {
	
	resetDinning();
	console.log("************************Start********************");
	
	for (var i = 0; i < philosophers.length; i++) {
			console.log("Philosopher " + ( i + 1 ) + " is hungry. ");
	}
	
	randomN = Math.floor((Math.random() * 300) + 10);
	setTimeout("tryGetLeftChopstick(0)", randomN);
	//console.log(" philo1 " + randomN);
	
	randomN = Math.floor((Math.random() * 300) + 10);
	setTimeout("tryGetRightChopstick(0)", randomN);
	//console.log(" philo1 " + randomN);
	//***********************************************************************
	randomN = Math.floor((Math.random() * 300) + 10);
	setTimeout("tryGetLeftChopstick(1)", randomN);
	//console.log(" philo2 " + randomN);
	
	randomN = Math.floor((Math.random() * 300) + 10);
	setTimeout("tryGetRightChopstick(1)", randomN);
	//console.log(" philo2 " + randomN);
	//***********************************************************************	
	randomN = Math.floor((Math.random() * 300) + 10);
	setTimeout("tryGetLeftChopstick(2)", randomN);
	//console.log(" philo3 " + randomN);
	
	randomN = Math.floor((Math.random() * 300) + 10);
	setTimeout("tryGetRightChopstick(2)", randomN);
	//console.log(" philo3 " + randomN);
	//***********************************************************************	
	randomN = Math.floor((Math.random() * 300) + 10);
	setTimeout("tryGetLeftChopstick(3)", randomN);
	//console.log(" philo4 " + randomN);
	
	randomN = Math.floor((Math.random() * 300) + 10);
	setTimeout("tryGetRightChopstick(3)", randomN);
	//console.log(" philo4 " + randomN);
	//***********************************************************************	
	randomN = Math.floor((Math.random() * 300) + 10);
	setTimeout("tryGetLeftChopstick(4)", randomN);
	//console.log(" philo5 " + randomN);
	
	randomN = Math.floor((Math.random() * 300) + 10);
	setTimeout("tryGetRightChopstick(4)", randomN);
	//console.log(" philo5 " + randomN);
	
	setTimeout("eating()", 800);
	
}

function eating() {
	var eatingFlag1 = false;
	
	for (var i = 0; i < philosophers.length; i++) {
		if (philosophers[i][0] == true && philosophers[i][1] == true) {
			callphi(i);
			eatingFlag1 = true;
		}
	}
	
	if (eatingFlag1 == false) {
		console.log(" They reached a deadlock state. ");
		endingT = new Date;
		console.log("Day 1 " + initialT);
		console.log("Day 1 " + endingT);
		document.getElementById("displaydevice").innerHTML  += "<br>The Dijkstra Dinning Philosophers reached a deadlock state.";
		document.getElementById("displaydevice").innerHTML  += "<br>It reached a deadlock state in " + ((endingT - initialT) / 1000) + "sec";
		newLineReset();
	} else {
		//console.log(" re call again! ");
		for (var i = 0; i < philosophers.length; i++) {
			console.log("Philosopher " + ( i + 1 ) + " is thinking. ");
		}
	
		setTimeout("diningPhilosophers()", 1000);
	}
	
	console.log(" philo1 left chopstick: " + (p1[0]? "Yes " : "No ") + " Right chopstick: " + (p1[1]? "Yes " : "No "));
	console.log(" philo2 left chopstick: " + (p2[0]? "Yes " : "No ") + " Right chopstick: " + (p2[1]? "Yes " : "No "));
	console.log(" philo3 left chopstick: " + (p3[0]? "Yes " : "No ") + " Right chopstick: " + (p3[1]? "Yes " : "No "));
	console.log(" philo4 left chopstick: " + (p4[0]? "Yes " : "No ") + " Right chopstick: " + (p4[1]? "Yes " : "No "));
	console.log(" philo5 left chopstick: " + (p5[0]? "Yes " : "No ") + " Right chopstick: " + (p5[1]? "Yes " : "No "));
	
}

//var philo = true;

function callphi(i) {
	
	var randomN;

	var randomCounter = 0;
	
	var philo = true;
	
	var iniT;
	var endT;

	randomN = Math.floor((Math.random() * 1000) + 100);
	randomCounter = randomN;
	
	iniT = new Date;
	
	while (philo) {
		
		endT = new Date;
		
		if (randomCounter > -1)
			randomCounter--;
		
		if ((randomCounter % 200) == 0) {
			console.log("Philosopher " + ( i + 1 ) + " is eating. ");
		}
		
		if ((endT - iniT) == randomN) {
			philo = false;
			console.log("Philosopher " + ( i + 1 ) + " is finished eating.");
			//releaseLeftChopstick(i);
			//releaseRightChopstick(i);
		}	
	}
	// thinking
}

function doneEating(i) {
	philo = false;
	console.log("Philosopher " + ( i + 1 ) + " is finished eating.");
}

function releaseLeftChopstick(i) {
	console.log("Philosopher " + ( i + 1 ) + " release left chopstick.");
	philosophers[i][0] = false;
	chopstick[i] = true;
	return true;
}

function releaseRightChopstick(i) {
	
	console.log("Philosopher " + ( i + 1 ) + " release right chopstick.");
	
	if (i != 0) {
		chopstick[i - 1] = true;
		philosophers[i][1] = false;
		return true;
	} else {
		chopstick[4] = true;
		philosophers[4][1] = false;
		return true;
	}
}

function tryGetLeftChopstick(i) {
	console.log("Philosopher " + ( i + 1 ) + " try to get left chopstick");
	if (chopstick[i]) {
		philosophers[i][0] = true;
		chopstick[i] = false;
		console.log("Philosopher " + ( i + 1 ) + " got the left chopstick");
		return true;
	} else {
		console.log("Philosopher " + ( i + 1 ) + " fail to get the left chopstick");
		return false;
	}
}

function tryGetRightChopstick(i) {
	console.log("Philosopher " + ( i + 1 ) + " try to get right chopstick");
	if (i != 0) {
		if(chopstick[i - 1]) {
			philosophers[i][1] = true;
			chopstick[i - 1] = false;
			console.log("Philosopher " + ( i + 1 ) + " got the right chopstick");
			return true;
		}
	} else {
		if(chopstick[4]) {
			console.log("Philosopher " + ( i + 1 ) + " got the right chopstick");
			philosophers[i][1] = true;
			chopstick[4] = false;
			return true;
		} 
	}
	console.log("Philosopher " + ( i + 1 ) + " fail to get the right chopstick");
	return false;
}
