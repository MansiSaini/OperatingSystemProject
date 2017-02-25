function initd() {	
	showOS();
	loadingOS();
}

function showOS() {
document.getElementById('displaydevice').innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "<img src='Sources/OS.png' />";
}

var loadindex = 0;
var loadingDevice = ["IO device", "CLI device", "keyboard Device", "Space Manage Device Driver", "Data", "OS"];
var initdtemp = "";
var initdtemp2 = "";

function loadingOS() {
	
	var loadingCounter = 0;
	
	document.getElementById('displaydevice').innerHTML += "<br>Loading " + loadingDevice[loadindex] + ": ";
	
	initdtemp = document.getElementById('displaydevice').innerHTML;
	
	document.getElementById('displaydevice').innerHTML += "<br>";
	
	initdtemp2 = document.getElementById('displaydevice').innerHTML;
	
	for (var i = 0; i < 100; i++) {

		randomN = Math.floor((Math.random() * 3000) + 50);
		loadingCounter += randomN;
		setTimeout("loading()", randomN);
		
	}

	setTimeout("loadingCompleted()", loadingCounter / 45);
	
	if (loadindex < loadingDevice.length - 1) {		
		setTimeout("loadingOS()", loadingCounter / 45);
	}
}

var per = "";

function loading() {
	per += "|";	
	document.getElementById('displaydevice').innerHTML = initdtemp2;
	document.getElementById('displaydevice').innerHTML += per + " " + per.length + "%";
}

function loadingCompleted() {
	
	document.getElementById('displaydevice').innerHTML = initdtemp + " COMPLETED";
	loadindex++;
	per = "";
	
	if (loadindex == loadingDevice.length) {
		loadindex = 0;
		loadingCounter = 0;
		document.getElementById('displaydevice').innerHTML = ""
		login();
	}
}

 initd();
 login();

/*
IOdevice
CLI device
keyboaradDevice
SpaceManageDeviceDriver
Data
OS
*/

