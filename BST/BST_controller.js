function node(pval) {
	this.left = undefined;
	this.right = undefined;
	this.value = pval;
	this.height = -1;
	this.N = 0;
	//its number
	this.D = 0;
	//direction
};

function BST() {
	this._root = new node();
};

Root_height = 0;
var NewValueNumber, NewValueDir,Search_Animation=0;
var SearchMap = [];

BST.prototype.Last_Node_Number = function(NewValue) {
	return this.Get_Last_Node_Number(this._root, 1, NewValue);
};

BST.prototype.Get_Last_Node_Number = function(pnode, X, NewValue) {
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

BST.prototype.add = function(pval) {
	this._root = this.add_worker(this._root, pval);
	Root_height = this._root.height;
	//Anim(pval, 30, 30);
};

// A utility function to get height of the tree
BST.prototype.add_worker = function(tmp, pval) {
    if (tmp.value == null) {
        if (SearchMap.length != 0) {
            if (SearchMap[SearchMap.length - 1][1] < pval)
                SearchMap.push([(2 * SearchMap[SearchMap.length - 1][0]) + 1, ""]);
            else
                SearchMap.push([2 * SearchMap[SearchMap.length - 1][0], ""]);
        }
        else {
            SearchMap.push([1, ""]);
        }
         if (!Trace) {
            SearchMap = [];
        };
        DisplayInsert(0, pval);
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

BST.prototype.height_worker = function(pnode) {
	if (pnode)
		return pnode.height;
	else
		return -1;
};

BST.prototype.Print = function(NewValue) {
	return this.GetPrint(this._root, 0, 1, NewValue);
};

BST.prototype.GetPrint = function(pnode, ch, X, NewValue) {
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

BST.prototype.GetParentLevel = function (psearch) {
    return this.GetParent(this._root, psearch);
};

BST.prototype.GetParent = function (pnode, psearch) {
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
}

BST.prototype.search = function (psearch) {
    var x=this._search_worker(this._root, psearch);
    Search_Animation=0;
    return x;
};

BST.prototype._search_worker = function (pnode, psearch) {
    if (pnode.value == null) {
        return undefined;
    }
    else if (psearch < pnode.value) {
        SearchMap.push([pnode.N, pnode.value]);
        return this._search_worker(pnode.left, psearch);
    }
    else if (psearch > pnode.value) {
        SearchMap.push([pnode.N, pnode.value]);
        return this._search_worker(pnode.right, psearch);
    }
    else if (psearch == pnode.value) {
        SearchMap.push([pnode.N, pnode.value]);
        return pnode.value;
    }
};

BST.prototype.PREORDERTRAVERSAL = function () {
    this.PREORDERTRAVERSAL_worker(this._root);
    Search_Animation=0;
};

BST.prototype.PREORDERTRAVERSAL_worker = function (pnode) {
    if (!pnode) {
        return undefined;
    }
    else {
        if (pnode.value != null) {
            SearchMap.push([pnode.N, pnode.value]);
        }
        this.PREORDERTRAVERSAL_worker(pnode.left);
        this.PREORDERTRAVERSAL_worker(pnode.right);
    }
};

BST.prototype.INORDERTRAVERSAL = function () {
    this.INORDERTRAVERSAL_worker(this._root);
    Search_Animation=0;
};

BST.prototype.INORDERTRAVERSAL_worker = function (pnode) {
    if (!pnode) {
        return undefined;
    }
    else {
        this.INORDERTRAVERSAL_worker(pnode.left);
        if (pnode.value != null) {
            SearchMap.push([pnode.N, pnode.value]);
        }
        this.INORDERTRAVERSAL_worker(pnode.right);
    }
};

BST.prototype.POSTORDERTRAVERSAL = function () {
    this.POSTORDERTRAVERSAL_worker(this._root);
    Search_Animation=0;
};

BST.prototype.POSTORDERTRAVERSAL_worker = function (pnode) {
    if (!pnode) {
        return undefined;
    }
    else {
        this.POSTORDERTRAVERSAL_worker(pnode.left);
        this.POSTORDERTRAVERSAL_worker(pnode.right);
        if (pnode.value != null) {
            SearchMap.push([pnode.N, pnode.value]);
        }
    }
};
BST.prototype.clear = function() {
	this._root = new node();
};

/* Given a non-empty binary search tree, return the node with minimum
 value value found in that tree. Note that the entire tree does not
 need to be searched. */
BST.prototype.minValueNode = function(node) {
	this.current = node;

	/* loop down to find the leftmost leaf */
	while (this.current.left.value != null)
	this.current = this.current.left;

	return this.current;
};
BST.prototype.delete_node = function(psearch) {
	this._root = this.deleteNode(this._root, psearch);
	//Root_height = this._root.height;
};
BST.prototype.deleteNode = function(root, value) {
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

	return root;
};

///////////////////////////the end///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

