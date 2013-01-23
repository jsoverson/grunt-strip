var falafel = require('falafel'),
    fs = require('fs');

exports.stripNodes = function(nodeName, file, dest) {
  "use strict";

  var existsSync = fs.existsSync || require('path').existsSync;

  var src = existsSync(file) ? fs.readFileSync(file) : file;

  var output = falafel(src, function(node){
    if (
        node.type === 'CallExpression' &&
        node.callee.object && node.callee.object.name === nodeName
      ) {
      node.update('0');
    }
  });

  if (dest) {
    return fs.writeFileSync(dest, output);
  } else {
    return output.toString();
  }
};

