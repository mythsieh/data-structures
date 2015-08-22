

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = {};
  this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return this.nodes[node] === node;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.edges.length; i++) {
      var edge = this.edges[i];
      if ((edge[0] === fromNode && edge[1] === toNode) || (edge[1] === fromNode && edge[0] === toNode)) {
        return true;
      }
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  //if it's a node
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges.push([fromNode, toNode]);
  }
  //connect them
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.edges.length; i++) {
      var edge = this.edges[i];
      if ((edge[0] === fromNode && edge[1] === toNode) || (edge[1] === fromNode && edge[0] === toNode)) {
        this.edges.splice(i, 1);
      }
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */