# broccoli-flatten

Flattens file tree, so all files will appear in one directory.
Example. This structure:
```
/srcDir
└┬dir
 ├─file2.js
 └┬dir
  ├─file3.js
  └─file4.js

```
turns into this:
```
/destDir
├─file1.js
├─file2.js
├─file3.js
└─file4.js
```

## Installation

```bash
npm install --save-dev broccoli-flatten
```

## Usage

```js
var flatten = require('broccoli-flatten');
tree = flatten(tree, options);
```

### Options

The following options are supported:

* `destDir` dir where to put all files

###Example
```js
var pickFiles = require('broccoli-static-compiler');
var flatten = require('broccoli-flatten');

// this will flatten files in 'js' folder into anonymous function
var files =  pickFiles('js', {
        srcDir: '/',
        files: ['*/*.js'],
        destDir: '/dist'
      })
var files_flat = flatten('files', { destDir: 'dist' });

module.exports = files_flat;
```