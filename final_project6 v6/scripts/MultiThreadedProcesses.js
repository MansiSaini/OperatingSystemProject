function lock () {
	while (!available) 
		; // busy wait
	available = false;
}

function unlock() {
	available = true;
}

var stringSpace = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

function process2CallMTP() {

	for (var i = 0; i < eolMTP.length; i++) {
		if(eolMTP[i] == false) {
			eofMTP = false;
			break;
		}
		eofMTP = true;
	}
	
	if (eofMTP != true) {
		
		threadMTP0();

		threadMTP1();

		threadMTP2();

		threadMTP3();

		threadMTP4();

		threadMTP5();

		threadMTP6();

		threadMTP7();
		
	} else {
		
		document.getElementById("displaydevice").innerHTML  += "<br> Count " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "  Character";
	  
		document.getElementById("displaydevice").innerHTML  += "<br>" + characterCounts[32] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "SPACE";
	  
		for (var i = 33; i < 127; i++) {
			  if (i == 59) {
				  document.getElementById("displaydevice").innerHTML  += "<br>" + characterCounts[i] + stringSpace + 	"&#59;";
			  } else {
				  document.getElementById("displaydevice").innerHTML  += "<br>" + characterCounts[i] + stringSpace + String.fromCharCode(i);
			  }			  
		}	  
		document.getElementById("displaydevice").innerHTML  += "<br>" + characterCounts[127] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "DEL";
	}
	/*
	console.log("1.length " + firstString.length);
	console.log("2.length " + secondString.length);
	console.log("3.length " + thirdString.length);
	console.log("4.length " + fourthString.length);
	console.log("5.length " + fifthString.length);
	console.log("6.length " + sixthString.length);
	console.log("7.length " + seventhString.length);
	console.log("8.length " + eigthString.length);
	*/
}


var firstString = textFile[0];

function threadMTP0() { 
	if(eolMTP[0] != true) 
	{
		if (firstString.length > pcMTP0) 
		{	
			console.log("      Thread 0 is running from Process 8");
			lock();
			characterCounts[firstString.charCodeAt(pcMTP0++)]++;	
			//pcMTP0++;
			unlock();
			console.log("      Thread 0 is waiting  from Process 8");
		} 
		else 
		{
			eolMTP[0] = true;
		}
	} 
}

var secondString = textFile[1];

function threadMTP1() { 
	if(eolMTP[1] != true) 
	{
		if (secondString.length > pcMTP1) 
		{	
			console.log("      Thread 1 is running from Process 8");
			lock();
			characterCounts[secondString.charCodeAt(pcMTP1++)]++;	
			//pcMTP1++;
			unlock();
			console.log("      Thread 1 is waiting  from Process 8");			
		} 
		else 
		{
			eolMTP[1] = true;
		}
	} 
}

var thirdString = textFile[2];

function threadMTP2() { 
	if(eolMTP[2] != true) 
	{
		if (thirdString.length > pcMTP2) 
		{	
			console.log("      Thread 2 is running from Process 8");
			lock();
			characterCounts[thirdString.charCodeAt(pcMTP2++)]++;	
			//pcMTP2++;
			unlock();	
			console.log("      Thread 2 is waiting  from Process 8");
		} 
		else 
		{
			eolMTP[2] = true;
		}
	} 
}

var fourthString = textFile[3];

function threadMTP3() { 
	if(eolMTP[3] != true) 
	{
		if (fourthString.length > pcMTP3) 
		{	
			console.log("      Thread 3 is running from Process 8");
			lock();
			characterCounts[fourthString.charCodeAt(pcMTP3++)]++;	
			//pcMTP3++;
			unlock();
			console.log("      Thread 3 is waiting  from Process 8");
		} 
		else 
		{
			eolMTP[3] = true;
		}
	} 
}

var fifthString = textFile[4];

function threadMTP4() { 
	if(eolMTP[4] != true) 
	{
		if (fifthString.length > pcMTP4) 
		{	
			console.log("      Thread 4 is running from Process 8");
			lock();
			characterCounts[fifthString.charCodeAt(pcMTP4++)]++;	
			//pcMTP4++;
			unlock();	
			console.log("      Thread 4 is waiting  from Process 8");
		} 
		else 
		{
			eolMTP[4] = true;
		}
	}
}

var sixthString = textFile[5];

function threadMTP5() { 
	if(eolMTP[5] != true) 
	{
		if (sixthString.length > pcMTP5) 
		{	
			console.log("      Thread 5 is running from Process 8");
			lock();
			characterCounts[sixthString.charCodeAt(pcMTP5++)]++;	
			//pcMTP5++;
			unlock();	
			console.log("      Thread 5 is waiting  from Process 8");
		} 
		else 
		{
			eolMTP[5] = true;
		}
	}
}

var seventhString = textFile[6];

function threadMTP6() { 
	if(eolMTP[6] != true) 
	{
		if (seventhString.length > pcMTP6) 
		{	
			console.log("      Thread 6 is running from Process 8");
			lock();
			characterCounts[seventhString.charCodeAt(pcMTP6++)]++;	
			//pcMTP6++;
			unlock();	
			console.log("      Thread 6 is waiting  from Process 8");
		} 
		else 
		{
			eolMTP[6] = true;
		}
	}
}

var eigthString = textFile[7];

function threadMTP7() { 
	if(eolMTP[7] != true) 
	{
		if (eigthString.length > pcMTP7) 
		{	
			console.log("      Thread 7 is running from Process 8");
			lock();
			characterCounts[eigthString.charCodeAt(pcMTP7++)]++;	
			//pcMTP7++;
			unlock();	
			console.log("      Thread 7 is waiting  from Process 8");
		} 
		else 
		{
			eolMTP[7] = true;
		}
	}
}