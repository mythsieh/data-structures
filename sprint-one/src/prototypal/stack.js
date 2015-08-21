var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style
  var obj = Object.create(stackMethods);
  obj['counter'] = 0;
  obj['storage'] = {};
  return obj;
};

var stackMethods = {
  'pop': function(){
    if(this['counter'] > 0) {
      this['counter']--;
      var result = this['storage'][this['counter']];
      delete this['storage'][this['counter']];
      return result;
    }
  },
  'push': function(value){
    this['storage'][this['counter']] = value;
    this['counter']++;
  },
  'size': function(){
    return this['counter'];
  }
};


