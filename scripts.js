var sudoku = new Array();
var board = new Array(81);


// The different difficulties will be drawn from these arrays. Presets drawn from websudoku.com.

board[0] = new Array(81);
board[0] = [5,0,1,7,4,6,0,9,0,8,0,3,0,5,9,0,7,0,0,0,0,8,0,0,1,0,0,0,0,0,9,8,0,4,0,6,0,0,0,3,0,2,0,0,0,6,0,9,0,1,4,0,0,0,0,0,6,0,0,8,0,0,0,0,9,0,2,7,0,5,0,4,0,1,0,6,9,5,2,0,8];
board[1] = new Array(81);
board[1] = [];
board[2] = new Array(81);
board[2] = [];

function status(text) {
	document.getElementById("status").innerHTML = text;
}

// This function called to automatically solve the board.
function solve() {
	if() {
		status("Board solved");
		inputNumber();
	}
	else {
		status("No Solution");
	}
}