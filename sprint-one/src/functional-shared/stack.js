var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj['storage'] = {};
  obj['counter'] = 0;
  extend(obj, stackMethods);
  return obj;
};

var extend = function(obj){
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    var current = args[i];
    for (var key in current) {
      obj[key] = current[key];
    }
  }
};

var stackMethods = {
  'push': function(value){
    this['storage'][this['counter']] = value;
    this['counter']++;
  },
  'pop': function(){
    if (this['counter'] > 0) {
        this['counter']--;
    }
    var result = this['storage'][this['counter']];
    delete this['storage'][this['counter']];
    return result;
  },
  'size': function(){
    return this['counter'];
  }
};

// var q = Stack();
// console.log(q.size());

// var s = Stack();
// //AssertionError: expected undefined to equal 'b'
// s.push('a'); // {'storage': {}, 'counter': 0}
// s.push('b');
// s.push('c');
// s.pop();
// console.log(s.pop());//'b';

