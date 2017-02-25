var queueProcess = [-1];
const MAX_SPACE = 100; // 100 megabytes of space = 100,000 kilobytes
var available_Space = 100;


//var length;
// Initialize the start index of all processes
	var startPositionP1 = 0;  	// bank
	var startPositionP2 = 0;	// contact
	var startPositionP3 = 0;	// security
	var startPositionP4 = 0;	// route
	var startPositionP5 = 0;	// vector
	var startPositionP6 = 0;	// stat
	var startPositionP7 = 0;	// create own
	
function runProcess(processCase) {
	
	switch(processCase) {
		case -1:
		//If queue is -1 (empty) do nothing.
		break;
		
		case 0: // Process 1: Bank Book Calculator by Jagat
		
			if ((getState(0)) != "Completed" && (getState(0)) != "stop")
			{
				changeState(0);
				startPositionP1 = process1(startPositionP1);
				
				if (startPositionP1 == -1) {
					CompleteProcess(0);
					startPositionP1 = 0;
					//document.getElementById("p1").value = "The account balance is " + acctBal;
					//console.log("The account balance is " + acctBal);
					document.getElementById("displaydevice").innerHTML  += "<br>The account balance is " + acctBal;
					
					newLineReset();
				}	
			}
		break;
		
		case 1: // Process 2: Contact Manager by Mansi
		
			if ((getState(1)) != "Completed" && (getState(1)) != "stop")
			{
				changeState(1);
				startPositionP2 = process2(startPositionP2);
				if (startPositionP2 == false) {
					CompleteProcess(1);
					startPositionP2 = 0;
					//document.getElementById("p2").value = "Name doesn't found";
					//console.log("Name doesn't found");
					document.getElementById("displaydevice").innerHTML  += "<br>Name doesn't found";
					newLineReset();
				}	
				if (startPositionP2 == true) {
					CompleteProcess(1);
					startPositionP2 = 0;
					//document.getElementById("p2").value = "Name " + testName + " is found";
					//console.log("Name " + testName + " is found");
					document.getElementById("displaydevice").innerHTML  += "<br>Name " + testName + " is found";
					newLineReset();
				}	
			}		
		break;
		
		case 2: // Process 3: Update a security file by Yongcai Huang
		
			if ((getState(2)) != "Completed" && (getState(2)) != "stop") 
			{
				changeState(2);
				startPositionP3 = process3(startPositionP3);
				if (startPositionP3 == "Element not found") {	
					CompleteProcess(2);
					startPositionP3 = 0;
					//document.getElementById("p3").value = "The username doesn't found";
					//console.log("The username doesn't found");
					document.getElementById("displaydevice").innerHTML  += "<br>The username doesn't found";
					newLineReset();
				}
				if (startPositionP3 == "successful") {
					CompleteProcess(2);
					startPositionP3 = 0;
					//document.getElementById("p3").value = "It is successful changed the username and password";
					//console.log("It is successful changed the username and password");
					document.getElementById("displaydevice").innerHTML  += "<br>It is successful changed the username and password";
					newLineReset();
				}
			}		
		break;
		
		case 3: // Process 4: Find Routes by Mayank
			
		break;
		
		case 4: // Process 5: Caculate Vector by Tony
			if ((getState(4)) != "Completed" && (getState(4)) != "stop")
			{
				changeState(4);
				startPositionP5 = process5(startPositionP5);
				
				if (startPositionP5 == -1) {
					CompleteProcess(4);
					startPositionP5 = 0;
					//document.getElementById("p5").value = "The final x vector is " + totalNumberX;
					//document.getElementById("p5").value += "\n" + "The final y vector is " + totalNumberY;
					//console.log("The final x vector is " + totalNumberX);
					//console.log("The final y vector is " + totalNumberY);
					document.getElementById("displaydevice").innerHTML  += "<br>The final x vector is " + totalNumberX;
					document.getElementById("displaydevice").innerHTML  += "<br>The final y vector is " + totalNumberY;
					newLineReset();
				}	
			}
		break;
		
		case 5: // Process 6: Calculate Stat by Nimitha
			if ((getState(5)) != "Completed" && (getState(5)) != "stop")
			{
				changeState(5);
				startPositionP6 = process6(startPositionP6);
				if (startPositionP6 == -1) {
					CompleteProcess(5);
					startPositionP6 = 0;
					/*
					document.getElementById("p6").value = "The SO2 average collected from " + getStatsLength()
									+ " different cities in the US is: " + statsAvg;
					*/
					//console.log("The SO2 average collected from " + getStatsLength() + " different cities in the US is: " + statsAvg);
					document.getElementById("displaydevice").innerHTML  += "<br>The SO2 average collected from " + getStatsLength() + " different cities in the US is: " + statsAvg;
					newLineReset();
				}	
			}
		break;
		
		case 6: // Process 7: Other process by Asaf
		
			if ((getState(6)) != "Completed" && (getState(6)) != "stop")
			{
				changeState(6);
				startPositionP7 = process7(startPositionP7);
				if (startPositionP7 == false) {
					CompleteProcess(6);
					startPositionP7 = 0;
					//document.getElementById("p7").value = "User not found";		
					//console.log("User not found");	
					document.getElementById("displaydevice").innerHTML  += "<br>User not found";	
					newLineReset();					
				}	
				if (startPositionP7 == true) {
					CompleteProcess(6);
					startPositionP7 = 0;
					//document.getElementById("p7").value = name + "'s phone number is " + phoneNumber;
					//console.log(name + "'s phone number is " + phoneNumber);
					document.getElementById("displaydevice").innerHTML  += "<br>" + name + "'s phone number is " + phoneNumber;
					newLineReset();
				}	
			}
		break;
		
		case 7:
			if ((getState(7)) != "Completed" && (getState(7)) != "stop")
			{
				changeState(7);
				
				process2CallMTP();
				
				if (eofMTP == true) {
					CompleteProcess(7);
		
					newLineReset();					
				}	
			}
		break;
		/*
		case 8:
			if ((getState(8)) != "Completed" && (getState(8)) != "stop")
			{
				changeState(8);
				
				//process2CallMTP();
				copyOver(5);
				
				if (eofMTP == true) {
					CompleteProcess(8);
		
					newLineReset();					
				}	
			}
		break;
	*/
		default: //Error
		break;
	}
}

function changeState(position) {
	for (var i = 0; i < queueState.length; i++) {
		if (getState(i) == "Running") {
			setState(i, "Waiting");
			console.log("Process " + (i + 1) + " State: " + getState(i));
			break;
		}
	}
	setState(position, "Running");
	console.log("Process " + (position + 1) + " State: " + getState(position));
}

function CompleteProcess(position){
	setState(position, "Completed");
	console.log("Process " + (position + 1) + " State: " + getState(position));
}

function addProcessToQueueProcess(position) {
	if (queueProcess[0] == -1) {
		queueProcess.shift();
	}
	queueProcess.push(position);
}

function checkQueueProcess() {
	if (queueProcess[0] != -1) {
		runProcess(queueProcess.shift());
	}
	
	if (queueProcess.length == 0) {
		queueProcess.push(-1);
	}
}

//***********************************************************************
// Handleing commmand start from here

function commandCall(input) {
	
	switch(input[0]) {
		
		case 'ls':
			ls();			
		break;
		
		case 'more':
			more(input[1]);
		break;
		
		case 'cat':
			cat(input[1]);
		break;
		
		case 'clear':
			clear();
		break;
		
		case 'ps':
			ps();
		break;
		
		case 'kill':
			kill(input[1]);
		break;

		case 'copy':
			copy(input);
		break;
		
		case 'delete':
			delete2(input[1]);
		break;
			
		case 'man':
			man(input);
		break;
		
		case 'dir':
                dir();
        break;
		
		case 'cd':
			cd(input);
		break;
		
		case 'copyOver.js':
			copyOver(5);
		break;
	
		case 'checkfile':
			checkFile(input[1]);
		break;

		case 'printfiles':
			printFiles();
		break;
		
		case 'showUser':
			showAllUser(); 
		break;
		
		case 'newuser':
			addUser(input);
		break;
	
		case 'changepw':
			changePassword(input);
		break;
		
		case 'deleteuser':
			deleteUser(input);
		break;
	
		case 'chmod':
        	chmod(input);
        break;
			
		case 'test.js':
				testcase();
        break;			  
		
		default: // Error
		
		break;
	}
}
// Handleing commmand end here
//***********************************************************************
// Handleing processes start from here

function processesCall(input) {
	
	switch(input[0]) {
	
		case 'bankAccount.js': // 0
			setState(0, "Ready");
			psList.push(psHashMap[0]);
		break;
		
		case 'contactManager.js': // 1
			setState(1, "Ready");
			psList.push(psHashMap[1]);
		break;
		
		case 'securityFile.js': // 2
			setState(2, "Ready");
			psList.push(psHashMap[2]);
		break;
		/*
		case 'findRoutes.js': // 3
			setState(3, "Ready");
			psList.push(psHashMap[3]);
		break;
		*/
		
		case 'calculateVectors.js': // 4
			setState(4, "Ready");
			psList.push(psHashMap[4]);
		break;
		
		case 'calculateStats.js': // 5
			setState(5, "Ready");
			psList.push(psHashMap[5]);
		break;
		
		case 'phoneBook.js': // 6
			setState(6, "Ready");
			psList.push(psHashMap[6]);
		break;
		
		case 'characterCounter.js':
			//testcase();
			//foo();
			setState(7, "Ready");
			psList.push(psHashMap[7]);
		break;
		case 'dijkstra.js':
			initialT = new Date;
			diningPhilosophers();
		break;
		/*
		case 'test.js':
			//testcase();
			//copyOver(5);
			initd();
		break;
		*/
		default: // Error
			
		break;
	
	}
}
// Handleing processes end here
//***********************************************************************

// Process 2: Contact Manager by Mansi
function getContact(){
   var mycontact = getContacts();
   return mycontact;
}

function getContactLen(){
  var len = getContactLngth();
  return len;
}
/* End of Mansi's block */

// Process 3: Update a security file by Yongcai Huang
function getUsernameList() {
	var userlist = getUsernames();
	return userlist;
}

function getPasswordList() {
	var passwordlist = getPasswords();
	return passwordlist;
}

function getUsernameAt(pos) {
	var user = getUsernameAtPos(pos);
	return user;
}

function getPasswordAt(pos) {
	var pass = getPasswordAtPos(pos);
	return pass;
}

function getNumbOfAccounts() {
	return getNumberOfAccount();
}

function setUserAndPass(new_name, new_password, position){
	setUsernameAndPasswrod(new_name, new_password, position);
}

// ******** Yongcai Huang Block END here ***************

/* Nimitha's block*/
function getStatistics(statsPos) {
  var myStats = getStats(statsPos);
  return myStats;
}

function getStatsLength(){
  var len = getStatsLen();
  return len;
}

/* End of Nimitha's block */

/* Asaf's block*/
function getNameListLength(){
  var len = getNameLength();
  return len;
}
/* End of Asaf's block */


//*********************************************************************

function testcase() {
	console.log("Hello");
	console.log("Get the i value of the list" + arrayOfUsers[0]);
	console.log("get the first element of the list, in this case username: " + arrayOfUsers[0][0]);
	console.log("get the first element of the list, in this case passwork: " + arrayOfUsers[0][1]);
}
