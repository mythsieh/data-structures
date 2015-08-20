var Stack = function(){
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };
  
  someInstance.pop = function(){
    if( counter > 0 ) {
      counter--;
    }
    var lastValue = storage[counter];
    delete storage[counter];
    return lastValue;
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};

//var storage = {'rex': 'tearex'};
//delete storage;
//console.log(storage);

// var s = Stack();
// s.push('a');
// s.push('b');
// s.push('c');
// console.log(s.pop());