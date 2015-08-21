var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj['storage'] = {};
  obj['counterAdd'] = 0;
  obj['counterRemoval'] = 0;
  return obj;
};

var queueMethods = {
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
  },
  'size': function(){
    return this['counterAdd'] - this['counterRemoval'];
  }
};