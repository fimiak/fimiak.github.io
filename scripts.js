var sudoku = new Array();
var board = new Array(81);
var limiters = new Array(81); //


for(var i = 0; i < 81; i++) {
	limiters[i] = new Array(6);
}

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

function makeBoard() {
	var x;
	for(var r = 0; r < 9; r++)
		for(var c = 0; c < 9; c++) {
			x = 0;
			x = document.getElementById(+r+c).value;
			if(!(x >= 0 && x <= 9)) {
				status("Invalid entry in Row:"+(r+1)+" Col:" + (c+1));
				return false;
			}
			if(x == "") x = 0;
			board[r*9+c] = Number(x);
		}
	return true;
}

function rules(pos) {
	var size = new Array(10);
	for(var p = 0; p < 81; p++) {
		for(var i = 0; i < 11; i++)
			limiters[p][i] = 0;
		if(pos[p] >= 1 && pos[p] <= 9) {
			limiters[p][0] = 1;
			limiters[p][1] = pos[p];
		}
	}
}

function inputNumber(pos, end) {
	for(var i = 0; i < end; i++) {
		var r = Math.floor(i / 9);
		var c = i % 9;
		if(pos[p] == 0) 
			document.getElementById(+r+c).value = "";
		else
			document.getElementById(+r+c).value = pos[p];
	}
}



// This function called to automatically solve the board.
function solve() {
	var stat = solve_r(0);
	status("Solving Sudoku");
	if(stat) {
		status("Board solved");
		inputNumber(test_pos, 81);
	}
	else {
		status("No Solution");
	}
}