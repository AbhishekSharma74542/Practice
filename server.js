	//127.0.0.1/8 Local Host 172.31.57.218
	console.log("We got Connected Let's Start");
	 var app = require('express')();
	//Defining Libs
	var server = require('http').createServer();
	var io = require('socket.io')(server);
	io.on('connection', function(socket){
	  socket.on('data', function(data){
	  	console.log("Event Occured");
	  	console.log("Data"+data);
	  	
	  });
	  socket.on('disconnect', function(){
	  	console.log("Disconnected");
	  	
	  });
	});
	server.listen(1330);
	var http = require('http').Server(app);
	
	app.get('/', function(req, res){
	
	  //send the index.html file for all requests
	  res.sendFile(__dirname + '/index.html');
	
	});
	
	
	//for testing, we're just going to send data to the client every second
	setInterval( function() {
	
	  /*
	    our message we want to send to the client: in this case it's just a random
	    number that we generate on the server
	  */
	  var msg = Math.random();
	  io.emit('message', msg);
	  
	
	}, 5000);
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

  	
