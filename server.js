	console.log("We got Connected Let's Start");
	//Defining Libs
	var app = require('express').createServer();
	var io = require('socket.io').listen(app);
	
	app.listen(1338);
	
	app.get('/', function (req, res) {
	  res.sendfile(__dirname + '/index.html');
	});
	
	io.sockets.on('connection', function (socket) {
	    console.log("Connection Done");
	});
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

  	
