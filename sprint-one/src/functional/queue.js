var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counterAdd = 0;
  var counterRemoval = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counterAdd] = value;
    counterAdd++;
  };

  someInstance.dequeue = function(){
    if (counterRemoval < counterAdd) {
      var returnResult = storage[counterRemoval];
      delete storage[counterRemoval];
      counterRemoval++;
      return returnResult;
    }
  };

  someInstance.size = function(){
    return counterAdd - counterRemoval;
  };

  return someInstance;
};

var q = Queue();

/* old version */
//q.enqueue('a'); // q => { 0: 'a' }
//q.enqueue('b'); // q => { 0: 'a', 1: 'b' }
//console.log(q.dequeue()); // q => { 1: 'b' }
//q.enqueue('c'); // q => { 1: 'c' }
//console.log(q.size());

/* with two separate counters */
//q.enqueue('a'); // q => { 0: 'a' } , counterAdd = 1, counterRemoval = 0
//q.enqueue('b'); // q => { 0: 'a', 1: 'b' }, counterAdd = 2, counterRemoval = 0
//console.log(q.dequeue()); // q => { 1: 'b' }, counterAdd = 2, counterRemoval = 1
//q.enqueue('c'); // q => { 1: 'b', 2: 'c'  }, counterAdd = 3, counterRemoval = 1
//console.log(q.size());

//console.log(q.dequeue()); // => 1
//console.log( q ); // => [2,3,4,5<=]

//q.enqueue('a'), counterAdd = 1, counterRemoval = 0
//q.dequeue(), counterAdd = 1, counterRemoval = 1
//q.dequeue(), counterAdd = 1, counterRemoval = 2
//q.size() // => return 0

// q.enqueue('a');
// q.dequeue();
// q.dequeue();
// console.log(q.size());// size should be 0, but what is it now?