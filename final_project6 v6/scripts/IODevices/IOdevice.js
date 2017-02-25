var queueState = [
"stop",
"stop",
"stop",
"stop",
"stop",
"stop",
"stop",
"stop"
];

function checkState() {

	for (var i = 0; i < queueState.length; i++) {
		if(queueState[i] == "Ready" || queueState[i] == "Running") {
			addProcessToQueueProcess(i);
		}
	}
}

function respondIO() {
	for (var i = 0; i < queueState.length; i++) {
		if(queueState[i] == "Waiting") {
			queueState[i] = "Ready";
		}
	}
}

function getState(position){
	return queueState[position];
}

function setState(position, new_state){
	queueState[position] = new_state;
}

// ***************************************************************************
