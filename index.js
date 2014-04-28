var path = require('path')
var helpers = require('broccoli-kitchen-sink-helpers')
var Writer = require('broccoli-writer');

module.exports = Flatten;
Flatten.prototype = Object.create(Writer.prototype);
Flatten.prototype.constructor = Flatten;
function Flatten (inputTree, options) {
  if (!(this instanceof Flatten)) return new Flatten(inputTree, options);
  
  if(typeof options === 'string'){
    options = { destDir: options };
  } 
  else {
    options = options || {};
    options.destDir = options.destDir || '/';
  }

  this.inputTree = inputTree;
  this.options = options;
};

Flatten.prototype.write = function (readTree, destDir) {
  var self = this

  return readTree(this.inputTree).then(function (srcDir) {
    var baseDir = path.join(srcDir)
    var files = helpers.multiGlob(['**/*.*'], {
      cwd: baseDir,
      root: baseDir,
      expand: true,
      nomount: false
    })

    for (var i = 0; i < files.length; i++) {
      helpers.copyRecursivelySync(
        path.join(srcDir, files[i]),
        path.join(destDir, self.options.destDir, path.basename(files[i]))
      )
    }

  })
};