var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var mostRecentAdded = Node(value);
    if (list.head === null){
      list.head = mostRecentAdded;
    } else {
      list.tail.next = mostRecentAdded;
    }
    list.tail = mostRecentAdded;
  };

  list.removeHead = function(){
    var formerHead = list.head;
    var newHead = list.head.next;
    list.head = newHead;
    return formerHead.value;
  };

  list.contains = function(target){
    console.log('nodeHead');
    console.log(list.head);
    if(list.head.value === target) {
      return true;
    } else {
      var currentNode = list.head.next;
      while(currentNode !== null){
        if(currentNode.value===target){
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    }
  };
  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//var a = LinkedList();

//a
// {
//   head: null,
//   tail: null
// };

//a.addToTail(4);
// {
//   head: { value: 4, next: null },
//   tail: { value: 4, next: null }
// };

//a.addToTail(5);
// {
//   head: { value: 4, next: {
//                             value: 5,
//                             next: null }
//                           },
//   tail: { value: 5,
// };

//a.removeHead();
/*

{
  head: { value: 5, next: null },
  tail: { value: 5, next: null }
}

*/







    // linkedList.addToTail(4);
    // linkedList.addToTail(5);
   // -->-->--> // expect(linkedList.head.value).to.equal(4);
    // linkedList.removeHead();
    // expect(linkedList.head.value).to.equal(5);
