var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(obj) {
    var args = Array.prototype.slice.call(arguments);
    for (var i=0; i<args.length; i++) {
      var current = args[i];
      for (var key in current) {
        obj[key] = current[key];
      }
    }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = TreeNode(value);
  this.children.push(child);
};

treeMethods.contains = function(target){

  var kids = this.children;

  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < kids.length; i++){
      var res = kids[i].contains(target);
      if(res===true) {
        return true;
      }
    }
  }
  return false;
};

var TreeNode = function(val){
  var node = {};
  node.value = val;
  node.children = [];
  extend(node, treeMethods);
  return node;
}

//tree.addChild(5);
//tree.addChild(6);
//tree.children[0].addChild(7);
//tree.children[1].addChild(8);
//expect(tree.contains(7)).to.equal(true);
//expect(tree.contains(8)).to.equal(true);

/*
 * Complexity: What is the time complexity of the above functions?
 */
    //  tree.addChild(5);
    // expect(tree.children[0].value).to.equal(5);
