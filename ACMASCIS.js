window.requestAnimFrame = (function(callback) {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();
function initBalls() {
	balls = [];

	var blue = "#3A5BCD";
	var red = "#EF2B36";
	var yellow = "#FFC636";
	var green = "#02A817";
	var aqua = "#00ffff";
	var black = "#000000";
	var fuchsia = "#ff00ff";
	var gray = "#808080";
	var lime = "#00ff00";
	var maroon = "#800000";
	var navy = "#000080";
	var olive = "#808000";
	var purple = "#800080";
	var silver = "#c0c0c0";
	var teal = "#008080";
	var white = "#ffffff";
	
	//-------------------------
	for(var i=30 ; i<=670+300 ; i+=20)
	{
		balls.push(new Ball(i, 11, 0, 0, white));
		
		balls.push(new Ball(i, 189, 0, 0, white));
		
	}
	//|||
	var i=10 ;
	for(var i=30 ; i<=170 ; i+=20){
		balls.push(new Ball(11, i, 0, 0, white));		
		balls.push(new Ball(989, i, 0, 0, white));
	}
	
	// A
	//                   X , Y
	balls.push(new Ball(90, 60, 0, 0, navy));
	balls.push(new Ball(87, 65, 0, 0, navy));
	balls.push(new Ball(85, 70, 0, 0, navy));
	balls.push(new Ball(83, 75, 0, 0, navy));
	balls.push(new Ball(80, 80, 0, 0, navy));
	balls.push(new Ball(77, 85, 0, 0, navy));
	balls.push(new Ball(75, 90, 0, 0, navy));
	balls.push(new Ball(73, 95, 0, 0, navy));
	balls.push(new Ball(70, 100, 0, 0, navy));
	balls.push(new Ball(67, 105, 0, 0, navy));
	balls.push(new Ball(65, 110, 0, 0, navy));
	balls.push(new Ball(63, 115, 0, 0, navy));
	balls.push(new Ball(60, 120, 0, 0, navy));
	balls.push(new Ball(57, 125, 0, 0, navy));
	balls.push(new Ball(55, 130, 0, 0, navy));
	balls.push(new Ball(53, 135, 0, 0, navy));
	balls.push(new Ball(50, 140, 0, 0, navy));
	balls.push(new Ball(47, 145, 0, 0, navy));
	balls.push(new Ball(45, 150, 0, 0, navy));
	balls.push(new Ball(43, 155, 0, 0, navy));
	balls.push(new Ball(40, 160, 0, 0, navy));

	balls.push(new Ball(70, 120, 0, 0, navy));
	balls.push(new Ball(75, 120, 0, 0, navy));
	balls.push(new Ball(80, 120, 0, 0, navy));
	balls.push(new Ball(85, 120, 0, 0, navy));
	balls.push(new Ball(90, 120, 0, 0, navy));
	balls.push(new Ball(95, 120, 0, 0, navy));
	balls.push(new Ball(100, 120, 0, 0, navy));
	balls.push(new Ball(105, 120, 0, 0, navy));
	balls.push(new Ball(110, 120, 0, 0, navy));
	balls.push(new Ball(115, 120, 0, 0, navy));
	balls.push(new Ball(120, 120, 0, 0, navy));
	balls.push(new Ball(125, 120, 0, 0, navy));
	balls.push(new Ball(130, 120, 0, 0, navy));

	balls.push(new Ball(92, 60, 0, 0, navy));
	balls.push(new Ball(94, 60, 0, 0, navy));
	balls.push(new Ball(96, 60, 0, 0, navy));
	balls.push(new Ball(98, 60, 0, 0, navy));
	balls.push(new Ball(100, 60, 0, 0, navy));
	balls.push(new Ball(102, 60, 0, 0, navy));
	balls.push(new Ball(104, 60, 0, 0, navy));
	balls.push(new Ball(106, 60, 0, 0, navy));
	balls.push(new Ball(108, 60, 0, 0, navy));

	balls.push(new Ball(110, 60, 0, 0, navy));
	balls.push(new Ball(112, 65, 0, 0, navy));
	balls.push(new Ball(115, 70, 0, 0, navy));
	balls.push(new Ball(117, 75, 0, 0, navy));
	balls.push(new Ball(120, 80, 0, 0, navy));
	balls.push(new Ball(123, 85, 0, 0, navy));
	balls.push(new Ball(125, 90, 0, 0, navy));
	balls.push(new Ball(127, 95, 0, 0, navy));
	balls.push(new Ball(130, 100, 0, 0, navy));
	balls.push(new Ball(132, 105, 0, 0, navy));
	balls.push(new Ball(135, 110, 0, 0, navy));
	balls.push(new Ball(137, 115, 0, 0, navy));
	balls.push(new Ball(140, 120, 0, 0, navy));
	balls.push(new Ball(143, 125, 0, 0, navy));
	balls.push(new Ball(145, 130, 0, 0, navy));
	balls.push(new Ball(147, 135, 0, 0, navy));
	balls.push(new Ball(150, 140, 0, 0, navy));
	balls.push(new Ball(153, 145, 0, 0, navy));
	balls.push(new Ball(155, 150, 0, 0, navy));
	balls.push(new Ball(157, 155, 0, 0, navy));
	balls.push(new Ball(160, 160, 0, 0, navy));

	//C
	balls.push(new Ball(223, 60, 0, 0, yellow));
	balls.push(new Ball(220, 60, 0, 0, yellow));
	balls.push(new Ball(218, 60, 0, 0, yellow));
	balls.push(new Ball(215, 60, 0, 0, yellow));
	balls.push(new Ball(213, 60, 0, 0, yellow));
	balls.push(new Ball(210, 60, 0, 0, yellow));
	balls.push(new Ball(208, 60, 0, 0, yellow));
	balls.push(new Ball(205, 60, 0, 0, yellow));
	balls.push(new Ball(203, 60, 0, 0, yellow));
	balls.push(new Ball(200, 60, 0, 0, yellow));
	balls.push(new Ball(198, 65, 0, 0, yellow));
	balls.push(new Ball(195, 70, 0, 0, yellow));
	balls.push(new Ball(193, 75, 0, 0, yellow));
	balls.push(new Ball(190, 80, 0, 0, yellow));
	balls.push(new Ball(188, 85, 0, 0, yellow));
	balls.push(new Ball(185, 90, 0, 0, yellow));
	balls.push(new Ball(183, 95, 0, 0, yellow));
	balls.push(new Ball(180, 100, 0, 0, yellow));

	balls.push(new Ball(180, 100, 0, 0, yellow));

	balls.push(new Ball(180, 110, 0, 0, yellow));
	balls.push(new Ball(183, 115, 0, 0, yellow));
	balls.push(new Ball(185, 120, 0, 0, yellow));
	balls.push(new Ball(188, 125, 0, 0, yellow));
	balls.push(new Ball(190, 130, 0, 0, yellow));
	balls.push(new Ball(193, 135, 0, 0, yellow));
	balls.push(new Ball(195, 140, 0, 0, yellow));
	balls.push(new Ball(198, 145, 0, 0, yellow));
	balls.push(new Ball(200, 150, 0, 0, yellow));
	balls.push(new Ball(203, 155, 0, 0, yellow));
	balls.push(new Ball(205, 160, 0, 0, yellow));
	balls.push(new Ball(208, 160, 0, 0, yellow));
	balls.push(new Ball(210, 160, 0, 0, yellow));
	balls.push(new Ball(213, 160, 0, 0, yellow));
	balls.push(new Ball(215, 160, 0, 0, yellow));
	balls.push(new Ball(218, 160, 0, 0, yellow));
	balls.push(new Ball(220, 160, 0, 0, yellow));
	balls.push(new Ball(223, 160, 0, 0, yellow));

	//M
	balls.push(new Ball(300, 60, 0, 0, red));
	balls.push(new Ball(297, 65, 0, 0, red));
	balls.push(new Ball(295, 70, 0, 0, red));
	balls.push(new Ball(292, 75, 0, 0, red));
	balls.push(new Ball(290, 80, 0, 0, red));
	balls.push(new Ball(287, 85, 0, 0, red));
	balls.push(new Ball(285, 90, 0, 0, red));
	balls.push(new Ball(282, 95, 0, 0, red));
	balls.push(new Ball(280, 100, 0, 0, red));
	balls.push(new Ball(277, 105, 0, 0, red));
	balls.push(new Ball(275, 110, 0, 0, red));
	balls.push(new Ball(272, 115, 0, 0, red));
	balls.push(new Ball(270, 120, 0, 0, red));
	balls.push(new Ball(267, 125, 0, 0, red));
	balls.push(new Ball(265, 130, 0, 0, red));
	balls.push(new Ball(262, 135, 0, 0, red));
	balls.push(new Ball(260, 140, 0, 0, red));
	balls.push(new Ball(257, 145, 0, 0, red));
	balls.push(new Ball(255, 150, 0, 0, red));
	balls.push(new Ball(252, 155, 0, 0, red));
	balls.push(new Ball(250, 160, 0, 0, red));

	balls.push(new Ball(305, 60, 0, 0, red));
	balls.push(new Ball(310, 60, 0, 0, red));

	balls.push(new Ball(315, 60, 0, 0, red));
	balls.push(new Ball(320, 60, 0, 0, red));
	balls.push(new Ball(322, 65, 0, 0, red));
	balls.push(new Ball(325, 70, 0, 0, red));
	balls.push(new Ball(327, 75, 0, 0, red));
	balls.push(new Ball(330, 80, 0, 0, red));
	balls.push(new Ball(332, 85, 0, 0, red));
	balls.push(new Ball(335, 90, 0, 0, red));
	balls.push(new Ball(337, 95, 0, 0, red));
	balls.push(new Ball(340, 100, 0, 0, red));
	balls.push(new Ball(342, 105, 0, 0, red));
	balls.push(new Ball(345, 110, 0, 0, red));
	balls.push(new Ball(347, 115, 0, 0, red));
	balls.push(new Ball(350, 120, 0, 0, red));
	balls.push(new Ball(352, 125, 0, 0, red));
	balls.push(new Ball(355, 130, 0, 0, red));

	balls.push(new Ball(360, 130, 0, 0, red));
	balls.push(new Ball(365, 130, 0, 0, red));

	balls.push(new Ball(405, 60, 0, 0, red));
	balls.push(new Ball(402, 65, 0, 0, red));
	balls.push(new Ball(400, 70, 0, 0, red));
	balls.push(new Ball(397, 75, 0, 0, red));
	balls.push(new Ball(395, 80, 0, 0, red));
	balls.push(new Ball(392, 85, 0, 0, red));
	balls.push(new Ball(390, 90, 0, 0, red));
	balls.push(new Ball(387, 95, 0, 0, red));
	balls.push(new Ball(385, 100, 0, 0, red))
	balls.push(new Ball(382, 105, 0, 0, red));
	;
	balls.push(new Ball(380, 110, 0, 0, red))
	balls.push(new Ball(377, 115, 0, 0, red));
	;
	balls.push(new Ball(375, 120, 0, 0, red))
	balls.push(new Ball(372, 125, 0, 0, red));
	;
	balls.push(new Ball(370, 130, 0, 0, red));

	balls.push(new Ball(410, 60, 0, 0, red));
	balls.push(new Ball(415, 60, 0, 0, red));

	balls.push(new Ball(420, 60, 0, 0, red));
	balls.push(new Ball(425, 60, 0, 0, red));
	balls.push(new Ball(427, 65, 0, 0, red));
	balls.push(new Ball(430, 70, 0, 0, red));
	balls.push(new Ball(432, 75, 0, 0, red));
	balls.push(new Ball(435, 80, 0, 0, red));
	balls.push(new Ball(437, 85, 0, 0, red));
	balls.push(new Ball(440, 90, 0, 0, red));
	balls.push(new Ball(442, 95, 0, 0, red));
	balls.push(new Ball(445, 100, 0, 0, red))
	balls.push(new Ball(447, 105, 0, 0, red));
	;
	balls.push(new Ball(450, 110, 0, 0, red))
	balls.push(new Ball(452, 115, 0, 0, red));
	;
	balls.push(new Ball(455, 120, 0, 0, red))
	balls.push(new Ball(457, 125, 0, 0, red));
	;
	balls.push(new Ball(460, 130, 0, 0, red))
	balls.push(new Ball(462, 135, 0, 0, red));
	;
	balls.push(new Ball(465, 140, 0, 0, red))
	balls.push(new Ball(467, 145, 0, 0, red));
	;
	balls.push(new Ball(470, 150, 0, 0, red))
	balls.push(new Ball(472, 155, 0, 0, red));
	;
	balls.push(new Ball(475, 160, 0, 0, red));

	//A
	balls.push(new Ball(590, 60, 0, 0, black));
	balls.push(new Ball(587, 65, 0, 0, black));
	balls.push(new Ball(585, 70, 0, 0, black));
	balls.push(new Ball(583, 75, 0, 0, black));
	balls.push(new Ball(580, 80, 0, 0, black));
	balls.push(new Ball(577, 85, 0, 0, black));
	balls.push(new Ball(575, 90, 0, 0, black));
	balls.push(new Ball(573, 95, 0, 0, black));
	balls.push(new Ball(570, 100, 0, 0, black));
	balls.push(new Ball(567, 105, 0, 0, black));
	balls.push(new Ball(565, 110, 0, 0, black));
	balls.push(new Ball(563, 115, 0, 0, black));
	balls.push(new Ball(560, 120, 0, 0, black));
	balls.push(new Ball(557, 125, 0, 0, black));
	balls.push(new Ball(555, 130, 0, 0, black));
	balls.push(new Ball(553, 135, 0, 0, black));
	balls.push(new Ball(550, 140, 0, 0, black));
	balls.push(new Ball(547, 145, 0, 0, black));
	balls.push(new Ball(545, 150, 0, 0, black));
	balls.push(new Ball(543, 155, 0, 0, black));
	balls.push(new Ball(540, 160, 0, 0, black));

	balls.push(new Ball(570, 120, 0, 0, black));
	balls.push(new Ball(575, 120, 0, 0, black));
	balls.push(new Ball(580, 120, 0, 0, black));
	balls.push(new Ball(585, 120, 0, 0, black));
	balls.push(new Ball(590, 120, 0, 0, black));
	balls.push(new Ball(595, 120, 0, 0, black));
	balls.push(new Ball(600, 120, 0, 0, black));
	balls.push(new Ball(605, 120, 0, 0, black));
	balls.push(new Ball(610, 120, 0, 0, black));
	balls.push(new Ball(615, 120, 0, 0, black));
	balls.push(new Ball(620, 120, 0, 0, black));
	balls.push(new Ball(625, 120, 0, 0, black));
	balls.push(new Ball(630, 120, 0, 0, black));

	balls.push(new Ball(592, 60, 0, 0, black));
	balls.push(new Ball(594, 60, 0, 0, black));
	balls.push(new Ball(596, 60, 0, 0, black));
	balls.push(new Ball(598, 60, 0, 0, black));
	balls.push(new Ball(600, 60, 0, 0, black));
	balls.push(new Ball(602, 60, 0, 0, black));
	balls.push(new Ball(604, 60, 0, 0, black));
	balls.push(new Ball(606, 60, 0, 0, black));
	balls.push(new Ball(608, 60, 0, 0, black));

	balls.push(new Ball(610, 60, 0, 0, black));
	balls.push(new Ball(612, 65, 0, 0, black));
	balls.push(new Ball(615, 70, 0, 0, black));
	balls.push(new Ball(617, 75, 0, 0, black));
	balls.push(new Ball(620, 80, 0, 0, black));
	balls.push(new Ball(623, 85, 0, 0, black));
	balls.push(new Ball(625, 90, 0, 0, black));
	balls.push(new Ball(627, 95, 0, 0, black));
	balls.push(new Ball(630, 100, 0, 0, black));
	balls.push(new Ball(632, 105, 0, 0, black));
	balls.push(new Ball(635, 110, 0, 0, black));
	balls.push(new Ball(637, 115, 0, 0, black));
	balls.push(new Ball(640, 120, 0, 0, black));
	balls.push(new Ball(643, 125, 0, 0, black));
	balls.push(new Ball(645, 130, 0, 0, black));
	balls.push(new Ball(647, 135, 0, 0, black));
	balls.push(new Ball(650, 140, 0, 0, black));
	balls.push(new Ball(653, 145, 0, 0, black));
	balls.push(new Ball(655, 150, 0, 0, black));
	balls.push(new Ball(657, 155, 0, 0, black));
	balls.push(new Ball(660, 160, 0, 0, black));
	//S
	balls.push(new Ball(705, 60, 0, 0, black));
	balls.push(new Ball(710, 58, 0, 0, black));
	balls.push(new Ball(715, 56, 0, 0, black));
	balls.push(new Ball(720, 54, 0, 0, black));
	balls.push(new Ball(725, 52, 0, 0, black));
	balls.push(new Ball(730, 52, 0, 0, black));
	balls.push(new Ball(735, 54, 0, 0, black));
	balls.push(new Ball(740, 56, 0, 0, black));
	balls.push(new Ball(745, 58, 0, 0, black));
	balls.push(new Ball(750, 60, 0, 0, black));

	balls.push(new Ball(702, 62, 0, 0, black));
	balls.push(new Ball(700, 64, 0, 0, black));
	balls.push(new Ball(702, 66, 0, 0, black));

	balls.push(new Ball(702, 70, 0, 0, black));
	balls.push(new Ball(705, 75, 0, 0, black));
	balls.push(new Ball(708, 80, 0, 0, black));
	balls.push(new Ball(711, 85, 0, 0, black));
	balls.push(new Ball(714, 90, 0, 0, black));
	balls.push(new Ball(717, 95, 0, 0, black));
	balls.push(new Ball(720, 100, 0, 0, black));
	balls.push(new Ball(723, 105, 0, 0, black));
	balls.push(new Ball(726, 110, 0, 0, black));
	balls.push(new Ball(729, 115, 0, 0, black));
	balls.push(new Ball(732, 120, 0, 0, black));
	balls.push(new Ball(735, 125, 0, 0, black));
	balls.push(new Ball(738, 130, 0, 0, black));
	balls.push(new Ball(741, 135, 0, 0, black));
	balls.push(new Ball(744, 140, 0, 0, black));
	balls.push(new Ball(747, 145, 0, 0, black));
	balls.push(new Ball(750, 150, 0, 0, black));

	balls.push(new Ball(752, 158, 0, 0, black));
	balls.push(new Ball(754, 156, 0, 0, black));
	balls.push(new Ball(752, 154, 0, 0, black));

	balls.push(new Ball(705, 160, 0, 0, black));
	balls.push(new Ball(710, 162, 0, 0, black));
	balls.push(new Ball(715, 164, 0, 0, black));
	balls.push(new Ball(720, 166, 0, 0, black));
	balls.push(new Ball(725, 168, 0, 0, black));
	balls.push(new Ball(730, 168, 0, 0, black));
	balls.push(new Ball(735, 166, 0, 0, black));
	balls.push(new Ball(740, 164, 0, 0, black));
	balls.push(new Ball(745, 162, 0, 0, black));
	balls.push(new Ball(750, 160, 0, 0, black));

	//C
	balls.push(new Ball(823, 60, 0, 0, black));
	balls.push(new Ball(820, 60, 0, 0, black));
	balls.push(new Ball(818, 60, 0, 0, black));
	balls.push(new Ball(815, 60, 0, 0, black));
	balls.push(new Ball(813, 60, 0, 0, black));
	balls.push(new Ball(810, 60, 0, 0, black));
	balls.push(new Ball(808, 60, 0, 0, black));
	balls.push(new Ball(805, 60, 0, 0, black));
	balls.push(new Ball(803, 60, 0, 0, black));
	balls.push(new Ball(800, 60, 0, 0, black));
	balls.push(new Ball(798, 65, 0, 0, black));
	balls.push(new Ball(795, 70, 0, 0, black));
	balls.push(new Ball(793, 75, 0, 0, black));
	balls.push(new Ball(790, 80, 0, 0, black));
	balls.push(new Ball(788, 85, 0, 0, black));
	balls.push(new Ball(785, 90, 0, 0, black));
	balls.push(new Ball(783, 95, 0, 0, black));
	balls.push(new Ball(780, 100, 0, 0, black));

	balls.push(new Ball(780, 100, 0, 0, black));

	balls.push(new Ball(780, 110, 0, 0, black));
	balls.push(new Ball(783, 115, 0, 0, black));
	balls.push(new Ball(785, 120, 0, 0, black));
	balls.push(new Ball(788, 125, 0, 0, black));
	balls.push(new Ball(790, 130, 0, 0, black));
	balls.push(new Ball(793, 135, 0, 0, black));
	balls.push(new Ball(795, 140, 0, 0, black));
	balls.push(new Ball(798, 145, 0, 0, black));
	balls.push(new Ball(800, 150, 0, 0, black));
	balls.push(new Ball(803, 155, 0, 0, black));
	balls.push(new Ball(805, 160, 0, 0, black));
	balls.push(new Ball(808, 160, 0, 0, black));
	balls.push(new Ball(810, 160, 0, 0, black));
	balls.push(new Ball(813, 160, 0, 0, black));
	balls.push(new Ball(815, 160, 0, 0, black));
	balls.push(new Ball(818, 160, 0, 0, black));
	balls.push(new Ball(820, 160, 0, 0, black));
	balls.push(new Ball(823, 160, 0, 0, black));

	//I
	balls.push(new Ball(854, 60, 0, 0, black));
	balls.push(new Ball(856, 60, 0, 0, black));
	balls.push(new Ball(858, 60, 0, 0, black));
	balls.push(new Ball(862, 60, 0, 0, black));
	balls.push(new Ball(864, 60, 0, 0, black));
	balls.push(new Ball(866, 60, 0, 0, black));

	balls.push(new Ball(860, 60, 0, 0, black));
	balls.push(new Ball(860, 65, 0, 0, black));
	balls.push(new Ball(860, 70, 0, 0, black));
	balls.push(new Ball(860, 75, 0, 0, black));
	balls.push(new Ball(860, 80, 0, 0, black));
	balls.push(new Ball(860, 85, 0, 0, black));
	balls.push(new Ball(860, 90, 0, 0, black));
	balls.push(new Ball(860, 95, 0, 0, black));
	balls.push(new Ball(860, 100, 0, 0, black));
	balls.push(new Ball(860, 105, 0, 0, black));
	balls.push(new Ball(860, 110, 0, 0, black));
	balls.push(new Ball(860, 115, 0, 0, black));
	balls.push(new Ball(860, 120, 0, 0, black));
	balls.push(new Ball(860, 125, 0, 0, black));
	balls.push(new Ball(860, 130, 0, 0, black));
	balls.push(new Ball(860, 135, 0, 0, black));
	balls.push(new Ball(860, 140, 0, 0, black));
	balls.push(new Ball(860, 145, 0, 0, black));
	balls.push(new Ball(860, 150, 0, 0, black));
	balls.push(new Ball(860, 155, 0, 0, black));
	balls.push(new Ball(860, 160, 0, 0, black));

	balls.push(new Ball(854, 160, 0, 0, black));
	balls.push(new Ball(856, 160, 0, 0, black));
	balls.push(new Ball(858, 160, 0, 0, black));
	balls.push(new Ball(862, 160, 0, 0, black));
	balls.push(new Ball(864, 160, 0, 0, black));
	balls.push(new Ball(866, 160, 0, 0, black));

	//S
	balls.push(new Ball(905, 60, 0, 0, black));
	balls.push(new Ball(910, 58, 0, 0, black));
	balls.push(new Ball(915, 56, 0, 0, black));
	balls.push(new Ball(920, 54, 0, 0, black));
	balls.push(new Ball(925, 52, 0, 0, black));
	balls.push(new Ball(930, 52, 0, 0, black));
	balls.push(new Ball(935, 54, 0, 0, black));
	balls.push(new Ball(940, 56, 0, 0, black));
	balls.push(new Ball(945, 58, 0, 0, black));
	balls.push(new Ball(950, 60, 0, 0, black));

	balls.push(new Ball(902, 62, 0, 0, black));
	balls.push(new Ball(900, 64, 0, 0, black));
	balls.push(new Ball(902, 66, 0, 0, black));

	balls.push(new Ball(902, 70, 0, 0, black));
	balls.push(new Ball(905, 75, 0, 0, black));
	balls.push(new Ball(908, 80, 0, 0, black));
	balls.push(new Ball(911, 85, 0, 0, black));
	balls.push(new Ball(914, 90, 0, 0, black));
	balls.push(new Ball(917, 95, 0, 0, black));
	balls.push(new Ball(920, 100, 0, 0, black));
	balls.push(new Ball(923, 105, 0, 0, black));
	balls.push(new Ball(926, 110, 0, 0, black));
	balls.push(new Ball(929, 115, 0, 0, black));
	balls.push(new Ball(932, 120, 0, 0, black));
	balls.push(new Ball(935, 125, 0, 0, black));
	balls.push(new Ball(938, 130, 0, 0, black));
	balls.push(new Ball(941, 135, 0, 0, black));
	balls.push(new Ball(944, 140, 0, 0, black));
	balls.push(new Ball(947, 145, 0, 0, black));
	balls.push(new Ball(950, 150, 0, 0, black));

	balls.push(new Ball(952, 158, 0, 0, black));
	balls.push(new Ball(954, 156, 0, 0, black));
	balls.push(new Ball(952, 154, 0, 0, black));

	balls.push(new Ball(905, 160, 0, 0, black));
	balls.push(new Ball(910, 162, 0, 0, black));
	balls.push(new Ball(915, 164, 0, 0, black));
	balls.push(new Ball(920, 166, 0, 0, black));
	balls.push(new Ball(925, 168, 0, 0, black));
	balls.push(new Ball(930, 168, 0, 0, black));
	balls.push(new Ball(935, 166, 0, 0, black));
	balls.push(new Ball(940, 164, 0, 0, black));
	balls.push(new Ball(945, 162, 0, 0, black));
	balls.push(new Ball(950, 160, 0, 0, black));
	return balls;
}

function getMousePos(canvas, evt) {
	// get canvas position
	var obj = canvas;
	var top = 0;
	var left = 0;
	while (obj.tagName != 'BODY') {
		top += obj.offsetTop;
		left += obj.offsetLeft;
		obj = obj.offsetParent;
	}

	// return relative mouse position
	var mouseX = evt.clientX - left + window.pageXOffset;
	var mouseY = evt.clientY - top + window.pageYOffset;
	return {
		x : mouseX,
		y : mouseY
	};
}

function updateBalls(canvas, balls, timeDiff, mousePos) {
	var context = canvas.getContext("2d");
	var collisionDamper = 0.3;
	var floorFriction = 0.0005 * timeDiff;
	var mouseForceMultiplier = 1 * timeDiff;
	var restoreForce = 0.002 * timeDiff;

	for (var n = 0; n < balls.length; n++) {
		var ball = balls[n];
		// set ball position based on velocity
		ball.y += ball.vy;
		ball.x += ball.vx;

		// restore forces
		if (ball.x > ball.origX) {
			ball.vx -= restoreForce;
		} else {
			ball.vx += restoreForce;
		}
		if (ball.y > ball.origY) {
			ball.vy -= restoreForce;
		} else {
			ball.vy += restoreForce;
		}

		// mouse forces
		var mouseX = mousePos.x;
		var mouseY = mousePos.y;

		var distX = ball.x - mouseX;
		var distY = ball.y - mouseY;

		var radius = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

		var totalDist = Math.abs(distX) + Math.abs(distY);

		var forceX = (Math.abs(distX) / totalDist) * (1 / radius) * mouseForceMultiplier;
		var forceY = (Math.abs(distY) / totalDist) * (1 / radius) * mouseForceMultiplier;

		if (distX > 0) {// mouse is left of ball
			ball.vx += forceX;
		} else {
			ball.vx -= forceX;
		}
		if (distY > 0) {// mouse is on top of ball
			ball.vy += forceY;
		} else {
			ball.vy -= forceY;
		}

		// floor friction
		if (ball.vx > 0) {
			ball.vx -= floorFriction;
		} else if (ball.vx < 0) {
			ball.vx += floorFriction;
		}
		if (ball.vy > 0) {
			ball.vy -= floorFriction;
		} else if (ball.vy < 0) {
			ball.vy += floorFriction;
		}

		// floor condition
		if (ball.y > (canvas.height - ball.radius)) {
			ball.y = canvas.height - ball.radius - 2;
			ball.vy *= -1;
			ball.vy *= (1 - collisionDamper);
		}

		// ceiling condition
		if (ball.y < (ball.radius)) {
			ball.y = ball.radius + 2;
			ball.vy *= -1;
			ball.vy *= (1 - collisionDamper);
		}

		// right wall condition
		if (ball.x > (canvas.width - ball.radius)) {
			ball.x = canvas.width - ball.radius - 2;
			ball.vx *= -1;
			ball.vx *= (1 - collisionDamper);
		}

		// left wall condition
		if (ball.x < (ball.radius)) {
			ball.x = ball.radius + 2;
			ball.vx *= -1;
			ball.vx *= (1 - collisionDamper);
		}
	}
}

function Ball(x, y, vx, vy, color) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.color = color;
	this.origX = x;
	this.origY = y;
	this.radius = 10;
}

function animate(canvas, balls, lastTime, mousePos) {
	var context = canvas.getContext("2d");

	// update
	var date = new Date();
	var time = date.getTime();
	var timeDiff = time - lastTime;
	updateBalls(canvas, balls, timeDiff, mousePos);
	lastTime = time;

	// clear
	context.clearRect(0, 0, canvas.width, canvas.height);

	// render
	for (var n = 0; n < balls.length; n++) {
		var ball = balls[n];
		context.beginPath();
		context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
		context.fillStyle = ball.color;
		context.fill();
	}

	// request new frame
	requestAnimFrame(function() {
		animate(canvas, balls, lastTime, mousePos);
	});
}

acm = function() {
	var canvas = document.getElementById("myCanvas");
	var balls = initBalls();
	var date = new Date();
	var time = date.getTime();
	/*
	 * set mouse position really far away
	 * so the mouse forces are nearly obsolete
	 */
	var mousePos = {
		x : 9999,
		y : 9999
	};

	canvas.addEventListener("mousemove", function(evt) {
		var pos = getMousePos(canvas, evt);
		mousePos.x = pos.x;
		mousePos.y = pos.y;
	});

	canvas.addEventListener("mouseout", function(evt) {
		mousePos.x = 9999;
		mousePos.y = 9999;
	});

	animate(canvas, balls, time, mousePos);
};
