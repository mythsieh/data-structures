var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.addCounter = 0;
  this.removeCounter = 0;
};

Queue.prototype.enqueue = function(value){
  this['storage'][this['addCounter']] = value;
  this['addCounter']++;
};

Queue.prototype.dequeue = function(){
  if( this.removeCounter < this.addCounter){
    var result = this['storage'][this['removeCounter']];
    delete this['storage'][this['removeCounter']];
    this['removeCounter']++;
    return result;
  }
};

Queue.prototype.size = function(){
  return this['addCounter'] - this['removeCounter'];
};