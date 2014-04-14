var Filter = require('broccoli-filter')

module.exports = WrapFilter;
WrapFilter.prototype = Object.create(Filter.prototype);
WrapFilter.prototype.constructor = WrapFilter;
function WrapFilter (inputTree, options) {
  if (!(this instanceof WrapFilter)) return new WrapFilter(inputTree, options)
  Filter.call(this, inputTree, options)
  this.options = options || {};
}

WrapFilter.prototype.processString = function (string) {
  var wrapper = this.options.wrapper;
  if ( !(wrapper instanceof Array) ) {
    return string;
  }
  var startWith = wrapper[0] || '';
  var endWith = wrapper[1] || '';
  
  return [startWith, string, endWith].join()
}
