var fs = require('fs');

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());

// console.log('syn readfile is over...');


fs.readFile('input.txt',function(err,data) {
	// body...
	if(err) return console.log(err);
	
	console.log('data: '+data.toString());
});

console.log('asyn file read end......');