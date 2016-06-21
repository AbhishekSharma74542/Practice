	//127.0.0.1/8 Local Host 172.31.57.218
	console.log("We got Connected Let's Start");
	//Defining Libs
	var io = require('socket.io')();
	console.log("coming");
	io.on('connection', function(socket){
		console.log("Connected!!");
		var address = socket.handshake.address;
		console.log('New connection from ' + address.address + ':' + address.port);
	});
	console.log("coming 2");
	io.listen(1330);
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

  	
