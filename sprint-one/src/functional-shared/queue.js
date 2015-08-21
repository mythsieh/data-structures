var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance['storage'] = {};
  someInstance['counterAdd'] = 0;
  someInstance['counterRemoval'] = 0;
  extend(someInstance, queueMethods);
  return someInstance;
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

var queueMethods = {
  'size':function(){
    return this['counterAdd'] - this['counterRemoval'];
  },
  'enqueue': function(value){
    this['storage'][this['counterAdd']] = value;
    this['counterAdd']++;
  },
  'dequeue': function(){
    if(this['counterRemoval'] < this['counterAdd']) {
      var result = this['storage'][this['counterRemoval']];
      delete this['storage'][this['counterRemoval']];
      this['counterRemoval']++;
      return result;
    }
  }
};


