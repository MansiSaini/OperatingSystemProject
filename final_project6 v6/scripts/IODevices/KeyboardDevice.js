window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
	getkeyString(e.key);
}
			
var inputString = "";
var keyBDtemp = "";
var keyBDtemp2 = "";
var startLineCounter = 12;
var startLineIndex = 12;
var cDirectory = "";
var cUser = "";
var keyBDflag1 = false;

function getkeyString(e) {
// if (flag == 1)
//     if (key == space)
//        print next index
// else 
	
	if(!ignoreKeys.hasOwnProperty(e)) { // this is for ignore special key
		if (e != "Enter") {
			if(e != "Backspace") {
				
				inputString += e;

				document.getElementById("displaydevice").innerHTML  += e;
				startLineCounter++;
				
			} else {
						
				keyBDtemp = document.getElementById("displaydevice").innerHTML;
				
				if (startLineCounter > 12) {
					inputString = "";
					for (var i = 0; i < keyBDtemp.length - 1; i++) {
						keyBDtemp2 += keyBDtemp[i];
						if (i >= startLineIndex) {
							inputString += keyBDtemp[i];					
						}
					}				
					
					startLineCounter--;			
					document.getElementById("displaydevice").innerHTML  = keyBDtemp2;		
					keyBDtemp2 = "";
				}		
			}
		} else { 

			parseString(inputString);
			
			if (keyBDflag1 == true) {
				newLineReset();
			}
			
			startLineCounter = 12;
			
			inputString = "";
		}
	}
}

function newLineReset() {
	
	document.getElementById("displaydevice").innerHTML  += "<br> C:\\csc415" + cUser + cDirectory + "> ";
			
	startLineIndex = document.getElementById("displaydevice").innerHTML.length;
	//console.log("length: " + currentDir.length);
}