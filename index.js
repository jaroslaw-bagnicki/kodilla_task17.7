var fs = require('fs');
var colors = require('colors');

fs.readdir('./test-dir', function(err, files) {
  var filesStr = files.join('\n').concat('\n');
  console.log('Files read ...'.green);

  fs.writeFile('./output.txt', filesStr, function(err) {
    if (err) console.error(err);
    console.log('Output written ...'.red);
  })
})