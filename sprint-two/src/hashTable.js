var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //case 1: i=0, v: 'val1'
  //case 2: i=0, v: 'val2'

  var returnedArray = this._storage.get(i);
  if (returnedArray === null) {
    this._storage.set(i, [[k, v]]);
  } else if( returnedArray === undefined) {
    this._storage.set(i, [[k, v]]);
  } else if (k === returnedArray[0][0]){
    this._storage.set(i, [[k, v]]);
  } else {
    //TODO We did not iterate, it is hard coded below.
    if( returnedArray[0] !== k || returnedArray[1] !== v) {
      returnedArray.push([k, v]);
      this._storage.set(i, returnedArray);
    } else {
      this._storage.set(i, [k, v]);
    }
    // if returnedArray is not equal to [k, v]
      // push [k, v] to returned Array
  }

  // if value already exists
    //  variable = value;
    // replace value with an array
    // put variable in array // [[k1, v1],[k2,v2]]
    // put newvalue in array

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // the i will be retrieved by the hash function
  // use get to retrieve the value at index of whatever Seagal was stored at
  var returnedArray = this._storage.get(i);
  // returnedArray === [['val1','val1'],['val2','val2']]
  if(returnedArray === null) {
    return null;
  }
  for (var i = 0; i < returnedArray.length; i++) {
    var current = returnedArray[i]; // ['val1', 'val1'];
    if (current[0] === k) {
      return (current[1]);
    }
  }
  console.log(returnedArray);
  //returnedArray
  //setOnce [['k1', 'val1']]
  //setTwice [['k1','val1],['k2','val2']]
  return returnedArray[1];

  // if value is an array
    // loop through array
      // return
      // => [['v1','val1'],['v2','val2']]
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};

// LimitedArray interface:
// var larr = LimitedArray();
// larr.get(index);
// larr.set(index, value);
// larr.each(callback);

//var v1 = "val1";
//var v2 = "val2";
//var oldHashFunction = window.getIndexBelowMaxForKey;
//window.getIndexBelowMaxForKey = function() { return 0; };
//hashTable.insert(v1, v1);
//hashTable.insert(v2, v2);
//expect(hashTable.retrieve(v1)).to.equal(v1);
//expect(hashTable.retrieve(v2)).to.equal(v2);
//window.getIndexBelowMaxForKey = oldHashFunction;


/*
 * Complexity: What is the time complexity of the above functions?
 */
