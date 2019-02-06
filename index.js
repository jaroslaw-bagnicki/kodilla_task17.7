var fs = require('fs');
var EventEmmiter = require('events').EventEmitter;
var colors = require('colors');

var emmiter = new EventEmmiter();

fs.readdir('./test-dir', function(err, files) {
  var filesStr = files.join('\n').concat('\n');
  console.log('Files read ...'.green);
  emmiter.emit('files read', filesStr);
})

emmiter.on('files read', function(filesStr) {
  fs.writeFile('./output.txt', filesStr, function(err) {
  if (err) console.error(err);
  console.log('Output written ...'.red);
  })
});

