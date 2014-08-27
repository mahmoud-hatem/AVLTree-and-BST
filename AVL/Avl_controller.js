function node(pval) {//to make a new node
	this.left = undefined;//left node
	this.right = undefined;//right node
	this.value = pval;//value of node
	this.height = -1;//height of this node
	this.N = 0;//number of this node in the all tree
	this.D = 0;//the direction where it come from left or right
};

function AVLTree() {//make new AVL Tree
	this._root = new node();//the root 
};

var Root_height = 0;//the height of the tree
var NewValueNumber, NewValueDir, Search_Animation = 0;	// the last value was inserted , the last node direction , used in draw in animation
var bool = false, Button = false;  // used in Double Rotate , to turn on the button if there isn't animation'
var SearchMap = [];//this array to put number in trace

AVLTree.prototype.Last_Node_Number = function(NewValue) {//number of last node
	return this.Get_Last_Node_Number(this._root, 1, NewValue);
};

AVLTree.prototype.Get_Last_Node_Number = function(pnode, X, NewValue) {//recursion of Last_Node_Number
	if (pnode.value == null) {
		return X;
	} else if (NewValue < pnode.value) {
		return this.Get_Last_Node_Number(pnode.left, 2 * X, NewValue);
	} else if (NewValue > pnode.value) {
		return this.Get_Last_Node_Number(pnode.right, (2 * X) + 1, NewValue);
	} else if (NewValue == pnode.value) {
		return null;
	}
};

AVLTree.prototype.add = function(pval) {//add a number to the tree
	this._root = this.add_worker(this._root, pval);
	Root_height = this._root.height;
};


AVLTree.prototype.add_worker = function(tmp, pval) {//recursion of add a number to the tree
    if (tmp.value == null) {
        if (SearchMap.length != 0) {//used in trace
            if (SearchMap[SearchMap.length - 1][1] < pval)
                SearchMap.push([(2 * SearchMap[SearchMap.length - 1][0]) + 1, ""]);
            else
                SearchMap.push([2 * SearchMap[SearchMap.length - 1][0], ""]);
        }
        else {//if root
            SearchMap.push([1, ""]);
        }
         if (!Trace) {
            SearchMap = [];
        };
		DisplayInsert(0, pval);//used in trace
		//---------------------
		tmp = new node(pval);
		if (!tmp.right) {
			tmp.right = new node(null);
		}
		if (!tmp.left) {
			tmp.left = new node(null);
		}
	} else if (tmp.value > pval) {
		SearchMap.push([tmp.N, tmp.value]);
		tmp.left = this.add_worker(tmp.left, pval);
	} else if (tmp.value < pval) {
		SearchMap.push([tmp.N, tmp.value]);
		tmp.right = this.add_worker(tmp.right, pval);
	}
	else if (tmp.value == pval) {
	    SearchMap.push([tmp.N, tmp.value]);
	}
	tmp.height = (this.height_worker(tmp.left)) >= (this.height_worker(tmp.right)) ? this.height_worker(tmp.left) + 1 : this.height_worker(tmp.right) + 1;
	return tmp;
};

AVLTree.prototype.Balance = function(pval) {//used to check in balance for new node
	this._root = this.Balance_worker(this._root, pval);
	Root_height = this._root.height;
	if (Button == false) {
		DisAble(false);
	} else {
		Button = false;
	}
};

AVLTree.prototype.Balance_worker = function(tmp, pval) {
	if (tmp.value == pval) {
		//============================
		//============================
	} else if (tmp.value > pval) {
		tmp.left = this.Balance_worker(tmp.left, pval);
		if (this.height_worker(tmp.left) - this.height_worker(tmp.right) == 2) {//go to rotate
			if (pval < tmp.left.value) {
				textarea.value += "....Rotate With Left Child....";
				DisAble(true);
				Button = true;
				this.NewNodes(tmp);//save places befor rotate
				//===============================================================
				this.k1 = tmp.left;
				tmp.left = this.k1.right;
				this.k1.right = tmp;
				tmp.height = (this.height_worker(tmp.left)) >= (this.height_worker(tmp.right)) ? (this.height_worker(tmp.left)) + 1 : (this.height_worker(tmp.right)) + 1;
				this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
				tmp = this.k1;
				delete this.k1;
				//===================================================
				this.GetNewPostion(tmp.right.N, tmp);//save places after rotate
				rotateAnim(false);//animation of rotation
			} else {
				textarea.value += "....Double Rotate With Left Child....";
				DisAble(true);
				Button = true;
				this.NewNodes(tmp.left);
				//==================================================================
				this.k1 = tmp.left.right;
				tmp.left.right = this.k1.left;
				this.k1.left = tmp.left;
				tmp.left.height = (this.height_worker(tmp.left.left)) >= (this.height_worker(tmp.left.right)) ? (this.height_worker(tmp.left.left)) + 1 : (this.height_worker(tmp.left.right)) + 1;
				this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
				tmp.left = this.k1;
				//==================================================================
				this.GetNewPostion(tmp.left.left.N, tmp.left);
				New(tmp.value, tmp.N);
				NewPostion(tmp.value, tmp.N);
				rotateAnim(true);

				bool = true;
				this.NewNodes(tmp);
				//=================================================
				this.k1 = tmp.left;
				tmp.left = this.k1.right;
				this.k1.right = tmp;
				tmp.height = (this.height_worker(tmp.left)) >= (this.height_worker(tmp.right)) ? (this.height_worker(tmp.left)) + 1 : (this.height_worker(tmp.right)) + 1;
				this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
				tmp = this.k1;
				delete this.k1;
				//===================================================
				this.GetNewPostion(tmp.right.N, tmp);
				bool = false;
			}
		}

	} else if (tmp.value < pval) {
		tmp.right = this.Balance_worker(tmp.right, pval);
		if (this.height_worker(tmp.right) - this.height_worker(tmp.left) == 2) {

			if (pval > tmp.right.value) {
				textarea.value += "....Rotate With Right Child....";
				DisAble(true);
				Button = true;
				this.NewNodes(tmp);
				//=========================
				this.k1 = tmp.right;
				tmp.right = this.k1.left;
				this.k1.left = tmp;
				tmp.height = (this.height_worker(tmp.left)) >= (this.height_worker(tmp.right)) ? (this.height_worker(tmp.left)) + 1 : (this.height_worker(tmp.right)) + 1;
				this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
				tmp = this.k1;
				delete this.k1;
				//===================================
				this.GetNewPostion(tmp.left.N, tmp);
				rotateAnim(false);

			} else {
				textarea.value += "....Double Rotate With Right Child....";
				DisAble(true);
				Button = true;
				this.NewNodes(tmp.right);
				//=================================
				this.k1 = tmp.right.left;
				tmp.right.left = this.k1.right;
				this.k1.right = tmp.right;
				tmp.right.height = (this.height_worker(tmp.right.left)) >= (this.height_worker(tmp.right.right)) ? (this.height_worker(tmp.right.left)) + 1 : (this.height_worker(tmp.right.right)) + 1;
				this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
				tmp.right = this.k1;
				//============================================
				this.GetNewPostion(tmp.right.right.N, tmp.right);
				New(tmp.value, tmp.N);
				NewPostion(tmp.value, tmp.N);
				rotateAnim(true);

				bool = true;
				this.NewNodes(tmp);
				//=========================
				this.k1 = tmp.right;
				tmp.right = this.k1.left;
				this.k1.left = tmp;
				tmp.height = (this.height_worker(tmp.left)) >= (this.height_worker(tmp.right)) ? (this.height_worker(tmp.left)) + 1 : (this.height_worker(tmp.right)) + 1;
				this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
				tmp = this.k1;
				delete this.k1;
				//==========================
				this.GetNewPostion(tmp.left.N, tmp);
				bool = false;
			}
		}

	}
	tmp.height = (this.height_worker(tmp.left)) >= (this.height_worker(tmp.right)) ? this.height_worker(tmp.left) + 1 : this.height_worker(tmp.right) + 1;
	return tmp;
};

// A utility function to get height of the tree
AVLTree.prototype.height_worker = function(pnode) {
	if (pnode)
		return pnode.height;
	else
		return -1;
};
///======================================================
AVLTree.prototype.NewNodes = function(subtree) {
	if (subtree.value == null)
		return;
	New(subtree.value, subtree.N);

	this.NewNodes(subtree.left);
	this.NewNodes(subtree.right);
};
AVLTree.prototype.GetNewPostion = function(x, subtree) {
	if (subtree.value == null)
		return;
	NewPostion(subtree.value, x);
	this.GetNewPostion(2 * x, subtree.left);
	this.GetNewPostion((2 * x) + 1, subtree.right);
};

AVLTree.prototype.RotatePrint = function() {
	return this.RotateGetPrint(this._root, 0, 1);
};
AVLTree.prototype.RotateGetPrint = function(pnode, ch, X) {
	if (pnode.value == null) {
		return undefined;
	} else {
		pnode.N = X;
		var N_Parent = this.GetParentLevel(pnode)[0];
		pnode.D = ch;
		var ch = true;
		for (var i = 0; i < NodeArray.length; i++) {
			if (pnode.value == NodeArray[i][0]) {
				ch = false;
				break;

			}
		}
		if (ch)
			Node_coordeinat(pnode.N, Root_height + 1, pnode.D, pnode.value, N_Parent);
		this.RotateGetPrint(pnode.left, 2, 2 * X);
		this.RotateGetPrint(pnode.right, 1, (2 * X) + 1);
	}
};
//==============================================================
AVLTree.prototype.Print = function(NewValue) {//print all tree except the last node
	return this.GetPrint(this._root, 0, 1, NewValue);
};

AVLTree.prototype.GetPrint = function(pnode, ch, X, NewValue) {
	if (pnode.value == null) {
		return undefined;
	} else {
		pnode.N = X;
		var N_Parent = this.GetParentLevel(pnode)[0];
		pnode.D = ch;
		if (pnode.value != NewValue) {
			Node_coordeinat(pnode.N, Root_height + 1, pnode.D, pnode.value, N_Parent);
		} else {
			NewValueNumber = pnode.N;
			NewValueDir = pnode.D;
		}
		this.GetPrint(pnode.left, 2, 2 * X, NewValue);
		this.GetPrint(pnode.right, 1, (2 * X) + 1, NewValue);
	}
};
//--------------------------------------------------
AVLTree.prototype.GetParentLevel = function(psearch) {//get level of parent
	return this.GetParent(this._root, psearch);
};

AVLTree.prototype.GetParent = function(pnode, psearch) {
	if (pnode == psearch) {
		return [0, 0];
	} else if (psearch.value < pnode.value) {
		if (pnode.left == psearch) {
			return [pnode.N, pnode.value];
		}
		return this.GetParent(pnode.left, psearch);
	} else if (psearch.value > pnode.value) {
		if (pnode.right == psearch) {
			return [pnode.N, pnode.value];
		}
		return this.GetParent(pnode.right, psearch);
	}
};
//-------------------------------------------------
AVLTree.prototype.search = function(psearch) {// to get number to search
	var x = this._search_worker(this._root, psearch);
	Search_Animation = 0;
	return x;
};

AVLTree.prototype._search_worker = function(pnode, psearch) {
	if (pnode.value == null) {
		return undefined;
	} else if (psearch < pnode.value) {
		SearchMap.push([pnode.N, pnode.value]);
		return this._search_worker(pnode.left, psearch);
	} else if (psearch > pnode.value) {
		SearchMap.push([pnode.N, pnode.value]);
		return this._search_worker(pnode.right, psearch);
	} else if (psearch == pnode.value) {
		SearchMap.push([pnode.N, pnode.value]);
		return pnode.value;
	}
};
//-----------------------------------------------
AVLTree.prototype.PREORDERTRAVERSAL = function() {
	this.PREORDERTRAVERSAL_worker(this._root);
	Search_Animation = 0;
	this.Print(null);
};

AVLTree.prototype.PREORDERTRAVERSAL_worker = function(pnode) {
	if (!pnode) {
		return undefined;
	} else {
		if (pnode.value != null) {
			SearchMap.push([pnode.N, pnode.value]);
		}
		this.PREORDERTRAVERSAL_worker(pnode.left);
		this.PREORDERTRAVERSAL_worker(pnode.right);
	}
};

AVLTree.prototype.INORDERTRAVERSAL = function() {
	this.INORDERTRAVERSAL_worker(this._root);
	Search_Animation = 0;
	this.Print(null);
};

AVLTree.prototype.INORDERTRAVERSAL_worker = function(pnode) {
	if (!pnode) {
		return undefined;
	} else {
		this.INORDERTRAVERSAL_worker(pnode.left);
		if (pnode.value != null) {
			SearchMap.push([pnode.N, pnode.value]);
		}
		this.INORDERTRAVERSAL_worker(pnode.right);
	}
};

AVLTree.prototype.POSTORDERTRAVERSAL = function() {
	this.POSTORDERTRAVERSAL_worker(this._root);
	Search_Animation = 0;
	this.Print(null);
};

AVLTree.prototype.POSTORDERTRAVERSAL_worker = function(pnode) {
	if (!pnode) {
		return undefined;
	} else {
		this.POSTORDERTRAVERSAL_worker(pnode.left);
		this.POSTORDERTRAVERSAL_worker(pnode.right);
		if (pnode.value != null) {
			SearchMap.push([pnode.N, pnode.value]);
		}
	}
};
//--------------------------------------------
AVLTree.prototype.clear = function() {
	this._root = new node();
};

AVLTree.prototype.delete_node = function(psearch) {
	this.delete_final(psearch, this._root);
};

// Get Balance factor of node N
AVLTree.prototype.getBalance = function(N) {
	if (N.value == null)
		return 0;
	return this.height_worker(N.left) - this.height_worker(N.right);
};

/* Given a non-empty binary search tree, return the node with minimum
 value value found in that tree. Note that the entire tree does not
 need to be searched. */
AVLTree.prototype.minValueNode = function(node) {
	this.current = node;

	/* loop down to find the leftmost leaf */
	while (this.current.left.value != null)
	this.current = this.current.left;

	return this.current;
};
AVLTree.prototype.delete_node = function(psearch) {
	this._root = this.deleteNode(this._root, psearch);
};
AVLTree.prototype.deleteNode = function(root, value) {
	// STEP 1: PERFORM STANDARD BST DELETE

	if (root.value == null)
		return root;

	// If the value to be deleted is smaller than the root's value,
	// then it lies in left subtree
	if (value < root.value)
		root.left = this.deleteNode(root.left, value);

	// If the value to be deleted is greater than the root's value,
	// then it lies in left subtree
	else if (value > root.value)
		root.right = this.deleteNode(root.right, value);

	// if value is same as root's value, then This is the node
	// to be deleted
	else {
		// node with only one child or no child
		if ((root.left.value == null) || (root.right.value == null)) {
			this.temp = root.left.value ? root.left : root.right;

			// No child case
			if (this.temp.value == null) {
				this.temp = root;
				root = new node(null);
				;
			} else// One child case
				root = this.temp;
			// Copy the contents of the non-empty child

			delete temp;
		} else {
			// node with two children: Get the inorder successor (smallest
			// in the right subtree)
			this.temp = this.minValueNode(root.right);

			// Copy the inorder successor's data to this node
			root.value = this.temp.value;

			// Delete the inorder successor
			root.right = this.deleteNode(root.right, this.temp.value);
		}
	}

	// If the tree had only one node then return
	if (root.value == null)
		return root;

	// STEP 2: UPDATE HEIGHT OF THE CURRENT NODE
	root.height = (this.height_worker(root.left)) >= (this.height_worker(root.right)) ? this.height_worker(root.left) + 1 : this.height_worker(root.right) + 1;

	// STEP 3: GET THE BALANCE FACTOR OF THIS NODE (to check whether
	//  this node became unbalanced)
	var balance = this.getBalance(root);

	// If this node becomes unbalanced, then there are 4 cases

	// Left Left Case
	if (balance > 1 && this.getBalance(root.left) >= 0) {
		//Rotate with left child
		this.k1 = root.left;
		root.left = this.k1.right;
		this.k1.right = root;
		root.height = (this.height_worker(root.left)) >= (this.height_worker(root.right)) ? (this.height_worker(root.left)) + 1 : (this.height_worker(root.right)) + 1;
		this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
		root = this.k1;
		delete this.k1;
	}

	// Left Right Case
	if (balance > 1 && this.getBalance(root.left) < 0) {
		//Double Rotate with Left Child
		this.k1 = root.left.right;
		root.left.right = this.k1.left;
		this.k1.left = root.left;
		root.left.height = (this.height_worker(root.left.left)) >= (this.height_worker(root.left.right)) ? (this.height_worker(root.left.left)) + 1 : (this.height_worker(root.left.right)) + 1;
		this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
		root.left = this.k1;
		this.k1 = root.left;
		root.left = this.k1.right;
		this.k1.right = root;
		root.height = (this.height_worker(root.left)) >= (this.height_worker(root.right)) ? (this.height_worker(root.left)) + 1 : (this.height_worker(root.right)) + 1;
		this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
		root = this.k1;
		delete this.k1;
	}

	// Right Right Case
	if (balance < -1 && this.getBalance(root.right) <= 0) {
		//Rotate with Right child
		this.k1 = root.right;
		root.right = this.k1.left;
		this.k1.left = root;
		root.height = (this.height_worker(root.left)) >= (this.height_worker(root.right)) ? (this.height_worker(root.left)) + 1 : (this.height_worker(root.right)) + 1;
		this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
		root = this.k1;
		delete this.k1;
	}

	// Right Left Case
	if (balance < -1 && this.getBalance(root.right) > 0) {
		//Double Rotate with Right Child
		this.k1 = root.right.left;
		root.right.left = this.k1.right;
		this.k1.right = root.right;
		root.right.height = (this.height_worker(root.right.left)) >= (this.height_worker(root.right.right)) ? (this.height_worker(root.right.left)) + 1 : (this.height_worker(root.right.right)) + 1;
		this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
		root.right = this.k1;
		this.k1 = root.right;
		root.right = this.k1.left;
		this.k1.left = root;
		root.height = (this.height_worker(root.left)) >= (this.height_worker(root.right)) ? (this.height_worker(root.left)) + 1 : (this.height_worker(root.right)) + 1;
		this.k1.height = (this.height_worker(this.k1.left)) >= (this.height_worker(this.k1.right)) ? (this.height_worker(this.k1.left)) + 1 : (this.height_worker(this.k1.right)) + 1;
		root = this.k1;
		delete this.k1;
	}

	return root;
};

///////////////////////////the end///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

