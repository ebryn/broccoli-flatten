var flatten = require('./index'),
	assert = require('assert'),
	inputTree;

assert(flatten(inputTree).options.destDir==='/', 
	'destDir defaults to "/"');

assert(flatten(inputTree, '/mydir').options.destDir==='/mydir', 
	'string destDir converted to options');

console.log('pass');