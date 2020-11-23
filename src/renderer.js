let XO = ['X', 'O'];
let i = 0;
let chosen;
let mode;
let phrase2 = ['Игрок1 ходит', 'Игрок2 ходит'];
let phrase1 = ['Ваш ход', 'Ход противника'];
let field = ['', '', '', '', '', '', '', '', ''];

function start() {
	document.getElementById('1').style.display="none";
	document.getElementById('2').style.display="block";
}

function choose(j) {
	document.getElementById('2').style.display='none';
	if (j == 1) {
		mode = 1;
		document.getElementById('3').style.display='block';
	}
	if (j == 2) {
		mode = 2;
		showField();
		document.getElementById('5').innerHTML = phrase2[0];
	}
	
}

function chooseXO(j) {
	document.getElementById('3').style.display='none';
	showField();
	if (j == "X") { chosen = 'X'; document.getElementById('5').innerHTML = phrase1[0];}
	if (j == "O") { chosen = 'O'; document.getElementById('5').innerHTML = phrase1[1]; setTimeout(computerPlay, 1000);}
}

function getPlace(k) {
	let j = XO[(k+1)%2];
	if (field[0] == j && field[1] == j && field[2] == '') return 2;
	if (field[0] == j && field[2] == j && field[1] == '') return 1;
	if (field[1] == j && field[2] == j && field[0] == '') return 0;

	if (field[0] == j && field[3] == j && field[6] == '') return 6;
	if (field[0] == j && field[6] == j && field[3] == '') return 3;
	if (field[3] == j && field[6] == j && field[0] == '') return 0;

	if (field[0] == j && field[4] == j && field[8] == '') return 8;
	if (field[0] == j && field[8] == j && field[4] == '') return 4;
	if (field[4] == j && field[8] == j && field[0] == '') return 0;
//////////////////////////////////////////////////////////////////////////
	if (field[1] == j && field[4] == j && field[7] == '') return 7;
	if (field[1] == j && field[7] == j && field[4] == '') return 4;
	if (field[4] == j && field[7] == j && field[1] == '') return 1;
//////////////////////////////////////////////////////////////////////////
	if (field[2] == j && field[5] == j && field[8] == '') return 8;
	if (field[2] == j && field[8] == j && field[5] == '') return 5;
	if (field[5] == j && field[8] == j && field[2] == '') return 2;

	if (field[2] == j && field[4] == j && field[6] == '') return 6;
	if (field[2] == j && field[6] == j && field[4] == '') return 4;
	if (field[4] == j && field[6] == j && field[2] == '') return 2;
//////////////////////////////////////////////////////////////////////////
	if (field[3] == j && field[4] == j && field[5] == '') return 5;
	if (field[3] == j && field[5] == j && field[4] == '') return 4;
	if (field[4] == j && field[5] == j && field[3] == '') return 3;
/////////////////////////////////////////////////////////////////////////
	if (field[6] == j && field[7] == j && field[8] == '') return 8;
	if (field[6] == j && field[8] == j && field[7] == '') return 7;
	if (field[7] == j && field[8] == j && field[6] == '') return 6;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
	j = XO[k];
	if (field[0] == j && field[1] == j && field[2] == '') return 2;
	if (field[0] == j && field[2] == j && field[1] == '') return 1;
	if (field[1] == j && field[2] == j && field[0] == '') return 0;

	if (field[0] == j && field[3] == j && field[6] == '') return 6;
	if (field[0] == j && field[6] == j && field[3] == '') return 3;
	if (field[3] == j && field[6] == j && field[0] == '') return 0;

	if (field[0] == j && field[4] == j && field[8] == '') return 8;
	if (field[0] == j && field[8] == j && field[4] == '') return 4;
	if (field[4] == j && field[8] == j && field[0] == '') return 0;
//////////////////////////////////////////////////////////////////////////
	if (field[1] == j && field[4] == j && field[7] == '') return 7;
	if (field[1] == j && field[7] == j && field[4] == '') return 4;
	if (field[4] == j && field[7] == j && field[1] == '') return 1;
//////////////////////////////////////////////////////////////////////////
	if (field[2] == j && field[5] == j && field[8] == '') return 8;
	if (field[2] == j && field[8] == j && field[5] == '') return 5;
	if (field[5] == j && field[8] == j && field[2] == '') return 2;

	if (field[2] == j && field[4] == j && field[6] == '') return 6;
	if (field[2] == j && field[6] == j && field[4] == '') return 4;
	if (field[4] == j && field[6] == j && field[2] == '') return 2;
//////////////////////////////////////////////////////////////////////////
	if (field[3] == j && field[4] == j && field[5] == '') return 5;
	if (field[3] == j && field[5] == j && field[4] == '') return 4;
	if (field[4] == j && field[5] == j && field[3] == '') return 3;
/////////////////////////////////////////////////////////////////////////
	if (field[6] == j && field[7] == j && field[8] == '') return 8;
	if (field[6] == j && field[8] == j && field[7] == '') return 7;
	if (field[7] == j && field[8] == j && field[6] == '') return 6;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
	j = XO[(k+1)%2];	
//////////////////////////////////////////////////////////////////////////////////////////////////////
	if (field[0] == j && field[1] == '' && field[2] == '') return 1;
	if (field[1] == j && field[0] == '' && field[2] == '') return 0;
	if (field[2] == j && field[0] == '' && field[1] == '') return 0;

	if (field[0] == j && field[3] == '' && field[6] == '') return 3;
	if (field[3] == j && field[0] == '' && field[6] == '') return 0;
	if (field[6] == j && field[0] == '' && field[3] == '') return 0;

	if (field[0] == j && field[4] == '' && field[8] == '') return 4;
	if (field[4] == j && field[0] == '' && field[8] == '') return 0;
	if (field[8] == j && field[0] == '' && field[4] == '') return 0;
//////////////////////////////////////////////////////////////////////////
	if (field[1] == j && field[4] == '' && field[7] == '') return 4;
	if (field[4] == j && field[1] == '' && field[7] == '') return 1;
	if (field[7] == j && field[1] == '' && field[4] == '') return 1;
//////////////////////////////////////////////////////////////////////////
	if (field[2] == j && field[5] == '' && field[8] == '') return 5;
	if (field[5] == j && field[2] == '' && field[8] == '') return 2;
	if (field[8] == j && field[2] == '' && field[5] == '') return 2;

	if (field[2] == j && field[4] == '' && field[6] == '') return 4;
	if (field[4] == j && field[2] == '' && field[6] == '') return 2;
	if (field[6] == j && field[2] == '' && field[4] == '') return 2;
//////////////////////////////////////////////////////////////////////////
	if (field[3] == j && field[4] == '' && field[5] == '') return 4;
	if (field[4] == j && field[3] == '' && field[5] == '') return 3;
	if (field[5] == j && field[3] == '' && field[4] == '') return 3;
/////////////////////////////////////////////////////////////////////////
	if (field[6] == j && field[7] == '' && field[8] == '') return 7;
	if (field[7] == j && field[6] == '' && field[8] == '') return 6;
	if (field[8] == j && field[6] == '' && field[7] == '') return 6;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (chosen == 'X' && i == 1) {
		let k = Math.floor(Math.random() * 9);
		if (field[k] == '')
			return k;
		else
			return (k+1)%9;
	}
	for (let k = 0; k < 9; k++) {
		if (field[k] == '') 
			return k;
	}	
}

function computerPlay() {
	if (i == 0) {
		let k = Math.floor(Math.random() * 9);
		document.getElementById('cell' + k).innerHTML = 'X';
		field[k] = XO[0];
	} else {
		let k;
		if (chosen == 'X') {
			k = getPlace(0);
			document.getElementById('cell' + k).innerHTML = 'O';
			field[k] = XO[1];
		}
		if (chosen == 'O') {
			k = getPlace(1);
			document.getElementById('cell' + k).innerHTML = 'X';
			field[k] = XO[0];
		}
	}
	if (check() && check() != 1) { printWinner(); return;}
	if (check() == 1) { printNobody(); return;}
	i++;
	document.getElementById('5').innerHTML = phrase1[0];
}

function showField() {
	document.getElementById('4').style.display="block";
}

function print(j) {
	if (field[j] != '') return;
	if (check()) return;
	if (mode == 1 && !checkComputer()) return;
	document.getElementById('cell'+j).innerHTML=XO[i%2];
	field[j] = XO[i%2];
	if (check() && check() != 1) { printWinner(); return;}
	if (check() == 1) { printNobody(); return;}
	i++;
	if (mode == 2) document.getElementById('5').innerHTML = phrase2[i%2];
	if (mode == 1) {document.getElementById('5').innerHTML = phrase1[1]; setTimeout(computerPlay, 1000);}
}

function checkComputer() {
	if (chosen == 'X' && i%2 == 0) return 1;
	if (chosen == 'O' && i%2 == 1) return 1;
	return 0;
}

function check() {
	if (field[0] == field[1] && field[1] == field[2] && field[0] != '') return 120;
	if (field[3] == field[4] && field[4] == field[5] && field[3] != '') return 345;
	if (field[6] == field[7] && field[7] == field[8] && field[6] != '') return 678;
	if (field[0] == field[3] && field[3] == field[6] && field[0] != '') return 360;
	if (field[1] == field[4] && field[4] == field[7] && field[1] != '') return 147;
	if (field[2] == field[5] && field[5] == field[8] && field[2] != '') return 258;
	if (field[0] == field[4] && field[4] == field[8] && field[0] != '') return 480;
	if (field[2] == field[4] && field[4] == field[6] && field[2] != '') return 246;
	if (field.indexOf('') == -1) return 1;
	return 0;
}

function printWinner() { 
	let j = i%2+1;
	document.getElementById('5').innerHTML = 'Игра окончена';
	document.getElementById('6').style.display="block";
	if (mode == 2) { document.getElementById('7').innerHTML = 'Игрок' + j + ' победил';}
	if (mode == 1 && chosen=='X' && i%2 == 0) {document.getElementById('7').innerHTML = 'Вы победили';}
	if (mode == 1 && chosen=='X' && i%2 == 1) {document.getElementById('7').innerHTML = 'Вы проиграли';}
	if (mode == 1 && chosen=='O' && i%2 == 0) {document.getElementById('7').innerHTML = 'Вы проиграли';}
	if (mode == 1 && chosen=='O' && i%2 == 1) {document.getElementById('7').innerHTML = 'Вы победили';}
	let arr = ('' + check()).split('');
	for (let j = 0; j < 3; ++j) {
		document.getElementById('cell' + arr[j]).style.color = 'red';
	}
}

function printNobody() {
	document.getElementById('5').innerHTML = 'Игра окончена';
	document.getElementById('6').style.display="block";
	document.getElementById('7').innerHTML = 'Ничья';
}

function restart() {
	if (check() > 1) {
		let arr = ('' + check()).split('');
		for (let j = 0; j < 3; ++j) {
			document.getElementById('cell' + arr[j]).style.color = 'black';
		}
	}
	field = ['', '', '', '', '', '', '', '', ''];
	i = 0;
	for (let j = 0; j < 9; ++j) {
		document.getElementById('cell' + j).innerHTML = '';
	}
	document.getElementById('4').style.display="none";
	document.getElementById('6').style.display="none";
	document.getElementById('2').style.display="block";
}
