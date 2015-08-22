var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTreeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var BinarySearchTreeMethods = {
  'insert': function(value){
    var currentNode = this;
    var inserted = false;
    while(!inserted) {

      if(value < currentNode.value) {
        if(currentNode.left!==null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = BinarySearchTree(value);
          inserted = true;
        }
      } else if(value > currentNode.value) {
        if(currentNode.right!==null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = BinarySearchTree(value);
          inserted = true;
        }
      }
    }
  },
  'contains': function(value){
    var currentNode = this;
    var found = false;
    while (!found) {
      if (currentNode.value === value) {
        found = true;
      } else {
        // check value higher or lower than currentNode
        if (currentNode.value > value) {
          // if left node exists
          if (currentNode.left !== null) {
            currentNode = currentNode.left;
          } else {
            break;
          }
        } else {
          // if right node exists
          if (currentNode.right !== null) {
            currentNode = currentNode.right;
          } else {
            break;
          }
        }
      }
    }
    return found;
  },
  'depthFirstLog': function(func){
    var currentNode = this;
    while(currentNode.hasChildren()){
      func(currentNode.value);
      if (currentNode.left !== null){
        currentNode = currentNode.left;
        func(currentNode.value);
      }
      if (currentNode.right !== null){
        currentNode = currentNode.right;
        func(currentNode.value);
      }
    }
  },
  'hasChildren': function(){
    if (this.left !== null || this.right !== null){
      return true;
    } else {
      return false;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

  //   var array = [];
  //   var func = function(value){ array.push(value); };
  //   binarySearchTree.insert(2);
  //   binarySearchTree.insert(3);
  //   binarySearchTree.depthFirstLog(func);
  //   console.log(array);
  //   expect(array).to.eql([5,2,3]);
