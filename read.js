var fs = require('fs');
var _ = require('underscore')._;
var LineByLineReader = require('line-by-line')
var redis = require("redis")
var filename = './lexsub_context_embeddings'
var DB = 13

var client = redis.createClient(6369)

lr = new LineByLineReader(filename);

lr.on('error', function (err) {
//'err' contains error object
});
    
lr.on('line', function (line) {
	lr.pause();

	var list = line.split(" ")
	var key = list[0]
	
	list.splice(0, 1);
	
	client.select(DB, function() {
	   	    client.set(key, list, function(err, replies) {

		if (replies != "OK")
			{
			console.log(err)
			console.log(replies)
			process.exit(0)
			}
		
	        lr.resume();

		})
    })
   
});
    //
         lr.on('end', function () {
    console.log("done")
process.exit()
             });
