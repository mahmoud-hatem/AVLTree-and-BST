
var NodeArray = [];		//[value,N before Ro,N after Ro,XUpdate,YUpdate]
var NodeArray1 = [];	//used in 2nd rotate in double rotate
function New(value, pos) {//save old position befor rotate
    var arr = [value, pos, , 0, 0];
    if (bool) {//to 2nd rotate in double rotation
        NodeArray1.push(arr);
    }
    else {
        NodeArray.push(arr);
    }
};

function NewPostion(value, pos) {//save new position after rotate
    if (bool) {
        for (var i = 0; i < NodeArray1.length; i++) {
            if (NodeArray1[i][0] == value) {
                NodeArray1[i][2] = pos;
                return;
            }
        }
    }
    else {
        for (var i = 0; i < NodeArray.length; i++) {
            if (NodeArray[i][0] == value) {
                NodeArray[i][2] = pos;
                return;
            }
        }
    }

};

function Pos(pos) {//get index of new parent in rotate
    for (var i = 0; i < NodeArray.length; i++) {
        if (NodeArray[i][2] == pos) {
            return i;
        }
    }
    return null;
};

function Line() {//draw lines in rotate
    for (var i = 0; i < NodeArray.length; i++) {
        for (var j = 0; j < NodeArray.length; j++) {
            if (NodeArray[i][2] % 2 == 0) {
                if (NodeArray[j][2] == NodeArray[i][2] / 2) {
                    line_toLeft(arr_X[NodeArray[j][1]] + NodeArray[j][3], arr_Y[NodeArray[j][1]] + NodeArray[j][4]
                        , arr_X[NodeArray[i][1]] + NodeArray[i][3], arr_Y[NodeArray[i][1]] + NodeArray[i][4]);
                }
            }
            else {
                if (NodeArray[j][2] == (NodeArray[i][2] - 1) / 2) {
                    line_toRight(arr_X[NodeArray[j][1]] + NodeArray[j][3], arr_Y[NodeArray[j][1]] + NodeArray[j][4]
                        , arr_X[NodeArray[i][1]] + NodeArray[i][3], arr_Y[NodeArray[i][1]] + NodeArray[i][4]);
                }
            }
        }
    }
};

function update() {//update x,y
    for (var i = 0; i < NodeArray.length; i++) {
        if (arr_X[NodeArray[i][1]] < arr_X[NodeArray[i][2]]) {
            if (arr_X[NodeArray[i][1]] + NodeArray[i][3] <= arr_X[NodeArray[i][2]])
                NodeArray[i][3] += document.getElementById("flying").value / 10;
        }
        else {
            if (arr_X[NodeArray[i][1]] + NodeArray[i][3] >= arr_X[NodeArray[i][2]])
                NodeArray[i][3] -= document.getElementById("flying").value / 10;
        }
        if (arr_Y[NodeArray[i][1]] < arr_Y[NodeArray[i][2]]) {
            if (arr_Y[NodeArray[i][1]] + NodeArray[i][4] <= arr_Y[NodeArray[i][2]])
                NodeArray[i][4] += document.getElementById("flying").value / 10;
        }
        else {
            if (arr_Y[NodeArray[i][1]] + NodeArray[i][4] >= arr_Y[NodeArray[i][2]])
                NodeArray[i][4] -= document.getElementById("flying").value / 10;
        }
    }
};

function CHECK() {//check to end rotate
    for (var i = 0; i < NodeArray.length; i++) {
        if (arr_X[NodeArray[i][1]] < arr_X[NodeArray[i][2]]) {
            if (arr_X[NodeArray[i][1]] + NodeArray[i][3] < arr_X[NodeArray[i][2]])
                return false;
        }
        else {
            if (arr_X[NodeArray[i][1]] + NodeArray[i][3] > arr_X[NodeArray[i][2]])
                return false;
        }
        if (arr_Y[NodeArray[i][1]] < arr_Y[NodeArray[i][2]]) {
            if (arr_Y[NodeArray[i][1]] + NodeArray[i][4] < arr_Y[NodeArray[i][2]])
                return false;
        }
        else {
            if (arr_Y[NodeArray[i][1]] + NodeArray[i][4] > arr_Y[NodeArray[i][2]])
                return false;
        }
    }
    return true;
};

function equal() {//put NodeArray1 in NodeArray
    for (var i = 0; i < NodeArray1.length; i++) {
        New(NodeArray1[i][0], NodeArray1[i][1]);
        NewPostion(NodeArray1[i][0], NodeArray1[i][2]);
    }
    NodeArray1 = [];
};

//=======================
function Anim(TheValue, x, y) {//inset animation
    // clear
    White();
    //Draw
    t.Print(TheValue);
    circle(x, y, TheValue);

    if (NewValueDir == 1) {
        line_toRight(arr_X[(NewValueNumber - 1) / 2], arr_Y[(NewValueNumber - 1) / 2], x, y);
    } else if (NewValueDir == 2) {
        line_toLeft(arr_X[NewValueNumber / 2], arr_Y[NewValueNumber / 2], x, y);
    }

    // update
    if (x <= arr_X[NewValueNumber])
        x += document.getElementById("flying").value / 10;
    if (y <= arr_Y[NewValueNumber])
        y += document.getElementById("flying").value / 10;
    // Animate
    var timer = setTimeout('Anim(' + TheValue + ',' + x + ',' + y + ')', 100 - document.getElementById("flying").value);
    if (x >= arr_X[NewValueNumber] && y >= arr_Y[NewValueNumber]) {
        clearTimeout(timer);
        // clear
        White();
        //Draw
        t.Print(null);
        
        if (!check) {
            setTimeout('t.Balance(' + TheValue + ')', 300);
            check = true;
        }
        else { check = false;
        	setTimeout('t.Balance(' + TheValue + ')', 300);
        	}
    }
};

function rotateAnim(Double) {

    // clear
    White();
    //Draw
    t.RotatePrint();
	//draw circles
    for (var i = 0; i < NodeArray.length; i++) {
        circle(arr_X[NodeArray[i][1]] + NodeArray[i][3], arr_Y[NodeArray[i][1]] + NodeArray[i][4], NodeArray[i][0]);
    }
    //draw lines
    Line();
    if (Double) {
        if (NodeArray[NodeArray.length-1][1] != 1) {
            if (NodeArray[NodeArray.length - 1][1] % 2 == 0) {
                var index = Pos(NodeArray[NodeArray.length - 1][1])
                if (index != null) {
                    line_toLeft(arr_X[NodeArray[NodeArray.length - 1][1] / 2], arr_Y[NodeArray[NodeArray.length - 1][1] / 2],
                        arr_X[NodeArray[index][1]] + NodeArray[index][3], arr_Y[NodeArray[index][1]] + NodeArray[index][4]);
                }
            }
            else {
                var index = Pos(NodeArray[NodeArray.length - 1][1])
                if (index != null) {
                    line_toRight(arr_X[(NodeArray[NodeArray.length - 1][1] - 1) / 2], arr_Y[(NodeArray[NodeArray.length - 1][1] - 1) / 2],
                        arr_X[NodeArray[index][1]] + NodeArray[index][3], arr_Y[NodeArray[index][1]] + NodeArray[index][4]);
                }
            }
        }

    }

    else if (NodeArray[0][1] != 1) {
        if (NodeArray[0][1] % 2 == 0) {
            var index = Pos(NodeArray[0][1])
            if (index != null) {
                line_toLeft(arr_X[NodeArray[0][1] / 2], arr_Y[NodeArray[0][1] / 2],
                    arr_X[NodeArray[index][1]] + NodeArray[index][3], arr_Y[NodeArray[index][1]] + NodeArray[index][4]);
            }
        }
        else {
            var index = Pos(NodeArray[0][1])
            if (index != null) {
                line_toRight(arr_X[(NodeArray[0][1] - 1) / 2], arr_Y[(NodeArray[0][1] - 1) / 2],
                    arr_X[NodeArray[index][1]] + NodeArray[index][3], arr_Y[NodeArray[index][1]] + NodeArray[index][4]);
            }
        }
    }

    //update
    update();

    // Animate
    var timer = setTimeout('rotateAnim(' + Double + ')', 100 - document.getElementById("flying").value);
    if (CHECK()) {
        // clear
        White();
        //Draw
        clearTimeout(timer);
        if (!Double) {
            t.Print(null);
            NodeArray = [];
            DisAble(false);
        }
        else {
            t.RotatePrint();
            NodeArray = [];
            equal();
            rotateAnim(false);
        }

    }
};
//-----------------------------------------------------------------------------------------------
function DisplaySearch(index, x) {//trace search function
	if (SearchMap.length != 0) {
		if (index == 0) {
			Search_Animation = SearchMap[0][0];
			Node_coordeinat(SearchMap[0][0], Root_height + 1, 0, SearchMap[0][1], null);
		} else {
			Search_Animation = SearchMap[index][0];
			Node_coordeinat(SearchMap[index][0], Root_height + 1, 0, SearchMap[index][1], null);
			Node_coordeinat(SearchMap[index - 1][0], Root_height + 1, 0, SearchMap[index - 1][1], null);
		}
		index += 1
		var timer = setTimeout('DisplaySearch(' + index + ',' + x + ')', 500);
	}
	if (index == SearchMap.length) {
		var s = document.getElementById("value");
		s = Number(s.value);
		clearTimeout(timer);
		if (x != null) {
			textarea.value = s + " was Found";
		} else {
			textarea.value = s + " was Not Found";
		}
		Search_Animation = 0;
		setTimeout('t.Print(' + null + ')', 1000);
		SearchMap = [];
		DisAble(false);
	}
};

function DisplayTraversal(index) {
	if (SearchMap.length != 0) {
		if (index == 0) {
			Search_Animation = SearchMap[0][0];
			Node_coordeinat(SearchMap[0][0], Root_height + 1, 0, SearchMap[0][1], null);
		} else {
			Search_Animation = SearchMap[index][0];
			Node_coordeinat(SearchMap[index][0], Root_height + 1, 0, SearchMap[index][1], null);
			Node_coordeinat(SearchMap[index - 1][0], Root_height + 1, 0, SearchMap[index - 1][1], null);
		}
		textarea.value += SearchMap[index][1] + " ";
		index += 1;
		var timer = setTimeout('DisplayTraversal(' + index + ')', 500);
	}
	if (index == SearchMap.length) {
		clearTimeout(timer);
		Search_Animation = 0;
		setTimeout('t.Print(' + null + ')', 1000);
		SearchMap = [];
		DisAble(false);
	}
};

function DisplayInsert(index, value) {
	if (SearchMap.length != 0) {
		if (index == 0) {
			Search_Animation = SearchMap[0][0];
			Node_coordeinat(SearchMap[0][0], Root_height + 1, 0, SearchMap[0][1], null);
		} else {
			Search_Animation = SearchMap[index][0];
			Node_coordeinat(SearchMap[index][0], Root_height + 1, 0, SearchMap[index][1], null);
			Node_coordeinat(SearchMap[index - 1][0], Root_height + 1, 0, SearchMap[index - 1][1], null);
		}
		index += 1;
		var timer = setTimeout('DisplayInsert(' + index + ',' + value + ')', 500);
	}

	if (index == SearchMap.length) {
		clearTimeout(timer);
		Search_Animation = 0;
		setTimeout('Anim(' + value + ',' + 30 + ',' + 30 + ')', 1000);
		SearchMap = [];
	}
};

function DisplayDelete(index) {
	if (SearchMap.length != 0) {
		if (index == 0) {
			Search_Animation = SearchMap[0][0];
			Node_coordeinat(SearchMap[0][0], Root_height + 1, 0, SearchMap[0][1], null);
		} else {
			Search_Animation = SearchMap[index][0];
			Node_coordeinat(SearchMap[index][0], Root_height + 1, 0, SearchMap[index][1], null);
			Node_coordeinat(SearchMap[index - 1][0], Root_height + 1, 0, SearchMap[index - 1][1], null);
		}
		index += 1;
		var timer = setTimeout('DisplayDelete(' + index + ')', 500);
	}
	if (index == SearchMap.length) {
		clearTimeout(timer);
		Search_Animation = 0;
		setTimeout('White()', 1000);
		setTimeout('t.Print(' + null + ')', 1000);
		SearchMap = [];
		DisAble(false);
	}
};

function DisplayFound(index, value) {
	if (SearchMap.length != 0) {
		if (index == 0) {
			Search_Animation = SearchMap[0][0];
			Node_coordeinat(SearchMap[0][0], Root_height + 1, 0, SearchMap[0][1], null);
		} else {
			Search_Animation = SearchMap[index][0];
			Node_coordeinat(SearchMap[index][0], Root_height + 1, 0, SearchMap[index][1], null);
			Node_coordeinat(SearchMap[index - 1][0], Root_height + 1, 0, SearchMap[index - 1][1], null);
		}
		index += 1;
		var timer = setTimeout('DisplayFound(' + index + ',' + value + ')', 500);
	}

	if (index == SearchMap.length) {
		clearTimeout(timer);
		textarea.value = value + " is exist before.";
		Search_Animation = 0;
		setTimeout('t.Print(' + null + ')', 500);
		SearchMap = [];
	}
};
