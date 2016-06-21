	//127.0.0.1/8 Local Host 172.31.57.218
	console.log("We got Connected Let's Start");
	//Defining Libs
	var server = require('http').createServer();
	var io = require('socket.io')(server);
	io.on('connection', function(socket){
		console.log("Connected");
	  socket.on('event', function(data){
	  	console.log("On Event ");
	  	console.log(data);
	  });
	  socket.on('disconnect', function(){
	  	console.log("On Disconnection ");
	  });
	});
	server.listen(1330);
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

  	
