//origin co-ordenates
var arr_X = [0,
/*1*/640,
/*2*/320, 960,
/*3*/160, 480, 800, 1120,
/*4*/80, 240, 400, 560, 720, 880, 1040, 1200,
/*5*/40, 120, 200, 280, 360, 440, 520, 600, 680, 760, 840, 920, 1000, 1080, 1160, 1240,
/*6*/20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980, 1020, 1060, 1100, 1140, 1180, 1220, 1260];

var arr_Y = [0,
/*1*/100,
/*2*/150, 150,
/*3*/200, 200, 200, 200,
/*4*/250, 250, 250, 250, 250, 250, 250, 250,
/*5*/300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300,
/*6*/350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350];

var arr_font = [25, 30, 35, 40, 45, 50];

var line = 50;

//setting is a Default values:
var setting = [arr_font[0], "white","black" ];

function font_control(font_num) {
	setting[0] = arr_font[font_num];
	textarea.value+=setting[0] + "px Arial";
};

function color_control(color_num) {
	setting[1] = color_num;
	textarea.value+=setting[1];
};

function font_color_control(color_num) {
	setting[2] = color_num;
	textarea.value+=setting[2];
};


function circle(x1, y1, num, N) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(x1, y1, setting[0]-5, 0, 2 * Math.PI);
	if (N == Search_Animation) {
		ctx.fillStyle = 'red';
		ctx.fill();
	} else {
		ctx.fillStyle = setting[1];
		ctx.fill();
	}
	if (num > -1 && num < 10) {
		ctx.fillStyle = setting[2];
		ctx.font = '' + setting[0] + 'px Arial';
		ctx.fillText(num, x1 - (setting[0]-18) , y1 + 5 );
	} else if (num > -10 && num < 100) {
		ctx.fillStyle = setting[2];
		ctx.font = '' + setting[0] - 5 + 'px Arial';
		ctx.fillText(num, x1 - (setting[0]-15), y1 + 5);
	} else if (num > -100 && num < 1000) {
		ctx.fillStyle = setting[2];
		ctx.font = '' + setting[0] - 7 + 'px Arial';
		ctx.fillText(num, x1 - (setting[0]-8), y1 + 5);
	} else {
		ctx.fillStyle = setting[2];
		ctx.font = '' + setting[0] - 10 + 'px Arial';
		ctx.fillText(num, x1 - (setting[0]-5), y1 + 5);
	}
	ctx.strokeStyle = 'red';
	ctx.stroke();
};
function line_toRight(x1, y1, x2, y2) {
	var c = document.getElementById("myCanvas");
	var line = c.getContext("2d");
	line.moveTo(x1 + (setting[0]-5), y1 + (setting[0]-20));
	line.lineTo(x2, y2 - (setting[0]-5));
	line.lineWidth = 3;
	line.lineCap = 'square';
	line.strokeStyle = 'red';
	line.stroke();
};
function line_toLeft(x1, y1, x2, y2) {
	var c = document.getElementById("myCanvas");
	var line = c.getContext("2d");
	line.moveTo(x1 - (setting[0]-5), y1 + (setting[0]-20));
	line.lineTo(x2, y2 - (setting[0]-5));
	line.lineWidth = 3;
	line.lineCap = 'square';
	line.strokeStyle = 'red';
	line.stroke();
};

function Node_coordeinat(N, L, dir, val, N_Parent) {
	var x, y, x1, y1;
	x1 = arr_X[N_Parent];
	y1 = arr_Y[N_Parent];
	x = arr_X[N];
	y = arr_Y[N];
	circle(x, y, val, N);
	if (dir == 2) {
		line_toLeft(x1, y1, x, y);
	}
	if (dir == 1) {
		line_toRight(x1, y1, x, y);
	}
};

