var sudoku = new Array();
var test_pos = new Array(81);
var board = new Array(81);
var val_col = new Array(9);
var limiters = new Array(81); //


for(var x = 0; x < 81; x++) {
	limiters[x] = new Array(6);
}

// The different difficulties will be drawn from these arrays. Presets drawn from websudoku.com.

board[0] = new Array(81);
board[0] = [5,0,1,7,4,6,0,9,0,8,0,3,0,5,9,0,7,0,0,0,0,8,0,0,1,0,0,0,0,0,9,8,0,4,0,6,0,0,0,3,0,2,0,0,0,6,0,9,0,1,4,0,0,0,0,0,6,0,0,8,0,0,0,0,9,0,2,7,0,5,0,4,0,1,0,6,9,5,2,0,8];
board[1] = new Array(81);
board[1] = [0,3,0,0,4,0,2,0,0,8,7,0,9,0,1,0,0,6,0,0,6,0,0,0,0,0,0,0,1,0,6,0,0,0,0,8,4,0,9,0,0,0,6,0,2,2,0,0,0,0,8,0,1,0,0,0,0,0,0,0,3,0,0,3,0,0,1,0,2,0,6,4,0,0,4,0,3,0,0,5,0];
board[2] = new Array(81);
board[2] = [0,0,0,0,0,0,0,6,0,0,0,0,0,0,7,8,1,0,0,0,2,5,8,0,0,4,3,2,0,0,0,0,3,0,5,6,0,0,0,0,4,0,0,0,0,5,4,0,2,0,0,0,0,1,8,7,0,0,5,4,3,0,0,0,2,1,3,0,0,0,0,0,0,5,0,0,0,0,0,0,0];

function status(text) {
	document.getElementById("status").innerHTML = text;
}

function makeBoard() {
	var x;
	for(var r = 0; r < 9; r++)
		for(var c = 0; c < 9; c++) {
			x = 0;
			x = document.getElementById(r+"-"+c).value;
			if(!(x >= 0 && x <= 9)) {
				status("Invalid entry in Row:"+(r+1)+" Col:" + (c+1));
				return false;
			}
			if(x == "") x = 0;
			sudoku[r*9+c] = Number(x);
		}
	return true;
}

function rules(pos) {
	var size = new Array(10);
	for(var p = 0; p < 81; p++) {
		for(var x = 0; x < 11; x++)
			limiters[p][x] = 0;
		if(pos[p] >= 1 && pos[p] <= 9) {
			limiters[p][0] = 1;
			limiters[p][1] = pos[p];
		}
		else {
			limiters[p][0] = 0;
			limiters[p][1] = 2;
			var r = Math.floor(p / 9);
			var c = p % 9;

			for(var x = 1; x <= 9; x++)
				size[x] = x;
			for(var x = 0; x < 9; x++)
				if(pos[r * 9 + x] > 0)
					size[Number(pos[r*9+x])] = 0;
			for(var x = 0; x < 9; x++)
				if(pos[x * 9 + c] > 0)
					size[pos[x*9+c]] = 0;
			var i = 2;
			for(var x = 1; x <= 9; x++)
				if(size[x] > 0)
					limiters[p][i++] = x;
		}
	}
}

function validate(pos) {
	var r_sum;
	var c_sum;
	for(var c = 0; c < 9; c++)
		val_col[c] = 0;
	for(var r = 0; r < 9; r++) {
		r_sum = 0;
		for(var c = 0; c < 9; c++) {
			r_sum += pos[r*9+c];
			val_col[c] += pos[r*9+c];
		}
		if(r_sum != 45)
			return -2048;
	}
	for(var c = 0; c < 9; c++)
		if(val_col[c] != 45)
			return -(c+1);
	for(var b_r = 0; b_r < 3; b_r++) {
		for(var b_c = 0; b_c < 3; b_c++) {
			var b_sum = 0;
			for(var r = 0; r < 3; r++)
				for(var c = 0; c < 3; c++)
					b_sum += pos[ (b_r*3+r)*9 + (b_c*3+c) ];
			if(b_sum != 45)
				return -1024;
		}
	}
	return 1;
}

function check(pos, s, val) {
	var r = Math.floor(s / 9);
	var c = s % 9;
	for(x = 0; x < c; x++)
		if(pos[r * 9 + x] == val)
			return false;
	for(x = 0; x < r; x++)
		if(pos[x * 9 + c] == val)
			return false;

	var b_r = Math.floor(r / 3);
	var b_c = Math.floor(c / 3);
	for(var x = 0; x < 3; x++)
		for(var y = 0; y < 3; y++) {
			var a = (b_r*3+x)*9 + (b_c*3+y);
			if(a >= s)
				return true;
			if(pos[a] == val)
				return false;
		}
	return true;
}

function solve_r(s) {
	if(s == 81) {
		if(validate(test_pos) == 1)
			return true;
		return false;
	}
	if(limiters[s][0]) {
		test_pos[s] = limiters[s][1];
		return solve_r(s+1);
	}
	for(var x=2; x < 11; x++) {
		if(limiters[s][x] == 0)
			return false;
		if(check(test_pos, s, limiters[s][x])) {
			test_pos[s] = limiters[s][x];
			if(solve_r(s+1)==true)
				return true;
		}
	}
	return false;
}


// Enter presets into board.

function inputNumber(pos, end) {
	for(var x = 0; x < end; x++) {
		var r = Math.floor(x / 9);
		var c = x % 9;
		if(pos[x] == 0) 
			document.getElementById(r+"-"+c).value = "";
		else
			document.getElementById(r+"-"+c).value = pos[x];
	}
}


// This function called to automatically solve the board.
function solve() {

	status("Solving Sudoku");
	if(!makeBoard())
		return;
	rules(sudoku);
	var stat = solve_r(0);
	if(stat) {
		status("Sudoku puzzle solved");
		inputNumber(test_pos, 81);
	}
	else {
		status("No Solution");
	}
}