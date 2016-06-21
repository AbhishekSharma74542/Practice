	console.log("We got Connected Let's Start");
	var server = require('http').createServer();
	var io = require('socket.io')(server);
	
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


	io.on('connection', function(socket){
	console.log("Connection Established");
	socket.on('event', function(data){
	console.log("Connection Established and on event");	
	console.log("Data on Event is  :: "+data);


	connection.connect();


	});
	socket.on('disconnect', function(){
	console.log("Connection Terminated");
	console.log("Data on Event is  :: "+data);
	});
	});
	server.listen(1339);
