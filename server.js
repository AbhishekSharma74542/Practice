	console.log("We got Connected Let's Start");
	//Defining Libs
	var app = require('express')();
	var server = require('http').createServer(app);
	var io = require('socket.io')(server);
	io.on('connection', function(){
		console.log("Connection Setup Done !!!")
	});
	server.listen(1338);
	//Defining Libs
	var mysql      = require('mysql');
	
        //Defining Connection to MySQL
	var myconnection = mysql.createConnection({
	host     : 'cgdev2.cf53zztlzwqg.us-east-1.rds.amazonaws.com',
	user     : 'cgdevuser',
	password : 'cgdev123',
	database : 'internDb'
	});

	//Connecting MySQL 
	myconnection.connect(function(err) {
		  if (err) {
		    console.error('error connecting: ' + err.stack);
		    return;
		  }
		 
		  console.log('connected as id ' + myconnection.threadId);
	});

  	
