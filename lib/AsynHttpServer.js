'use strict';
 
 var http=require('http'); 
 var url = require('url');
 var server = http.createServer(function(req,res){

 	res.writeHead(200,{'Content-Type':'text/plain'});
	var urlParts = req.url.split('/');
	
	

 	switch(urlParts[1]){

 		case 'time':
 			  res.write('\n\nCurrent date: '+ Date()+'\n');
			  
 			  break;
 		case 'greet':
 			  res.write('\n\nWelcome '+urlParts[2]+'!!!\n');
 			  break; 
 		default : res.write('\n\nNo Routes hit\n');
 	}

 	res.end();

 });

 server.listen(3000);
